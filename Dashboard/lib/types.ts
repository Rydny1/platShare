export type FoodStatus =
  | "available"
  | "almost-claimed"
  | "claimed"
  | "collected"
  | "expired";

export type FoodListing = {
  id: string;
  name: string;
  location: string;
  totalServings: number;
  claimedServings: number;
  pickupBy: string;
  status: FoodStatus;
};

export type ClaimStatus = "reserved" | "collected" | "missed";

export type Claim = {
  id: string;
  claimant: string;
  food: string;
  servings: number;
  time: string;
  status: ClaimStatus;
};

export type SummaryMetric = {
  label: string;
  value: number;
  detail: string;
};
