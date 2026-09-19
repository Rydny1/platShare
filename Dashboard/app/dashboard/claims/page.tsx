import { PageHeader } from "@/components/dashboard/page-header";
import { ClaimStatusBadge } from "@/components/dashboard/status-badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { recentClaims } from "@/lib/mock-data";

export default function ClaimsPage() {
  return (
    <div className="space-y-7">
      <PageHeader title="Claims" description="Reservations and pickups." />
      <Card className="overflow-hidden" role="region" aria-labelledby="todays-claims-heading">
        <div className="border-b border-border p-5"><h2 id="todays-claims-heading" className="text-base font-semibold">Today</h2><p className="mt-1 text-sm text-muted-foreground">{recentClaims.length} recent claims</p></div>
        <div className="hidden overflow-x-auto sm:block">
          <Table>
            <TableHeader><TableRow><TableHead>Claimant</TableHead><TableHead>Food</TableHead><TableHead>Servings</TableHead><TableHead>Time</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>{recentClaims.map((claim) => <TableRow key={claim.id}><TableCell className="font-medium">{claim.claimant}</TableCell><TableCell>{claim.food}</TableCell><TableCell>{claim.servings}</TableCell><TableCell className="text-muted-foreground">{claim.time}</TableCell><TableCell><ClaimStatusBadge status={claim.status} /></TableCell></TableRow>)}</TableBody>
          </Table>
        </div>
        <div className="divide-y divide-border sm:hidden">
          {recentClaims.map((claim) => <article key={claim.id} className="p-4"><div className="flex items-start justify-between gap-3"><div><h2 className="font-medium">{claim.claimant}</h2><p className="mt-1 text-sm text-muted-foreground">{claim.food}</p></div><ClaimStatusBadge status={claim.status} /></div><p className="mt-3 text-xs text-muted-foreground">{claim.servings} {claim.servings === 1 ? "serving" : "servings"} · {claim.time}</p></article>)}
        </div>
      </Card>
    </div>
  );
}
