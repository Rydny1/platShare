export function ClaimProgress({ claimed, total, compact = false }: { claimed: number; total: number; compact?: boolean }) {
  const percentage = Math.min(100, Math.round((claimed / total) * 100));
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center gap-3" aria-label={`${claimed} of ${total} servings claimed`}>
      <svg className={compact ? "size-9 -rotate-90" : "size-10 -rotate-90"} viewBox="0 0 40 40" role="img" aria-hidden="true">
        <circle cx="20" cy="20" r={radius} fill="none" stroke="var(--border)" strokeWidth="3" />
        <circle cx="20" cy="20" r={radius} fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <div><p className="text-sm font-medium tabular-nums">{claimed} / {total}</p><p className="text-xs text-muted-foreground">servings</p></div>
    </div>
  );
}
