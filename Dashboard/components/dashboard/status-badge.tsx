import type { ClaimStatus, FoodStatus } from "@/lib/types";

const foodStatusConfig: Record<FoodStatus, { label: string; text: string }> = {
  available: { label: "Available", text: "text-primary-strong" },
  "almost-claimed": { label: "Nearly full", text: "text-warning-foreground" },
  claimed: { label: "Claimed", text: "text-foreground" },
  collected: { label: "Collected", text: "text-primary-strong" },
  expired: { label: "Expired", text: "text-danger-foreground" },
};

const claimStatusConfig: Record<ClaimStatus, { label: string; text: string }> = {
  reserved: { label: "Reserved", text: "text-foreground" },
  collected: { label: "Collected", text: "text-primary-strong" },
  missed: { label: "Missed", text: "text-danger-foreground" },
};

export function FoodStatusBadge({ status }: { status: FoodStatus }) {
  const config = foodStatusConfig[status];
  return <span className={`text-xs font-medium ${config.text}`}>{config.label}</span>;
}

export function ClaimStatusBadge({ status }: { status: ClaimStatus }) {
  const config = claimStatusConfig[status];
  return <span className={`text-xs font-medium ${config.text}`}>{config.label}</span>;
}
