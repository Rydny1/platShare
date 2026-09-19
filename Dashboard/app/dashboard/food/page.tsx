import { ActiveOffers } from "@/components/dashboard/active-offers";
import { PageHeader } from "@/components/dashboard/page-header";
import { foodListings } from "@/lib/mock-data";

export default function FoodOffersPage() {
  return (
    <div className="space-y-7">
      <PageHeader title="Food offers" description="Availability and pickup times." action />
      <ActiveOffers offers={foodListings} showSearch />
    </div>
  );
}
