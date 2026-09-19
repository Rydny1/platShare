import { ActiveOffers } from "@/components/dashboard/active-offers";
import { AttentionPanel } from "@/components/dashboard/attention-panel";
import { PageHeader } from "@/components/dashboard/page-header";
import { RecentClaims } from "@/components/dashboard/recent-claims";
import { SummaryMetrics } from "@/components/dashboard/summary-metrics";
import { foodListings, recentClaims, summaryMetrics } from "@/lib/mock-data";

export default function OverviewPage() {
  return (
    <div className="space-y-7">
      <PageHeader title="Overview" description="Today’s food rescue activity." action />
      <SummaryMetrics metrics={summaryMetrics} />
      <section aria-label="Food rescue operations">
        <ActiveOffers offers={foodListings.filter((offer) => offer.status !== "collected")} />
        <div className="mt-8 grid gap-8 border-t border-border pt-7 md:grid-cols-2">
          <AttentionPanel />
          <RecentClaims claims={recentClaims} />
        </div>
      </section>
    </div>
  );
}
