"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, LayoutDashboard, Menu, Soup } from "lucide-react";

import { Brand } from "@/components/dashboard/brand";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Food offers", href: "/dashboard/food", icon: Soup },
  { label: "Claims", href: "/dashboard/claims", icon: ClipboardList },
];

function Navigation({ onMobile = false }: { onMobile?: boolean }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="space-y-1">
      {navigation.map((item) => {
        const active = item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
        const content = (
          <Link
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex min-h-11 items-center gap-3 border-l-2 px-3 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
              active ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            <item.icon className="size-4.5" aria-hidden="true" />
            {item.label}
          </Link>
        );

        return onMobile ? <SheetClose asChild key={item.href}>{content}</SheetClose> : <div key={item.href}>{content}</div>;
      })}
    </nav>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[232px_1fr]">
      <aside className="sticky top-0 hidden h-screen border-r border-border bg-card px-4 py-5 lg:flex lg:flex-col">
        <div className="px-2"><Brand /></div>
        <div className="mt-8"><Navigation /></div>
        <p className="mt-auto px-3 text-xs text-muted-foreground">Campus operations</p>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:hidden">
          <Brand />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation"><Menu className="size-4.5" /></Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Navigation</SheetTitle>
              <Brand />
              <div className="mt-8"><Navigation onMobile /></div>
              <p className="absolute bottom-6 left-7 text-xs text-muted-foreground">Campus operations</p>
            </SheetContent>
          </Sheet>
        </header>
        <main className="mx-auto w-full max-w-[1480px] p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
