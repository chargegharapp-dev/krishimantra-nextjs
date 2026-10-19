# Krishi Mantra Website: Master Prompts for Next.js

Use these prompts in order, in Claude Code, Cursor or any AI coding agent, with your project folder open. Paste PROMPT 0 first. It sets the context for every later prompt. Run one prompt at a time and test before moving on.

Before you start:
1. Create a folder `/content` in the project root and put all your documents there (About, Terms, Privacy Policy, Delete Account, Contact/Support, Play Store listing text). Convert to .md, .txt or .docx. Do not use scanned images.
2. Fill in the "FACTS" block in PROMPT 0 with your real details.

---

## PROMPT 0: Project context and rules (paste first)

```
You are a senior Next.js engineer and UI/UX designer. We are building the official public website for "Krishi Mantra", a free mobile app (Android, Google Play) for farmers in Nepal. The app has two purposes:
1. Knowledge and information sharing for farmers (crop guidance, farming tips, updates, community knowledge).
2. E-commerce for agriculture: farmers can browse and buy agricultural products and inputs they need (seeds, fertilizers, tools, equipment, etc.).
The app was previously called "Kheti Mantra" and is now "Krishi Mantra". It is available in Nepali and English and is based in Chitwan, Nepal.

PURPOSE OF THIS WEBSITE
This site exists mainly to give Google Play reviewers and users clear, permanent, public, mobile-friendly pages for: About Us, Terms & Conditions, Privacy Policy, Contact & Support, and Delete Account. It must also look like a professional product website for the app.

FACTS (use exactly these, never invent others)
- App name: Krishi Mantra (formerly Kheti Mantra)
- Package name: [YOUR PACKAGE NAME, e.g. com.xxx.krishimantra]
- Developer / company name: [YOUR LEGAL NAME]
- Address: [YOUR ADDRESS], Chitwan, Nepal
- Support email: [EMAIL]
- Phone / WhatsApp: [PHONE or remove]
- Website domain: [YOUR DOMAIN]
- Play Store link: [PLAY STORE URL or "coming soon"]
- Last updated date for legal pages: [DATE]

SOURCE OF TRUTH FOR CONTENT
All text lives in the /content folder. FIRST read every file in /content completely. Then:
- Use ALL of the content. Do not skip, shorten, summarize or drop any clause, section, list item or sentence in Terms, Privacy Policy or Delete Account.
- Keep the meaning exactly. You may fix spelling, grammar and formatting, and improve headings, but do not change legal meaning.
- If something important is missing (for example, no data retention period, no contact for privacy requests, no children's policy), do NOT invent it. Make a list of the gaps at the end and ask me.
- If content contradicts itself or contradicts the facts above, list the conflicts and ask me.

TECH STACK
- Next.js (latest stable, App Router), TypeScript, Tailwind CSS, shadcn/ui or Radix primitives, lucide-react icons, next/font, next/image.
- Static generation (SSG) for all pages so they load fast and are fully crawlable without JavaScript.
- No heavy animation libraries. Use CSS transitions and small Framer Motion usage only if it adds value.
- Deployable on Vercel (also works on any Node host).

DESIGN SYSTEM
- Theme: green and white, agriculture and nature, trustworthy and modern.
- Colors (define as CSS variables and Tailwind tokens): primary green #16A34A, deep green #14532D, fresh/lime accent #84CC16, soft green background #F0FDF4, white #FFFFFF, text #0F172A, muted text #475569, border #DCFCE7.
- Typography: Inter or Plus Jakarta Sans for English, Noto Sans Devanagari for Nepali. Body text at least 16px, comfortable line height, readable measure (max about 70 characters per line) for legal pages.
- Style: clean, generous whitespace, rounded cards, subtle shadows, soft green gradients, leaf/field-inspired decorative shapes in SVG. Professional, not cartoonish.
- Fully responsive: mobile-first, tested at 360px, 768px, 1024px, 1440px. No horizontal scroll anywhere.
- Accessibility: WCAG AA contrast, semantic HTML, visible focus states, alt text, labels on all form fields, skip-to-content link, keyboard navigable.
- Light mode only.

HARD RULES (Google Play policy safe)
- Every claim must be true and supported by the content in /content. No fake ratings, fake download counts, fake testimonials, fake awards, fake partnerships or "government approved/endorsed" claims unless I provide proof.
- Do not promise guaranteed income, yields, profits, or guaranteed results.
- Do not give medical, legal or financial guarantees. Agricultural advice must be described as general information.
- Do not use misleading or spammy wording, keyword stuffing, or clickbait. Do not mention other brands' trademarks as if partnered.
- Do not use the words or claims "best", "No.1", "guaranteed", "instant approval", "100% safe" or similar.
- No dark patterns, no pop-ups, no auto-playing audio/video, no intrusive ads, no cookie walls blocking content.
- The website must never contradict the app's actual behavior and its Play Console Data Safety form.
- All legal pages must be public, no login, plain HTML pages (not PDF, not images), and open fast on mobile.

After reading /content, reply with: (1) a summary of what you found per file, (2) the list of missing or conflicting information, (3) the proposed sitemap. Then wait for my approval before writing code.
```

---

## PROMPT 1: Project setup and architecture

```
Using the context from PROMPT 0, set up the project.

1. Create the Next.js app (TypeScript, Tailwind, App Router, ESLint, src directory). Install shadcn/ui, lucide-react and any minimal dependencies.
2. Folder structure:
   - src/app/(site)/page.tsx            Home
   - src/app/(site)/about/page.tsx
   - src/app/(site)/terms/page.tsx
   - src/app/(site)/privacy-policy/page.tsx
   - src/app/(site)/contact/page.tsx     Contact & Support
   - src/app/(site)/delete-account/page.tsx
   - src/app/api/contact/route.ts        form handler
   - src/app/api/delete-request/route.ts  deletion request handler
   - src/app/sitemap.ts, src/app/robots.ts, src/app/not-found.tsx, src/app/error.tsx
   - src/components/layout (Header, Footer, MobileNav, Container, Section)
   - src/components/ui (buttons, cards, accordion, form fields)
   - src/components/legal (LegalLayout, TableOfContents, LastUpdated, PrintButton)
   - src/content (typed content modules derived from /content)
   - src/lib/site-config.ts (all FACTS: app name, email, domain, package name, dates, links) so nothing is hard-coded twice
3. Configure Tailwind with the design tokens from PROMPT 0, load fonts with next/font (Inter + Noto Sans Devanagari), set up global styles.
4. Build the global layout:
   - Sticky header: logo (leaf mark + "Krishi Mantra"), nav links (Home, About, Terms, Privacy Policy, Contact & Support, Delete Account), a green "Get it on Google Play" button, and a mobile hamburger menu that is accessible.
   - Footer: logo, one-line description, links to all 5 pages, support email, address, Play Store badge link, copyright with current year, "Formerly Kheti Mantra" note.
   - Language toggle EN | ने (see PROMPT 8) in the header.
5. Create a simple SVG logo mark (leaf + sprout) in green, usable at 32px and 128px, and a favicon/app icon set.

Run the dev server, confirm it builds with zero errors and zero lint warnings, and show me the file tree.
```

---

## PROMPT 2: Content ingestion (do not lose a single word)

```
Read every file in /content again, completely.

Task: convert the documents into typed content modules in src/content/*.ts (or MDX) for these pages: about, terms, privacy, contact/support, delete-account, plus any app-description text for the home page.

Rules:
- Preserve 100% of the content: every heading, paragraph, bullet, numbered item, table, definition and contact detail. Maintain the original order and numbering.
- Structure each legal document as sections: { id, title, body (paragraphs, lists, sub-sections) } so the page can render a table of contents with anchor links.
- Fix only typos, spacing and formatting. If the Nepali and English versions both exist, store both and keep them paired.
- Replace placeholders with values from site-config.ts.
- After conversion, write a verification script (scripts/verify-content.ts) that compares word counts and section counts of the original files vs. the content modules, and prints any difference. Run it and show me the result. It must report zero missing sections.
- Print a "gaps and conflicts" report listing anything required for a typical app privacy policy or terms that is not in my documents (for example: data collected, purposes, third-party services and SDKs, payment handling, data retention period, children's privacy, user rights, security measures, contact for privacy requests, policy-change process, governing law). Do not fill gaps yourself. Ask me.
```

---

## PROMPT 3: Home page

```
Build the Home page (src/app/(site)/page.tsx) as a polished, modern, green-and-white landing page for the Krishi Mantra app. Use only truthful content from /content and the FACTS.

Sections, in order:
1. Hero: headline about connecting Nepal's farmers with knowledge and agricultural products (write it in plain honest words, for example "Farming knowledge and agri-products, together in one app for Nepal's farmers"), a one-sentence subhead, primary button "Get it on Google Play", secondary button "Learn more", and a phone mockup illustration (CSS/SVG, with a placeholder where real screenshots go). Soft green gradient background with subtle leaf shapes.
2. Trust strip: "Free to use", "Nepali and English", "Made in Chitwan, Nepal" (only items that are true).
3. What is Krishi Mantra: 2 short paragraphs from the About content.
4. Two feature pillars as large cards:
   a. Knowledge and Information Sharing (farming tips, crop information, updates, community sharing: only what the app really does).
   b. Agri E-commerce (browse and order seeds, fertilizers, tools and other farm needs: only what the app really does).
5. Feature grid (6 to 8 cards with lucide icons) built from the real feature list in /content.
6. How it works: 3 steps (Download, Sign up / browse, Learn and shop). Match the real app flow.
7. Who it is for: farmers, agri-input sellers and others, only if true.
8. Our commitment: short blocks linking to Privacy Policy, Terms, Delete Account, and Support, to show transparency.
9. FAQ accordion (6 to 8 questions) such as: Is the app free? Which languages? How do I contact support? How do I delete my account and data? Where is my data stored and used? (answers only from /content).
10. Final call to action band in deep green with the Play Store button.

Add a clear note near the footer: "Krishi Mantra provides general agricultural information. Always consult local agricultural experts for decisions specific to your farm." (Include only if consistent with the content.)

Requirements: SSG, optimized images, no layout shift, Lighthouse scores of 95+ on Performance, Accessibility, Best Practices and SEO on mobile.
```

---

## PROMPT 4: About Us page

```
Build /about from the About content in /content (use every word).

Layout:
- Page hero with title "About Krishi Mantra", breadcrumb, and a short intro.
- Our Story: including the rename from Kheti Mantra to Krishi Mantra.
- Our Mission and Our Vision (two cards).
- What we offer: knowledge sharing and agri e-commerce, with clear explanations of each.
- Our Values (for example: farmer-first, honesty, accessibility, local language, privacy), only if reflected in the content.
- Who we are: developer/company details, location in Chitwan, Nepal, and contact link. Use team/founder details only if I provided them.
- Why we built this: the problem for farmers in Nepal, written plainly.
- CTA band: Download on Google Play + Contact us.

Add JSON-LD structured data (Organization and MobileApplication) using only FACTS from site-config.ts. Add proper metadata (title, description, canonical, Open Graph).
```

---

## PROMPT 5: Terms & Conditions page

```
Build /terms from the Terms content in /content. Include EVERY clause, in the original order and numbering. Do not summarize or remove anything.

Layout (shared LegalLayout component):
- Title "Terms and Conditions", "Last updated: [date]" and "Applies to: Krishi Mantra mobile app and website".
- A short plain-language intro box ("Please read these terms carefully before using Krishi Mantra"), only if consistent with the original.
- Sticky table of contents on desktop (with scroll-spy highlighting), and a collapsible "On this page" menu on mobile.
- Each section has an anchor id, heading, and a copy-link icon on hover.
- Typography optimized for long reading: max-width about 720px, 17px text, clear heading hierarchy (h1 to h3), good list styling.
- "Print" and "Back to top" buttons.
- Bottom box: "Questions about these terms? Contact us at [email]" linking to /contact.

Make sure the terms cover (if they exist in my content, render them; if not, list them as gaps, do not invent): acceptance of terms, eligibility, user accounts, acceptable use, farming information disclaimer, marketplace/e-commerce terms (orders, payments, delivery, returns, seller responsibilities), user-generated content, intellectual property, third-party services, limitation of liability, termination and account deletion, changes to terms, governing law (Nepal), and contact.

Set metadata, canonical URL, and robots index, follow. The page must render fully as static HTML.
```

---

## PROMPT 6: Privacy Policy page (most important for Play Store)

```
Build /privacy-policy from the Privacy Policy content in /content. Include EVERY section, sentence and list item, in the original order. Do not summarize.

Layout: same LegalLayout as Terms, plus:
- Title "Privacy Policy for Krishi Mantra", "Effective date" and "Last updated" shown clearly, app name and package name, developer name and contact email near the top.
- A "Privacy at a glance" summary card at the top (6 to 8 short bullets), written only from facts in the policy: what data we collect, why, whether we sell data, how to delete data, how to contact us. Do not claim anything that the full policy does not say.
- Sticky table of contents + anchor links.
- Clear sections for (render if present in my content, otherwise list as gaps): information we collect (account/profile, contact details, location if used, device information, usage data, order and transaction information, photos or files if used, permissions requested and why), how we use information, legal basis/consent, sharing and disclosure (third-party services and SDKs by name, payment providers, delivery partners), data retention, data security, children's privacy, your rights (access, correction, deletion), how to delete your account and data (link to /delete-account prominently), cookies/analytics on the website, international transfers, changes to this policy, contact for privacy requests.
- A "Delete your account and data" callout box linking to /delete-account.

Consistency check: produce a table comparing the data types mentioned in the policy against what the app likely collects, and ask me to confirm it matches my Google Play Data Safety form and the app's actual permissions. Flag anything inconsistent.

The page must be plain HTML, public, no login, no PDF, indexable, fast, and its URL must be stable: /privacy-policy.
```

---

## PROMPT 7: Delete Account page (Play Store requirement)

```
Build /delete-account from the Delete Account content in /content (use every word). Google Play requires a public web page where users can request account and data deletion without needing to install the app, and the page must clearly name the app and developer.

Page content and layout:
1. Title "Delete Your Krishi Mantra Account", with app name, developer name and package name clearly displayed at the top.
2. Two options, in cards:
   a. Delete inside the app: numbered steps exactly as they work in the app (for example Profile, Settings, Delete Account, Confirm). Use my real steps from /content. If the app does not have the in-app option, show only option b.
   b. Request deletion from this website: a form.
3. What gets deleted vs. what may be kept and for how long (for example legal, tax or transaction records), taken from /content. If the content does not state this, list it as a gap and ask me.
4. Timeline for processing (from /content).
5. Confirmation that deletion is permanent and cannot be undone.
6. Partial deletion option (delete some data without deleting the account), if offered.
7. Links to Privacy Policy and Contact & Support.

Deletion request form (accessible, validated with Zod, react-hook-form):
- Fields: full name, registered phone number or email (whichever the app uses to log in), reason (optional dropdown), checkbox "I understand that this action is permanent", and a honeypot field plus rate-limiting for spam protection.
- API route /api/delete-request: validate, then send an email to the support address and a confirmation email to the user (use Resend or Nodemailer via environment variables), and return a reference number. Do not store sensitive data longer than needed. Do not log personal data.
- Success screen with the reference number and expected timeline.
- Add a note that we may need to verify identity before deleting, and explain how (without asking for passwords or sensitive IDs).

Never ask for passwords. Make this page indexable, with metadata and a clear H1.
```

---

## PROMPT 8: Contact & Support page

```
Build /contact (Contact & Support) from /content (use every word).

Layout:
- Hero "We are here to help", with response-time expectation (from /content, otherwise ask me).
- Contact cards: email (mailto), phone/WhatsApp (tel / wa.me link) if provided, postal address in Chitwan, Nepal, support hours.
- Contact form: name, email, phone (optional), topic dropdown (General question, Technical issue, Order or payment issue, Account help, Privacy request, Delete account, Feedback), message, consent checkbox. Validate with Zod. Honeypot, rate limiting, and email delivery through /api/contact with environment variables. Success and error states.
- Support FAQ accordion (account and login, orders, payments, delivery, app not working, language, privacy and deletion), using answers from /content or clearly general ones.
- Quick links: Delete Account, Privacy Policy, Terms.
- Embedded map only if I provide the exact location, and without trackers (otherwise skip).
- "Report a problem or abuse" mini-section if relevant.

Also add JSON-LD ContactPage / Organization markup using only real FACTS.
```

---

## PROMPT 9: Bilingual support (Nepali and English)

```
Add Nepali and English support to the whole site.

- Use next-intl (or built-in i18n routing) with locales "en" and "ne": /en/... and /ne/..., default "en". Redirect / based on Accept-Language but allow manual toggle in the header, and remember the choice.
- Use hreflang alternates, localized metadata, and lang attributes on <html>.
- Use Nepali text from /content where I provided it. For any UI text with no Nepali provided, write natural, simple Nepali (Devanagari), and mark all machine-written Nepali strings in a file TRANSLATION_REVIEW.md so a native speaker can review them before publishing. Never alter the legal meaning of provided Nepali legal text.
- Ensure Devanagari renders well (Noto Sans Devanagari, adjusted line height, no clipped matras).
- English legal pages remain the primary canonical text. If Nepali and English differ, add the note "In case of any difference, the English version prevails" only if I confirm.
```

---

## PROMPT 10: SEO, Play Store compliance and technical polish

```
Make the site production-ready for Google Play review and search.

SEO and metadata
- Unique title (under 60 characters) and meta description (under 160) for each page, canonical URLs, Open Graph and Twitter cards with a generated OG image, favicon set, web manifest, sitemap.xml and robots.txt (allow all).
- JSON-LD: Organization, WebSite, MobileApplication (name, operatingSystem Android, applicationCategory, offers price 0, only if true), FAQPage on pages with FAQ accordions.
- Semantic headings (exactly one h1 per page), descriptive link text, alt text.

Play Store review checklist (verify in code, then report pass or fail for each)
1. Privacy Policy URL is public, HTTPS, non-PDF, not behind login, not geo-blocked, and loads on mobile with no errors: /privacy-policy.
2. App name, developer name and contact email appear on the privacy policy page and match the Play Console listing.
3. Delete Account page exists at /delete-account, names the app and developer, explains the steps, data deleted and kept, and the timeline. A working request form exists.
4. Terms page at /terms is public and consistent with the privacy policy.
5. Contact & Support page has a working email and form.
6. No broken links, no placeholder text ("Lorem ipsum", "TODO", "[EMAIL]"), no missing images, no console errors.
7. No unverifiable claims, fake reviews or statistics, no misleading wording, no competitor trademarks, no ads.
8. Footer on every page links to all legal pages.
9. HTTPS-only with security headers (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS in production). No third-party trackers. If analytics are used, use a privacy-friendly one and disclose it in the privacy policy.
10. Cookie notice only if cookies are really used (and then non-blocking).

Performance and quality
- Lighthouse mobile 95+ in all four categories, Core Web Vitals green, fonts preloaded, images optimized, no unused JS.
- Run: build, lint, type-check, an automated broken-link check, and an axe accessibility scan. Fix every issue.
- Test layouts at 360, 390, 768, 1024, 1440 px and report with screenshots if possible.

Deployment
- Provide exact steps to deploy on Vercel, connect my custom domain, set environment variables (email provider keys, support email), and verify HTTPS.
- Output the final URLs I must paste into Play Console: Privacy Policy URL, Account deletion URL, Website URL, Support email.
```

---

## PROMPT 11: Final audit (run last)

```
Act as a strict Google Play policy reviewer and QA lead. Audit the finished website against /content and the FACTS.

1. Content completeness: compare each page with its source file in /content. List any missing word, clause, list item or section. The result must be zero.
2. Consistency: facts, dates, names, emails and package name are identical across all pages, the footer, the structured data and the metadata.
3. Policy risks: flag any sentence that could be considered misleading, a guarantee, an unverified claim, or inconsistent with the app's behavior.
4. Gaps: list required information that is still missing from the privacy policy, terms or deletion page.
5. Usability: test every link, button and form (success and error cases) on mobile.
6. Output a final report: PASS/FAIL table, list of fixes made, and a short list of items I must confirm manually (Data Safety form match, real screenshots, native-speaker Nepali review, live email delivery test).
```

---

## Important notes

- No website can guarantee instant or automatic approval. Google reviews the app itself: the Data Safety form, the permissions it requests, the store listing and how the app behaves. What this site does is remove the most common rejection causes: a missing or unreachable privacy policy, no account-deletion URL, and mismatches between the policy and the app.
- Make sure the following match one another exactly: the website's Privacy Policy, your Play Console Data Safety form, the app's real permissions and SDKs, and the in-app delete flow.
- Use the same developer name and support email on the website, in the privacy policy and in your Play Console listing.
- Have a lawyer in Nepal review the Terms and Privacy Policy if your app handles payments, because the e-commerce side adds legal duties.
