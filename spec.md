# MG Media Website — Version 28

## Current State
Four-page marketing website with Home, Projects & Services, About Us, Contact, ThankYou. Pricing section exists below the hero on the Home page. Navbar is sticky with logo + nav links. No dark mode. Plans have outdated feature lists. "Launch Your Website" goes to /contact. No AI chatbox.

## Requested Changes (Diff)

### Add
- Dark/Light Theme Toggle Switch in Navbar (top right), pill-shaped, 0.3s ease-in-out animation. Sun icon in light mode, Moon icon in dark mode. #8c52ff accent preserved in both modes.
- Dark mode theming across entire site: bg #121212, white text, #8c52ff accents.
- AI Chatbox floating button (bottom right), trained with MG Media website info (pages, plans, pricing). Greet on open, show quick questions, collect contact info, reply only about MG Media.

### Modify
- "Launch Your Website" hero CTA: scroll to #pricing-section instead of /contact
- Pricing title: "Best Website Design Services in Gorakhpur"
- Pricing subtitle: "Helping local businesses in Gorakhpur grow with affordable, high-quality, social media integration & SEO ready website."
- Starter plan: 3-4 Pages, Website Design & Development, Fast Loading in Mobile & Laptop, Basic Social Media Integration (remove free support, maintenance)
- Professional plan: 5-7 Pages, Website Design & Development, Fast Loading in Mobile & Laptop, Basic Social Media Integration, Enhanced SEO Optimization, AI Chatbox, Free Logo Design (remove free support, maintenance)
- Premium plan: Up to 10 Pages, Website Design & Development, Fast Loading in Mobile & Laptop, Basic Social Media Integration, Enhanced SEO Optimization, AI Chatbox, Professional Brand Logo Design, Google My Business Setup, Custom Design (remove free support, maintenance, change "unlimited" to "up to 10")

### Remove
- Free Support from all plans
- Website Maintenance & Updates from all plans

## Implementation Plan
1. Create ThemeContext with isDark, persisted to localStorage, toggle function
2. Create ThemeToggle pill component (sun/moon icons, 0.3s animation)
3. Add ThemeToggle to Navbar right side
4. Apply dark mode styles site-wide via CSS classes
5. Update PricingSection: title, subtitle, all plan features
6. Update hero Launch button to scroll to pricing
7. Create AIChatbox component with knowledge base and contact collection
8. Add AIChatbox to App.tsx
