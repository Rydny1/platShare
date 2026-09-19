import type { Claim, FoodListing, SummaryMetric } from "@/lib/types";

export const summaryMetrics: SummaryMetric[] = [
  { label: "Posted", value: 86, detail: "meals" },
  { label: "Claimed", value: 61, detail: "71% of posted" },
  { label: "Collected", value: 44, detail: "17 awaiting pickup" },
];

export const foodListings: FoodListing[] = [
  {
    id: "food-101",
    name: "Vegetable pasta trays",
    location: "North Dining Hall",
    totalServings: 24,
    claimedServings: 15,
    pickupBy: "Today, 4:30 PM",
    status: "available",
  },
  {
    id: "food-102",
    name: "Fresh fruit & yoghurt cups",
    location: "Student Union Café",
    totalServings: 18,
    claimedServings: 16,
    pickupBy: "Today, 3:45 PM",
    status: "almost-claimed",
  },
  {
    id: "food-103",
    name: "Roast vegetable wraps",
    location: "Library Café",
    totalServings: 12,
    claimedServings: 12,
    pickupBy: "Today, 5:15 PM",
    status: "claimed",
  },
  {
    id: "food-104",
    name: "Soup and bread portions",
    location: "West Campus Kitchen",
    totalServings: 20,
    claimedServings: 13,
    pickupBy: "Today, 6:00 PM",
    status: "available",
  },
  {
    id: "food-105",
    name: "Breakfast pastry boxes",
    location: "Engineering Atrium",
    totalServings: 12,
    claimedServings: 5,
    pickupBy: "Today, 1:30 PM",
    status: "expired",
  },
];

export const recentClaims: Claim[] = [
  { id: "claim-201", claimant: "Maya Chen", food: "Fresh fruit & yoghurt cups", servings: 1, time: "8 min ago", status: "reserved" },
  { id: "claim-202", claimant: "Noah Williams", food: "Vegetable pasta trays", servings: 2, time: "14 min ago", status: "reserved" },
  { id: "claim-203", claimant: "Amina Patel", food: "Roast vegetable wraps", servings: 1, time: "28 min ago", status: "collected" },
  { id: "claim-204", claimant: "Leo Martin", food: "Soup and bread portions", servings: 1, time: "41 min ago", status: "reserved" },
  { id: "claim-205", claimant: "Sofia Rossi", food: "Vegetable pasta trays", servings: 1, time: "1 hr ago", status: "collected" },
];
