import { Clock3 } from "lucide-react";

const items = [
  { title: "Pickup closes in 55 min", detail: "Fruit & yoghurt cups · Student Union Café" },
  { title: "12 wraps awaiting pickup", detail: "Library Café · 5:15 PM" },
];

export function AttentionPanel() {
  return (
    <section aria-labelledby="attention-heading">
      <h2 id="attention-heading" className="text-base font-semibold">Needs attention</h2>
      <div className="mt-3 divide-y divide-border border-y border-border">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3 py-4">
            <Clock3 className="mt-0.5 size-4 shrink-0 text-warning-foreground" aria-hidden="true" />
            <div><p className="text-sm font-medium">{item.title}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
