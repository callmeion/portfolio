# /images

Drop your real project photos and thumbnails in this folder, then point to
them from `data.js` using the `image` field, e.g.:

    image: "images/print-annual-report.jpg"

## Naming
Match the file name to the project's `id` for easy upkeep, e.g. a project
with `id: "print-annual-report"` → `images/print-annual-report.jpg`.

## Recommended specs
- Format: `.jpg` or `.webp` (smaller file size) — `.png` is fine for graphics
  with transparency.
- Aspect ratio: 4:3 (matches the gallery card thumbnail) — e.g. 800×600px.
- Keep each file under ~300KB so the gallery stays fast on mobile.

## No image yet?
Leave `image: ""` (empty string) on that project in `data.js`. The card will
automatically fall back to the colored gradient + icon placeholder — nothing
breaks, and you can add the real photo later.
