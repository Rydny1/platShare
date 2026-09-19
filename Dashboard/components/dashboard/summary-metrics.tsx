import type { SummaryMetric } from "@/lib/types";

export function SummaryMetrics({ metrics }: { metrics: SummaryMetric[] }) {
  return (
    <section aria-labelledby="today-summary">
      <h2 id="today-summary" className="mb-3 text-sm font-medium text-muted-foreground">Today</h2>
      <div className="grid grid-cols-3 border-y border-border py-5">
        {metrics.map((metric, index) => (
          <div key={metric.label} className={index > 0 ? "border-l border-border pl-4 sm:pl-6" : "pr-4 sm:pr-6"}>
            <p className="text-xs text-muted-foreground sm:text-sm">{metric.label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">{metric.value}</p>
            <p className="mt-1 hidden text-xs text-muted-foreground sm:block">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
