import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ClaimStatusBadge } from "@/components/dashboard/status-badge";
import type { Claim } from "@/lib/types";

export function RecentClaims({ claims }: { claims: Claim[] }) {
  return (
    <section aria-labelledby="recent-claims-heading">
      <div className="flex items-center justify-between">
        <h2 id="recent-claims-heading" className="text-base font-semibold">Recent claims</h2>
        <Link href="/dashboard/claims" className="flex min-h-10 items-center gap-1.5 text-xs font-medium text-primary-strong outline-none focus-visible:ring-2 focus-visible:ring-ring">View all <ArrowRight className="size-3.5" /></Link>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {claims.slice(0, 4).map((claim) => (
          <div key={claim.id} className="flex items-center gap-3 py-3.5">
            <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{claim.claimant}</p><p className="mt-0.5 truncate text-xs text-muted-foreground">{claim.servings} {claim.servings === 1 ? "serving" : "servings"} · {claim.food}</p></div>
            <div className="hidden shrink-0 sm:block"><ClaimStatusBadge status={claim.status} /></div>
            <span className="shrink-0 text-xs text-muted-foreground">{claim.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
