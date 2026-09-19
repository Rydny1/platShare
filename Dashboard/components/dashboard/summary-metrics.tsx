import { Card } from "@/components/ui/card";
import type { SummaryMetric } from "@/lib/types";

export function SummaryMetrics({ metrics }: { metrics: SummaryMetric[] }) {
  return (
    <section aria-labelledby="today-summary">
      <h2 id="today-summary" className="mb-3 text-sm font-medium text-muted-foreground">Today</h2>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-3 sm:p-5">
            <p className="text-xs text-muted-foreground sm:text-sm">{metric.label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">{metric.value}</p>
            <p className="mt-1 hidden text-xs text-muted-foreground sm:block">{metric.detail}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
