# PlateShare UI Guidelines

## Design intent

PlateShare should feel clean, modern, optimistic, and practical. Use a restrained green, white, and near-black system inspired by the logo. The interface should support fast scanning without looking clinical or overly corporate.

Three principles guide every screen:

1. **Lightweight:** show only information that helps staff act now.
2. **Calm:** use generous space, quiet borders, and limited color.
3. **Human:** use friendly language and subtle rounded forms suited to food rescue and campus life.

## Color system

Sample the exact primary green from the supplied logo when the asset is available. Until then, use the fallback values below as design tokens rather than scattering raw colors through components.

```css
:root {
  --brand: 142 71% 45%;        /* fallback near #22C55E */
  --brand-foreground: 0 0% 100%;
  --background: 0 0% 100%;
  --surface-subtle: 120 20% 98%;
  --foreground: 0 0% 9%;       /* near-black */
  --muted-foreground: 0 0% 40%;
  --border: 0 0% 90%;
}
```

- Use white as the dominant background.
- Use near-black for primary text and line work; avoid pure black across large areas.
- Reserve PlateShare green for primary actions, active navigation, positive status, progress, and small highlights.
- Use muted amber for warnings and muted red for expired/error states.
- Never make entire sections green unless they are deliberately small callouts.
- Maintain WCAG AA contrast for normal text and controls.

## Typography

- Use the project’s existing sans-serif font; prefer Geist if no font has been chosen.
- Page title: 28–32 px, semibold, tight line height.
- Section title: 16–18 px, semibold.
- Body: 14–16 px.
- Metadata: 12–14 px with sufficient contrast.
- Use sentence case. Avoid all caps except very short eyebrow labels.
- Prefer short, direct labels: **Add food**, **Available**, **Pickup by 4:30 PM**.

## Shape and depth

- Cards: 12–16 px radius with a quiet 1 px border.
- Buttons and inputs: 8–10 px radius.
- Status pills: fully rounded, compact, and text-labeled.
- Circular elements are encouraged for avatars, icons, status dots, and simple progress indicators.
- Keep circles functional and consistent; do not scatter decorative bubbles across the page.
- Prefer borders and subtle background shifts over heavy shadows. If used, shadows must be soft and shallow.

## Spacing and layout

- Use an 8 px spacing rhythm.
- Page gutters: 16 px mobile, 24 px tablet, 32 px desktop.
- Keep content in a comfortable maximum width while allowing the food list to breathe.
- Use generous vertical separation between page sections and tighter spacing within related groups.
- Desktop sidebar should remain slim, approximately 220–248 px.
- Avoid dense grids. Summary cards may use four columns on desktop, two on tablet, and one or two on mobile.

## Components

### Buttons

- One green primary action per view.
- Secondary actions use white or transparent backgrounds with neutral borders.
- Icon-only buttons require accessible names and tooltips where meaning is not obvious.

### Cards

- Keep card chrome minimal.
- Do not wrap every piece of content in a card; grouping should have a purpose.
- Summary cards should be smaller and quieter than the active-food section.

### Tables and lists

- Use comfortable row height, subtle separators, and strong alignment.
- Avoid zebra striping unless scanning becomes difficult.
- On mobile, convert rows into stacked cards with the primary fact first.

### Status and progress

- Pair every status color with a visible text label.
- Use small dots or pale tinted pills; avoid saturated filled badges for routine states.
- Circular progress may show claim completion, with the numeric value also written in text.
- Motion should be subtle, optional, and respect `prefers-reduced-motion`.

### Empty and loading states

- Empty states should be concise, useful, and include the next action.
- Skeletons should match the final layout and avoid excessive animation.

## Accessibility

- Use semantic landmarks, headings in order, and native controls where possible.
- Ensure every interaction is keyboard accessible.
- Provide clear focus rings using the brand green with adequate contrast.
- Minimum target size: 40 × 40 px; aim for 44 × 44 px on touch screens.
- Do not rely on color, icons, or hover alone to communicate meaning.
- Provide meaningful labels for progress indicators and icons.

## Avoid

- Large gradients, glassmorphism, neon color, or heavy shadows
- Oversized metric cards or complex charts
- Excessive rounded containers and decorative circles
- Multiple competing green shades
- Dense enterprise-dashboard patterns
- Placeholder copy, fake precision, or UI that suggests unavailable backend behavior

## Visual quality check

Before handoff, verify the dashboard at mobile, tablet, and desktop widths. Check alignment, hierarchy, contrast, empty/loading states, long food names, status clarity, and overflow. The finished UI should feel intentional with very little visual noise.
