# PlateShare — Codex Instructions

PlateShare is a lightweight university food-rescue product. This repository currently covers the admin dashboard only.

## Read first

Before changing dashboard behavior or presentation, read:

- `docs/dashboard.md`
- `docs/ui-guidelines.md`

If implementation and documentation disagree, preserve working behavior and report the conflict before expanding scope.

## Current scope

- Build a responsive admin dashboard using mock data.
- Use Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui.
- Show only the operational information described in `docs/dashboard.md`.
- Do not implement authentication, a backend, database persistence, WhatsApp integration, payments, analytics infrastructure, or notifications yet.

## Engineering rules

- Keep the solution small, readable, and production-minded.
- Prefer Server Components; add `"use client"` only when interaction requires it.
- Use strict TypeScript. Do not use `any` unless documented and unavoidable.
- Keep mock data and its types outside presentation components so a future API can replace it cleanly.
- Prefer small, reusable components when reuse is real; avoid premature abstractions.
- Use shadcn/ui primitives where they fit. Do not add a second component system.
- Do not add dependencies unless the existing stack cannot reasonably solve the problem.
- Use semantic HTML, accessible names, keyboard-friendly controls, and visible focus states.
- Make all layouts work on mobile, tablet, and desktop.
- Do not refactor unrelated code or silently expand the product scope.

## Suggested structure

```text
app/
  dashboard/
components/
  dashboard/
lib/
  mock-data.ts
  types.ts
docs/
  dashboard.md
  ui-guidelines.md
```

Adapt this to the existing repository rather than duplicating established folders.

## Definition of done

- The requested dashboard states and interactions work with local mock data.
- The interface follows the PlateShare visual rules.
- Loading, empty, and populated states are represented where relevant.
- The page has no obvious overflow or layout breakage at common viewport sizes.
- Lint, type-check, and relevant tests pass; fix only issues introduced by the work.
- Summarize changed files, validation performed, and any assumptions when handing off.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
