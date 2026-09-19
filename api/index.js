require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const SANDBOX_NUMBER = 'whatsapp:+14155238886';

// deadline is "HH:MM" string, compares against current time same day
function isPastDeadline(deadline) {
  if (!deadline) return false; // no deadline set = always open
  const [h, m] = deadline.split(':').map(Number);
  const cutoff = new Date();
  cutoff.setHours(h, m, 0, 0);
  return new Date() > cutoff;
}

app.post('/webhook', async (req, res) => {
  const from = req.body.From;
  const body = (req.body.Body || '').trim();
  const upper = body.toUpperCase();
  const twiml = new twilio.twiml.MessagingResponse();

  try {
    if (upper.startsWith('REGISTER')) {
      const name = body.slice(8).trim();
      const { data: existing } = await supabase
        .from('students')
        .select('id')
        .eq('whatsapp_number', from);

      if (existing && existing.length > 0) {
        await supabase.from('students').update({ name }).eq('whatsapp_number', from);
      } else {
        await supabase.from('students').insert({ whatsapp_number: from, name });
      }
      twiml.message(`Registered, ${name}. You'll get pinged when food's posted.`);

    } else if (upper.startsWith('POST')) {
      // Format: "POST 17:30 Rice and beans, 20 portions"
      const rest = body.slice(5).trim();
      const match = rest.match(/^(\d{1,2}:\d{2})\s+(.+)$/);

      if (!match) {
        twiml.message('Format: POST <closing time HH:MM> <description>\nExample: POST 17:30 Rice, 20 portions');
        return res.type('text/xml').send(twiml.toString());
      }

      const [, claimDeadline, description] = match;

      const { data: post, error } = await supabase
        .from('food_posts')
        .insert({ canteen_number: from, description, status: 'open', claim_deadline: claimDeadline })
        .select()
        .single();

      if (error) throw error;

      const { data: students } = await supabase.from('students').select('whatsapp_number');
      for (const s of students || []) {
        await twilioClient.messages.create({
          from: SANDBOX_NUMBER,
          to: s.whatsapp_number,
          body: `Free food available: ${description}. Reply CLAIM ${post.id} to grab it before ${claimDeadline}.`
        });
      }
      twiml.message(`Posted. Students notified. Closes at ${claimDeadline}.`);

    } else if (upper.startsWith('CLAIM')) {
      const postId = upper.split(' ')[1];

      const { data: existingPost } = await supabase
        .from('food_posts')
        .select('claim_deadline, status')
        .eq('id', postId)
        .single();

      if (!existingPost) {
        twiml.message('No such post.');
        return res.type('text/xml').send(twiml.toString());
      }

      if (isPastDeadline(existingPost.claim_deadline)) {
        twiml.message(`Sorry, claim window closed at ${existingPost.claim_deadline}.`);
        return res.type('text/xml').send(twiml.toString());
      }

      const { data, error } = await supabase
        .from('food_posts')
        .update({ status: 'claimed', claimed_by: from })
        .eq('id', postId)
        .eq('status', 'open')
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        twiml.message('Claimed! Head to the canteen now.');
      } else {
        twiml.message('Sorry, already claimed.');
      }

    } else {
      twiml.message('Commands: REGISTER <name>, POST <HH:MM> <description>, CLAIM <id>');
    }
  } catch (err) {
    console.error(err);
    twiml.message('Something went wrong. Try again.');
  }

  res.type('text/xml').send(twiml.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
