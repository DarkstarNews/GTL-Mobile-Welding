# GTL Mobile Welding — Website

Marketing and booking site for GTL Mobile Welding: mobile welding and
fabrication across Fairfield County, Connecticut.

Built as a hand-coded static site — no frameworks, no build step. Open
`index.html` in a browser and it works. That's intentional: it loads
instantly on a phone with one bar of signal, costs nothing to host, and
there's nothing to break or update.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site (single page, anchored sections) |
| `css/styles.css` | All styling |
| `js/main.js` | Mobile nav, scroll effects, FAQ, quote-form submission |
| `favicon.svg` | Browser tab icon (spark mark) |

## 🚨 Launch checklist — do these before sharing the link

1. **Phone number.** Search `index.html` and `js/main.js` for `555-0148`
   and replace every occurrence with your real number (it appears in both
   the visible text and the `tel:+1…` links — replace both forms).
2. **Quote form.** Create a free form at [formspree.io](https://formspree.io)
   (register with the email where you want quote requests delivered), then
   in `index.html` replace `YOUR_FORM_ID` in the form's `action` with the
   ID Formspree gives you. Until you do this, the form gracefully falls
   back to opening the visitor's email app addressed to
   `ryan@darkstarnews.com` — functional, but the real form is better.
3. **Email address.** The site currently shows `ryan@darkstarnews.com`
   (footer, mailto fallback in `js/main.js`, and the JSON-LD block in
   `index.html`). Swap it once you have a business address like
   `ryan@gtlmobilewelding.com`.
4. **Insurance wording.** Once your liability insurance is active,
   consider adding "Fully insured" to the credential strip and FAQ — it's
   the #1 trust signal for homeowners. It's deliberately not on the site
   yet so nothing published is untrue.
5. **Mailing list.** The form has a "keep me on the GTL list" checkbox;
   opt-ins arrive in each Formspree submission as `mailing_list: yes`.
   Collect those into a free [Mailchimp](https://mailchimp.com) or
   [Buttondown](https://buttondown.com) list when you're ready to send
   your first update.

## Adding your photos (the single biggest upgrade)

Real job photos will do more for this site than anything else. When you
have them:

1. Create an `img/` folder and drop in photos (phone photos are fine —
   crop tight, good light, wipe the lens).
2. In `index.html`, find the comment marked **PHOTO SLOT** in the story
   section and follow the instructions there to swap the placeholder for
   a real image.
3. Best subjects, in order: you welding (helmet down, sparks), the truck
   with the Bobcat visible, before/after pairs of repairs, finished
   fabrication pieces. Before/after pairs convert better than anything.

## Deploying (free)

Any of these works; **Cloudflare Pages** or **Netlify** are the easiest:

- **Netlify / Cloudflare Pages:** connect this GitHub repo, leave build
  settings empty (no build command, publish directory = repo root), and
  it deploys on every push.
- **GitHub Pages:** repo Settings → Pages → deploy from branch → `main`,
  root folder.

Then buy `gtlmobilewelding.com` (~$12/yr at Cloudflare or Namecheap) and
point it at the host — every host above has a guided "add custom domain"
flow. Once the domain is live, also:

- Set up a **Google Business Profile** (free) with the same name, phone,
  and service area — for "welder near me" searches, this matters more
  than the website itself. Link the site from the profile.

## Design notes (for future edits)

- Palette: warm off-white paper, deep harbor navy `#16303f`, one torch
  orange accent `#c45c1d` reserved for actions/CTAs only. Don't add
  colors.
- Type: Barlow Condensed for headings (uppercase, tight), Barlow for
  text, Source Serif 4 italic for pull quotes only.
- The tone of the copy is plain, specific, and first-person. When adding
  text, write like you talk on the phone with a customer — no marketing
  filler.
