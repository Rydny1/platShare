import type { ClaimStatus, FoodStatus } from "@/lib/types";

const foodStatusConfig: Record<FoodStatus, { label: string; text: string; dot: string }> = {
  available: { label: "Available", text: "text-primary-strong", dot: "bg-primary" },
  "almost-claimed": { label: "Nearly full", text: "text-warning-foreground", dot: "bg-warning" },
  claimed: { label: "Claimed", text: "text-foreground", dot: "bg-foreground" },
  collected: { label: "Collected", text: "text-primary-strong", dot: "bg-primary" },
  expired: { label: "Expired", text: "text-danger-foreground", dot: "bg-danger" },
};

const claimStatusConfig: Record<ClaimStatus, { label: string; text: string; dot: string }> = {
  reserved: { label: "Reserved", text: "text-foreground", dot: "bg-foreground" },
  collected: { label: "Collected", text: "text-primary-strong", dot: "bg-primary" },
  missed: { label: "Missed", text: "text-danger-foreground", dot: "bg-danger" },
};

export function FoodStatusBadge({ status }: { status: FoodStatus }) {
  const config = foodStatusConfig[status];
  return <span className={`inline-flex items-center gap-2 text-xs font-medium ${config.text}`}><span className={`size-1.5 rounded-full ${config.dot}`} aria-hidden="true" />{config.label}</span>;
}

export function ClaimStatusBadge({ status }: { status: ClaimStatus }) {
  const config = claimStatusConfig[status];
  return <span className={`inline-flex items-center gap-2 text-xs font-medium ${config.text}`}><span className={`size-1.5 rounded-full ${config.dot}`} aria-hidden="true" />{config.label}</span>;
}
