# PlateShare Admin Dashboard

## Purpose

Give university food-service staff a quick, calm view of today's food-rescue activity. The dashboard should answer three questions without complex reporting:

1. What food is available now?
2. How much has been claimed and collected today?
3. Which items need attention?

## Scope

Build the dashboard UI with local mock data only. Do not connect authentication, a backend, database, WhatsApp, or third-party services.

## Primary user

A campus administrator or food-service staff member who posts surplus food and monitors collection progress.

## Page structure

### App shell

- Compact left sidebar on desktop; collapsible sheet or menu on mobile.
- PlateShare logo and product name at the top.
- Navigation: **Overview**, **Food**, **Claims**, **Students**.
- For this phase, Overview is active. Other items may be inert or clearly presented as future destinations.
- A small admin identity/avatar area may appear at the bottom or top-right.

### Header

- Contextual greeting such as **Good afternoon**.
- Supporting line: **Here’s today’s food rescue activity.**
- Primary action: **Add food**. It may open a simple mock dialog or remain a clearly disabled future action; do not persist data.

### Today summary

Show four compact metrics:

- Posted
- Claimed
- Collected
- Students reached

Use small circular icon containers or circular progress accents. Avoid decorative charts and dense analytics.

### Active food

This is the main content area. Show a clean list or table with:

- Food name
- Pickup location
- Quantity or servings
- Pickup deadline
- Claim progress
- Status
- Lightweight action menu

Recommended statuses:

- **Available** — open for claims
- **Almost claimed** — limited quantity remains
- **Claimed** — fully reserved, awaiting collection
- **Collected** — pickup complete
- **Expired** — deadline passed

Use a circular progress indicator only when it communicates claimed-versus-available quantity clearly. A simple progress bar is acceptable on narrow screens.

### Attention panel

Include a small secondary panel only if mock data contains actionable items, such as:

- Pickup deadline approaching
- Claimed food awaiting collection
- Listing about to expire

Keep this brief. Do not build an alert system.

## Mock data shape

Keep data typed and separate from UI components. A suitable starting point is:

```ts
type FoodStatus =
  | "available"
  | "almost-claimed"
  | "claimed"
  | "collected"
  | "expired";

type FoodListing = {
  id: string;
  name: string;
  location: string;
  totalServings: number;
  claimedServings: number;
  pickupBy: string;
  status: FoodStatus;
};
```

Use realistic campus examples and a fixed local date or relative labels so the demo remains coherent.

## Required states

- Populated list with varied statuses
- Empty state with a clear **Add food** action
- Loading skeleton for the summary and active-food section
- Mobile presentation that converts the table into readable stacked cards if needed

## Interaction boundaries

- Filters may include **All**, **Available**, **Claimed**, and **Completed**.
- Search, if included, filters mock data in memory.
- Menus and dialogs should be simple and accessible.
- No action should imply that data has been permanently saved.
- Avoid maps, forecasting, exports, messaging workflows, or detailed analytics in this phase.

## Acceptance criteria

- The most important live information is visible without scrolling on a typical laptop.
- The active-food list is visually dominant over summary metrics.
- Status can be understood through both text and styling, never color alone.
- The page remains usable at 375 px width and scales cleanly to large desktop screens.
- The UI feels lightweight and operational, not like a finance or enterprise analytics dashboard.
