import { Clock3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  { title: "Pickup closes in 55 min", detail: "Fruit & yoghurt cups · Student Union Café" },
  { title: "12 wraps awaiting pickup", detail: "Library Café · 5:15 PM" },
];

export function AttentionPanel() {
  return (
    <Card role="region" aria-labelledby="attention-heading" className="overflow-hidden">
      <h2 id="attention-heading" className="border-b border-border px-5 py-4 text-base font-semibold">Needs attention</h2>
      <div className="divide-y divide-border px-5">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3 py-4">
            <Clock3 className="mt-0.5 size-4 shrink-0 text-warning-foreground" aria-hidden="true" />
            <div><p className="text-sm font-medium">{item.title}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p></div>
          </div>
        ))}
      </div>
    </Card>
  );
}
