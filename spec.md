# MG Media

## Current State
No existing frontend files found. Building from scratch based on previous deployment history.

## Requested Changes (Diff)

### Add
- Full redesign of all four pages with detailed layout and content as specified
- Home page: navbar with circular logo, hero with dual CTAs, Local Impact section, Quick Feature Grid (3 icons), Mini-Portfolio preview section with two project thumbnails, footer
- Projects & Services page: project cards with Raspberry Mist background, Our Services section with icons
- About Us page: split design (white left / dark raspberry right), verbatim bio text
- Contact Us page: dark raspberry full background, white form fields, Thank You redirect page
- Typography: bold serif for headings, clean sans-serif for body

### Modify
- Color palette refined: Dark Raspberry (#872642), Crisp White (#FFFFFF), Soft Charcoal (#333333) for body text
- Hero section: white background with subtle dark raspberry accent curve at bottom, two CTA buttons
- Logo only in navbar (circular) and footer — not in hero

### Remove
- Nothing (fresh build)

## Implementation Plan
1. Set up design tokens in index.css (OKLCH mapped from hex values)
2. Build App.tsx with React Router for 4 pages + Thank You page
3. HomePage: Navbar, Hero (dual CTA, raspberry curve), Local Impact, Feature Grid, Portfolio Preview, Footer
4. ProjectsPage: Project cards (Raspberry Mist bg), Services section with icons
5. AboutPage: Split layout — white left bio, dark raspberry right panel
6. ContactPage: Dark raspberry bg, white form fields, submit redirects to ThankYou
7. ThankYouPage: confirmation message
8. Apply deterministic data-ocid markers to all interactive surfaces
