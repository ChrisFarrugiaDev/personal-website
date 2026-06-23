# Christopher Farrugia — CV

HTML/CSS/JS CV project. Designed to be printed to PDF directly from a browser (A4, ~2 pages).

## Files

| File | Purpose |
|------|---------|
| `Christopher Farrugia - CV.html` | All content — edit this to update CV text |
| `cv.css` | All styles — edit this to change layout, spacing, or colours |
| `cv.js` | Minimal JS — wires up the Download PDF button and Ctrl+P shortcut |

## How to use

Open `Christopher Farrugia - CV.html` in a browser, then:
- Click **Download PDF** button or press **Ctrl+P**
- In the print dialog: set paper to **A4**, margins to **Default**, then **Save as PDF**
- On screens ≤ 900px the button becomes a circle icon fixed to the **bottom-right corner**

## Sections

All CV text is in `Christopher Farrugia - CV.html`. Sections are clearly marked with HTML comments:

```
<!-- ══ PROFILE ══ -->
<!-- ══ SKILLS ══ -->
<!-- ══ EXPERIENCE ══ -->
<!-- ══ SELECTED PROJECTS ══ -->
<!-- ══ CERTIFICATIONS ══ -->
<!-- ══ LANGUAGES ══ -->
<!-- ══ INTERESTS ══ -->
```

Each section uses a consistent pattern:
```html
<section class="sec">
  <div class="sec__heading">Section Title</div>
  <!-- content -->
</section>
```

Point-form sections (Certifications, Languages, Interests) use `<ul>` with class `cert-list`, `lang-list`, or `interests`.

## Contact details

Phone numbers use spaced international format: `+356 7931 0212` / `+44 7503 312948`.
Contact info is split across two fixed rows in the header — edit the two `<span>` blocks inside `.hd__contact`.

## Editing styles

Key variables at the top of `cv.css`:

```css
:root {
  --accent:  #1e3a5f;   /* heading and subtitle colour (deep navy) */
  --text-1:  #1a1a1a;   /* primary text */
  --text-2:  #444;      /* body text */
  --text-3:  #888;      /* muted text (dates, URLs) */
  --border:  #ccc;      /* section divider lines */
  --font:    'Segoe UI', Arial, sans-serif;
}
```

Base font size (`html { font-size: 10.8pt; }`) controls overall scale — increase to push content toward 3 pages, decrease to fit into 1 page.

## Page break control

`break-inside: avoid` is applied to `.project`, `.job`, and `.cert` to prevent them splitting across pages. `break-after: avoid` on `.sec__heading` prevents a heading being stranded at the bottom of a page.

## Responsive behaviour

| Breakpoint | Behaviour |
|------------|-----------|
| > 900px | Full button (top-right), normal layout |
| ≤ 900px | Button becomes circle icon, moves to bottom-right |
| ≤ 600px | Reduced body padding, smaller header text and contact font |

## Known decisions

- **"Profile"** used instead of "Summary" — standard on European/UK CVs
- **"Selected Projects"** heading kept — iotrack.live link opens in a new tab
- **Languages** use a grid layout with aligned dashes — `.lang-row` uses `grid-template-columns: 3rem 1rem 1fr`
- Cert URLs are shown in full for printed version credibility
