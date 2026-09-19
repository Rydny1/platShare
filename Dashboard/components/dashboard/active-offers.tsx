"use client";

import { useMemo, useState } from "react";
import { MoreHorizontal, Search, Soup } from "lucide-react";

import { AddFoodDialog } from "@/components/dashboard/page-header";
import { ClaimProgress } from "@/components/dashboard/claim-progress";
import { FoodStatusBadge } from "@/components/dashboard/status-badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { FoodListing } from "@/lib/types";
import { cn } from "@/lib/utils";

type OfferFilter = "all" | "available" | "claimed" | "completed";

const filters: { value: OfferFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "available", label: "Available" },
  { value: "claimed", label: "Claimed" },
  { value: "completed", label: "Completed" },
];

function matchesFilter(offer: FoodListing, filter: OfferFilter) {
  if (filter === "available") return offer.status === "available" || offer.status === "almost-claimed";
  if (filter === "claimed") return offer.status === "claimed";
  if (filter === "completed") return offer.status === "collected" || offer.status === "expired";
  return true;
}

function OfferActions({ name }: { name: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={`Actions for ${name}`}><MoreHorizontal className="size-4" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>View details</DropdownMenuItem>
        <DropdownMenuItem>Duplicate offer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ActiveOffers({ offers, showSearch = false }: { offers: FoodListing[]; showSearch?: boolean }) {
  const [filter, setFilter] = useState<OfferFilter>("all");
  const [query, setQuery] = useState("");
  const filteredOffers = useMemo(() => offers.filter((offer) => matchesFilter(offer, filter) && `${offer.name} ${offer.location}`.toLowerCase().includes(query.toLowerCase())), [filter, offers, query]);

  return (
    <section className="overflow-hidden border-y border-border" aria-labelledby="active-offers-heading">
      <div className="flex flex-col gap-4 border-b border-border py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="active-offers-heading" className="text-lg font-semibold">Active offers</h2>
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">{offers.filter((offer) => offer.status === "available" || offer.status === "almost-claimed").length} open</span>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid w-full grid-cols-4 gap-1 sm:flex sm:w-auto sm:overflow-x-auto" aria-label="Filter food offers">
            {filters.map((item) => (
              <button key={item.value} type="button" onClick={() => setFilter(item.value)} className={cn("min-h-10 shrink-0 border-b-2 px-1 text-xs font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:text-sm", filter === item.value ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")} aria-pressed={filter === item.value}>
                {item.label}
              </button>
            ))}
          </div>
          {showSearch ? (
            <label className="relative block w-full sm:max-w-64">
              <span className="sr-only">Search food offers</span>
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" className="h-10 w-full border-b border-border bg-background pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring" />
            </label>
          ) : null}
        </div>
      </div>

      {filteredOffers.length === 0 ? (
        <div className="flex flex-col items-center px-5 py-14 text-center">
          <Soup className="size-5 text-muted-foreground" aria-hidden="true" />
          <h3 className="mt-4 font-semibold">No offers found</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">Try another filter or add an offer.</p>
          <div className="mt-5"><AddFoodDialog /></div>
        </div>
      ) : (
        <>
          <div className="hidden overflow-x-auto md:block">
            <Table>
              <TableHeader><TableRow><TableHead>Food</TableHead><TableHead>Pickup</TableHead><TableHead>Claim progress</TableHead><TableHead>Status</TableHead><TableHead><span className="sr-only">Actions</span></TableHead></TableRow></TableHeader>
              <TableBody>
                {filteredOffers.map((offer) => (
                  <TableRow key={offer.id}>
                    <TableCell><p className="font-medium">{offer.name}</p><p className="mt-0.5 text-xs text-muted-foreground">{offer.location}</p></TableCell>
                    <TableCell><p className="font-medium">{offer.pickupBy.replace("Today, ", "")}</p><p className="mt-0.5 text-xs text-muted-foreground">Today</p></TableCell>
                    <TableCell><ClaimProgress claimed={offer.claimedServings} total={offer.totalServings} /></TableCell>
                    <TableCell><FoodStatusBadge status={offer.status} /></TableCell>
                    <TableCell className="w-14 text-right"><OfferActions name={offer.name} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="divide-y divide-border md:hidden">
            {filteredOffers.map((offer) => (
              <article key={offer.id} className="p-4">
                <div className="flex items-start justify-between gap-3"><div><h3 className="font-medium">{offer.name}</h3><p className="mt-1 text-xs text-muted-foreground">{offer.location}</p></div><OfferActions name={offer.name} /></div>
                <div className="mt-4"><ClaimProgress claimed={offer.claimedServings} total={offer.totalServings} compact /></div>
                <div className="mt-4 flex items-center justify-between gap-3"><div><p className="text-xs text-muted-foreground">Pickup by</p><p className="mt-0.5 text-sm font-medium">{offer.pickupBy}</p></div><FoodStatusBadge status={offer.status} /></div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
