export function ClaimProgress({ claimed, total, compact = false }: { claimed: number; total: number; compact?: boolean }) {
  const percentage = Math.min(100, Math.round((claimed / total) * 100));

  return (
    <div className={compact ? "min-w-28" : "w-32"} aria-label={`${claimed} of ${total} servings claimed`}>
      <div className="mb-1.5 flex justify-between text-xs"><span className="font-medium tabular-nums">{claimed} / {total}</span><span className="text-muted-foreground">{percentage}%</span></div>
      <div className="h-px bg-border"><div className="h-px bg-primary" style={{ width: `${percentage}%` }} /></div>
    </div>
  );
}
