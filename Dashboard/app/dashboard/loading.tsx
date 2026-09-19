import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-7" aria-label="Loading dashboard" aria-busy="true">
      <div><Skeleton className="h-9 w-52" /><Skeleton className="mt-3 h-4 w-72 max-w-full" /></div>
      <div className="grid grid-cols-3 border-y border-border py-5">{Array.from({ length: 3 }).map((_, index) => <div key={index} className={index > 0 ? "border-l border-border pl-5" : "pr-5"}><Skeleton className="h-3 w-16" /><Skeleton className="mt-3 h-8 w-12" /></div>)}</div>
      <div className="border-y border-border py-5"><Skeleton className="h-5 w-40" /><div className="mt-6 space-y-4">{Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-16 w-full" />)}</div></div>
    </div>
  );
}
