# Implementation Plan: High Breed Network Website

## Overview

A Next.js 14+ marketing website built with TypeScript and Tailwind CSS. The implementation follows the App Router architecture with static generation, a branded animated page loader, seven service category pages, and a Server Action–powered contact form with Nodemailer email delivery.

## Tasks

- [x] 1. Project scaffold and configuration
  - [x] 1.1 Initialise Next.js 14+ project with TypeScript and Tailwind CSS
    - Run `create-next-app` with App Router, TypeScript, and Tailwind CSS options
    - Confirm `tsconfig.json` has `"strict": true`
    - Add exact version pins to `package.json` for all dependencies (`tailwindcss`, `react-hook-form`, `zod`, `nodemailer`, `fast-check`, `vitest`, `@testing-library/react`, `@vitejs/plugin-react`)
    - Create `.gitignore` with `node_modules/`, `.next/`, `.env*`, `out/`, `dist/`, `*.tsbuildinfo`
    - _Requirements: 1.1, 1.2, 1.4, 1.5_

  - [x] 1.2 Configure Tailwind CSS brand theme tokens
    - Write `tailwind.config.ts` with the full brand colour palette (`brand.blue`, `brand.blue-light`, `brand.blue-dark`, `brand.green`, `brand.green-light`, `brand.green-dark`, `brand.white`, `brand.off-white`)
    - Add `fontFamily.sans` pointing to Geist Sans / Inter CSS variables
    - Set `content` array to cover `./app/**/*.{ts,tsx}` and `./components/**/*.{ts,tsx}`
    - _Requirements: 2.2, 2.4_

  - [x] 1.3 Configure `next.config.ts` and environment variable schema
    - Write `next.config.ts` with `reactStrictMode: true` and `images.formats: ["image/avif", "image/webp"]`
    - Create `.env.example` documenting `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL_TO`
    - _Requirements: 1.3_

- [x] 2. Global styles and fonts
  - [x] 2.1 Set up global CSS and font loading
    - In `styles/globals.css`, set `background-color: #ffffff` as base and import Tailwind layers
    - Load Geist Sans (or Inter) via `next/font` in `app/layout.tsx`; expose CSS variable `--font-geist-sans`
    - Ensure minimum body font size is 14 px; define heading font-weight variants
    - _Requirements: 2.1, 2.5, 9.2_

- [x] 3. Static data layer and validation schemas
  - [x] 3.1 Create `lib/services-data.ts` with all seven service categories
    - Define and export the `ServiceCategory` TypeScript interface
    - Write the `SERVICE_CATEGORIES` constant array with complete data for all seven slugs: `vehicle-diagnostics`, `ecu-programming`, `key-immobilizer`, `hybrid-ev`, `anti-theft-tracking`, `performance-tuning`, `dash-cam`
    - Anti-Theft & Tracking capabilities MUST include: "Remote Cut-Off", "SMS/App Alerts", "Real-Time Location Tracking"
    - Hybrid & EV capabilities MUST include: "Hybrid System Diagnostics & Repair", "Battery Health Check & Regeneration"
    - `supportedBrands` for relevant services MUST include Toyota, Lexus, Mercedes-Benz, and a broad brand note
    - _Requirements: 7.1, 7.4, 7.5, 7.7_

  - [x] 3.2 Create `lib/validations.ts` with Zod contact form schema
    - Export `contactFormSchema` with fields: `name` (min 2), `phone` (min 7), `email` (optional email or empty string), `serviceInterest` (enum of all 7 slugs + empty string), `message` (min 10)
    - Export `ContactFormData` type inferred from the schema
    - _Requirements: 8.4, 8.6_

  - [ ]* 3.3 Write property test for contact form schema (Property 4)
    - **Property 4: Contact form validates all combinations of missing required fields**
    - **Validates: Requirements 8.6**
    - Use `fast-check` with `fc.record` and `fc.oneof(fc.constant(""), fc.string(...))` for name, phone, message
    - Assert that any submission missing name (<2 chars), phone (<7 chars), or message (<10 chars) results in `result.success === false` with matching `fieldErrors`
    - Tag: `Feature: highbreed-network-website, Property 4: Contact form validates all combinations of missing required fields`
    - Run minimum 100 iterations

  - [ ]* 3.4 Write property test for service data completeness (Property 2)
    - **Property 2: Every service category page renders required content**
    - **Validates: Requirements 7.1, 7.3**
    - Use `fc.constantFrom` over all 7 slugs; for each slug assert `title`, `description`, `capabilities.length > 0`, `supportedBrands.length > 0`
    - Tag: `Feature: highbreed-network-website, Property 2: Every service category page renders required content`
    - Run minimum 100 iterations

- [x] 4. Layout components: Navbar, MobileDrawer, and Footer
  - [x] 4.1 Implement `components/layout/Navbar.tsx`
    - Render logo (links to `/`), desktop nav links (Home, About, Services, Contact), and a CTA button linking to `/contact` using a brand accent colour
    - Use `usePathname()` for active-link highlighting
    - Render a Services dropdown on hover/focus listing all seven Service Category links
    - Below 768 px, hide desktop nav and show hamburger icon button; manage `MobileDrawer` open/close state
    - All nav links and the CTA button must have tap targets ≥ 44 × 44 px
    - All interactive elements must be keyboard-navigable with visible focus indicators
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.8, 9.3, 10.3_

  - [x] 4.2 Implement `components/layout/MobileDrawer.tsx`
    - Accept `isOpen` and `onClose` props
    - Render all top-level nav links and expanded Services sub-items inside a slide-in drawer
    - Call `onClose` when any navigation link is tapped
    - _Requirements: 4.6, 4.7_

  - [x] 4.3 Implement `components/layout/Footer.tsx`
    - Display company logo or wordmark, tagline ("ONE NETWORK. ALL SOLUTIONS."), phone as `tel:08060617790`, email as `mailto:highbreed@gmail.com`, WhatsApp link for 08060617790
    - Include quick nav links: Home, About, Services, Contact
    - Display copyright notice for High Breed Network
    - _Requirements: 5.7, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

  - [ ]* 4.4 Write unit tests for Navbar, MobileDrawer, and Footer
    - Navbar: assert all four top-level links render; dropdown visible on focus; hamburger visible at narrow viewport; CTA links to `/contact`
    - MobileDrawer: assert drawer opens/closes; all links present; closes on link tap
    - Footer: assert phone, email, WhatsApp link, quick nav links, and copyright render
    - _Requirements: 4.1, 4.2, 4.6, 4.7, 11.3, 11.4_

- [x] 5. Animated Page Loader
  - [x] 5.1 Implement `components/layout/PageLoader.tsx`
    - Mark as `"use client"`; manage internal state: `animating → fading → hidden`
    - Render full-screen fixed overlay (`z-50`); include inline SVG with solar panel (blue `#1a6fd4`), electric car silhouette (green `#3a9a3a`), sun icon, and "HIGH BREED NETWORK" wordmark
    - Implement CSS keyframe animation sequence: overlay fade-in (0–0.4 s), solar panel draw-in (0.4–1.2 s), car slide-in (0.8–1.6 s), sun rays rotation (1.2–1.8 s), text character fade-in (1.6–2.2 s), overlay fade-out (2.2–3.0 s)
    - In `useEffect`, detect `window.matchMedia("(prefers-reduced-motion: reduce)")`; if true, set `isVisible = false` immediately without playing animations
    - Wrap animation logic in try/catch; on error, hide loader immediately
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ]* 5.2 Write unit tests for PageLoader
    - Assert full-screen overlay renders on mount
    - Assert loader hides after animation completes (mock timers)
    - Assert animation is skipped and content revealed immediately when `prefers-reduced-motion: reduce` is mocked
    - _Requirements: 3.1, 3.4, 3.6_

- [x] 6. Shared UI components
  - [x] 6.1 Implement `components/shared/CtaButton.tsx`, `SectionHeading.tsx`, and `ServiceCard.tsx`
    - `CtaButton`: accepts `href`, `children`, and optional `variant` (blue/green); renders using brand accent colours; tap target ≥ 44 × 44 px; keyboard focusable with visible outline
    - `SectionHeading`: accepts `title` and optional `subtitle`; renders semantic `<h2>` with brand styling
    - `ServiceCard`: accepts `slug`, `title`, `description`, `icon`, `href`; renders a card with icon, title, description, and a link to the service page
    - _Requirements: 2.3, 9.3, 10.3_

  - [ ]* 6.2 Write unit tests for shared components
    - `ServiceCard`: assert title, description, and correct `href` render
    - `CtaButton`: assert correct `href` and brand colour class applied
    - _Requirements: 2.3_

- [x] 7. Root layout and app entry point
  - [x] 7.1 Write `app/layout.tsx` root layout
    - Import and apply global font via `next/font`; set `<html lang="en">`
    - Render `<PageLoader />` before `{children}`
    - Render `<Navbar />` and `<Footer />` wrapping `<main>{children}</main>`
    - Use semantic elements: `<header>` (inside Navbar), `<main>`, `<footer>`
    - _Requirements: 4.1, 10.4_

- [x] 8. Home page
  - [x] 8.1 Implement `app/page.tsx` and all home page section components
    - `HeroSection` (`components/home/HeroSection.tsx`): primary tagline "ONE NETWORK. ALL SOLUTIONS.", sub-tagline, two CTA buttons ("Get a Diagnosis" → `/contact`, "Learn More" → `/services`); automotive/tech background graphic or `<Image>`
    - `KeyHighlights` (`components/home/KeyHighlights.tsx`): strip with at least: Expert Technicians, Latest Equipment, Accurate Diagnosis, Data Security — each with an icon
    - `FeaturedServices` (`components/home/FeaturedServices.tsx`): at least six services rendered as `<ServiceCard>` components
    - `VehicleTypes` (`components/home/VehicleTypes.tsx`): list Petrol, Diesel, Hybrid, PHEV, EV with icons
    - `SecondaryCta` (`components/home/SecondaryCta.tsx`): tagline "ALL BRANDS. ALL SYSTEMS. TOTAL SOLUTIONS." + button linking to `/contact`
    - Export page `metadata` with non-empty `title` and `description`
    - Use `<Image>` for all raster images with non-empty `alt` text
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 10.1, 10.2, 10.5_

  - [ ]* 8.2 Write property test for home page metadata (Property 6, partial)
    - **Property 6: Every page has title and meta description**
    - **Validates: Requirements 10.5**
    - Assert `metadata.title` and `metadata.description` are non-empty strings for the home page metadata export
    - Tag: `Feature: highbreed-network-website, Property 6: Every page has title and meta description`

- [x] 9. About page
  - [x] 9.1 Implement `app/about/page.tsx`
    - Company story section with mission and background text
    - Core values list: dealer-level diagnostics, OEM software & database, fast turnaround, affordable pricing, customer satisfaction, warranty on select services
    - "Why Choose Us" section with icons for: Expert Technicians, Latest Equipment, Accurate Diagnosis, Data Security, Affordable Pricing, Warranty on Select Services
    - Service model statements: "WE COME TO YOU OR YOU VISIT US" and "SERVING INDIVIDUALS, FLEETS & DEALERSHIPS"
    - CTA section directing to `/contact`
    - Export page `metadata` with non-empty `title` and `description`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 10.5_

- [x] 10. Services overview and category pages
  - [x] 10.1 Implement `app/services/page.tsx` (Services overview)
    - List all seven Service Categories with `<ServiceCard>` components linking to respective detail pages
    - Export page `metadata` with non-empty `title` and `description`
    - _Requirements: 7.2, 10.5_

  - [x] 10.2 Implement all seven `app/services/[slug]/page.tsx` service detail pages
    - Create individual page files for each slug: `vehicle-diagnostics`, `ecu-programming`, `key-immobilizer`, `hybrid-ev`, `anti-theft-tracking`, `performance-tuning`, `dash-cam`
    - Each page reads data from `SERVICE_CATEGORIES` via slug; renders `<h1>` heading, description paragraphs, capabilities list (`<ul>`), supported brands list
    - Each page renders a CTA button/link to `/contact` or triggering a contact method
    - Export `metadata` per page with non-empty `title` and `description` — collect all page metadata in a `PAGE_METADATA` constant in `lib/services-data.ts` for testability
    - Use semantic HTML: `<main>`, `<section>`, `<h1>`, `<ul>`
    - _Requirements: 7.1, 7.3, 7.4, 7.5, 7.6, 7.7, 10.4, 10.5_

  - [ ]* 10.3 Write property test for service pages CTA presence (Property 3)
    - **Property 3: Every service category page contains a CTA**
    - **Validates: Requirements 7.6**
    - Use `fc.constantFrom` over all 7 slugs; render each service page and assert at least one link with text matching `/contact|book|enquire/i` is present
    - Tag: `Feature: highbreed-network-website, Property 3: Every service category page contains a CTA`
    - Run minimum 100 iterations

  - [ ]* 10.4 Write property test for all page metadata (Property 6, full coverage)
    - **Property 6: Every page has title and meta description**
    - **Validates: Requirements 10.5**
    - Use `fc.constantFrom` over all 11 page keys (home, about, services, contact + 7 service slugs); assert `PAGE_METADATA[key].title` and `PAGE_METADATA[key].description` are non-empty
    - Tag: `Feature: highbreed-network-website, Property 6: Every page has title and meta description`
    - Run minimum 100 iterations

  - [ ]* 10.5 Write property test for service pages alt text (Property 5)
    - **Property 5: Every page image has descriptive alt text**
    - **Validates: Requirements 10.2**
    - Use `fc.constantFrom` over all 7 service slugs; render each page and assert every `<img>` has a non-empty, non-null `alt` attribute
    - Tag: `Feature: highbreed-network-website, Property 5: Every page image has descriptive alt text`
    - Run minimum 100 iterations

- [~] 11. Checkpoint — Core pages and data
  - Ensure all tests pass for tasks 1–10. Verify `next build` completes without TypeScript errors. Ask the user if questions arise before proceeding.

- [x] 12. Contact page and form
  - [x] 12.1 Implement `lib/send-email.ts` server-side email helper
    - Import `nodemailer`; create transporter using `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` environment variables
    - Export `sendContactEmail(data: ContactFormData): Promise<void>` that sends a formatted notification to `CONTACT_EMAIL_TO`
    - Throw descriptive errors on delivery failure
    - _Requirements: 8.4, 8.5_

  - [x] 12.2 Implement `components/contact/ContactForm.tsx` with Server Action
    - Mark form internals as `"use client"` where needed; use `useActionState` (React 19) or `useFormState`
    - Fields: Name (required), Phone Number (required), Email Address (optional), Service of Interest (dropdown of all 7 slugs), Message (required)
    - Client-side validation via Zod before invoking Server Action; display inline field-level error messages
    - Server Action validates with `contactFormSchema`, calls `sendContactEmail`, returns success or error state
    - Show visible success confirmation on submission; show "Something went wrong, please try again" on Server Action error
    - All form inputs keyboard-navigable with visible focus indicators; use `<label>` elements
    - _Requirements: 8.4, 8.5, 8.6, 10.3_

  - [x] 12.3 Implement `app/contact/page.tsx`
    - Display phone as `<a href="tel:08060617790">08060617790</a>`
    - Display WhatsApp link `https://wa.me/2348060617790`
    - Display email as `<a href="mailto:highbreed@gmail.com">highbreed@gmail.com</a>`
    - Render `<ContactForm />`
    - Include "WE COME TO YOU OR YOU VISIT US" and "SERVING INDIVIDUALS, FLEETS & DEALERSHIPS" statements
    - Export page `metadata` with non-empty `title` and `description`
    - _Requirements: 8.1, 8.2, 8.3, 8.7, 8.8, 10.5_

  - [ ]* 12.4 Write unit tests for ContactForm
    - Assert success message renders after valid form submission (mock Server Action)
    - Assert field-level inline errors render after submitting with empty required fields
    - _Requirements: 8.5, 8.6_

- [x] 13. Custom 404 page
  - [x] 13.1 Implement `app/not-found.tsx`
    - Render an on-brand 404 message using brand palette colours
    - Include a link back to the home page (`/`)
    - Export page `metadata` with non-empty `title` and `description`
    - _Requirements: 1.3_

- [ ] 14. Responsive layout audit
  - [-] 14.1 Audit and fix mobile responsiveness across all pages
    - Verify no horizontal scroll at 320 px viewport width by inspecting Tailwind breakpoint classes
    - Ensure all multi-column sections use `flex-col` or single-column Tailwind classes below `md:` breakpoint
    - Verify all CTA buttons and nav links have `min-h-[44px] min-w-[44px]` or equivalent tap target sizing
    - Verify all images use `<Image>` with responsive `sizes` prop
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 15. Accessibility and SEO audit
  - [-] 15.1 Audit and fix accessibility across all components
    - Add `axe-core` or `jest-axe` to the test suite; run assertions on rendered pages to catch ARIA and contrast violations
    - Verify every interactive element has a visible focus indicator (`:focus-visible` ring via Tailwind)
    - Verify semantic HTML structure: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h6>` used correctly on all pages
    - Verify all `<img>` / `<Image>` elements have non-empty `alt` attributes
    - _Requirements: 10.2, 10.3, 10.4_

  - [ ]* 15.2 Write property test for navigation on every page (Property 1)
    - **Property 1: Navigation header is present on every page**
    - **Validates: Requirements 4.1, 4.2**
    - Use `fc.constantFrom` over all 11 routes; render each route and assert `getByRole("navigation")` exists and links to Home, About, Services, Contact are present
    - Tag: `Feature: highbreed-network-website, Property 1: Navigation header is present on every page`
    - Run minimum 100 iterations

- [~] 16. Final checkpoint — Full build and test suite
  - Run `next build` and confirm it completes without errors. Ensure all unit and property tests pass. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at natural breakpoints
- Property tests validate universal correctness properties across all valid inputs; unit tests cover specific examples and edge cases
- All property tests use `fast-check` with a minimum of 100 iterations per the design spec
- SMTP credentials must be configured as Vercel environment variables and never committed to the repository
- The `PAGE_METADATA` constant in `lib/services-data.ts` enables testable metadata validation without rendering full Next.js pages

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["2.1", "3.1", "3.2"] },
    { "id": 2, "tasks": ["3.3", "3.4", "6.1"] },
    { "id": 3, "tasks": ["4.1", "4.2", "4.3", "6.2"] },
    { "id": 4, "tasks": ["4.4", "5.1"] },
    { "id": 5, "tasks": ["5.2", "7.1"] },
    { "id": 6, "tasks": ["8.1", "9.1", "10.1", "12.1"] },
    { "id": 7, "tasks": ["8.2", "10.2"] },
    { "id": 8, "tasks": ["10.3", "10.4", "10.5", "12.2", "13.1"] },
    { "id": 9, "tasks": ["12.3", "12.4"] },
    { "id": 10, "tasks": ["14.1"] },
    { "id": 11, "tasks": ["15.1"] },
    { "id": 12, "tasks": ["15.2"] }
  ]
}
```
