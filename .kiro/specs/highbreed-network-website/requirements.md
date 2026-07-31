# Requirements Document

## Introduction

High Breed Network is an automotive diagnostics and ECU programming business that serves individuals, fleet operators, and dealerships across all vehicle brands and fuel types (Petrol, Diesel, Hybrid, PHEV, EV). The business offers mobile and in-shop services ranging from advanced diagnostics and ECU programming to anti-theft tracking and dash cam installation.

This document defines requirements for a modern Next.js marketing website that presents the company's services, builds trust with prospective customers, and drives inquiries via phone, WhatsApp, and a contact form. The site must be fully responsive, optimised for mobile, and deployable to Vercel.

---

## Glossary

- **Website**: The Next.js application described in this document.
- **Visitor**: Any person accessing the Website in a browser.
- **CTA**: Call-to-Action — a button or link that prompts the Visitor to contact High Breed Network.
- **Hero Section**: The primary above-the-fold banner on the Home page.
- **Page Loader**: A full-screen animated overlay shown while the initial page content is loading.
- **Service Category**: One of the seven grouped service areas listed in the Services navigation dropdown.
- **Brand Palette**: The approved colour set: Blue `#1a6fd4`, Green `#3a9a3a`, and their greyscale-blended variants.
- **App Router**: The Next.js 14+ file-system routing mechanism using the `app/` directory.
- **Viewport**: The visible area of the browser window on any device.

---

## Requirements

### Requirement 1: Technology Stack and Project Foundation

**User Story:** As a developer, I want the project to use a well-defined, modern stack, so that the site can be maintained, extended, and deployed without friction.

#### Acceptance Criteria

1. THE Website SHALL be built with Next.js (App Router), TypeScript, and Tailwind CSS.
2. THE Website SHALL include a `.gitignore` file that excludes `node_modules/`, `.next/`, `.env*`, and build artefacts.
3. THE Website SHALL be configured for zero-configuration deployment to Vercel via a `next.config.ts` (or `next.config.js`) file.
4. THE Website SHALL use TypeScript strict mode (`"strict": true` in `tsconfig.json`).
5. THE Website SHALL declare all third-party dependencies with exact version pins in `package.json`.

---

### Requirement 2: Global Brand Palette and Typography

**User Story:** As a brand owner, I want the site's colours and fonts to reflect the High Breed Network identity, so that Visitors instantly associate the site with the company.

#### Acceptance Criteria

1. THE Website SHALL apply a white (`#ffffff`) base background across all pages.
2. THE Website SHALL use Blue (`#1a6fd4`) and Green (`#3a9a3a`) as the two primary accent colours.
3. THE Website SHALL render all interactive buttons using greyscale-blended variants of Blue `#1a6fd4` and Green `#3a9a3a` (no pure-black or unrelated-colour buttons).
4. THE Website SHALL define the Brand Palette as Tailwind CSS custom theme tokens so that colours are applied consistently from a single source.
5. THE Website SHALL load a sans-serif web font (e.g., Inter or Geist) for body text and a complementary bold-weight variant for headings.

---

### Requirement 3: Animated Page Loader

**User Story:** As a Visitor, I want to see a branded loading animation when I first arrive, so that the experience feels polished and consistent with the High Breed Network identity.

#### Acceptance Criteria

1. WHEN the Website is first loaded in a browser, THE Page Loader SHALL display a full-screen overlay before page content is revealed.
2. THE Page Loader SHALL animate a solar panel element and an electric/hybrid car element that are visually inspired by the High Breed Network logo.
3. THE Page Loader SHALL display the "HIGH BREED NETWORK" text during the animation sequence.
4. WHEN the animation sequence completes, THE Page Loader SHALL fade out and reveal the underlying page content.
5. THE Page Loader animation SHALL complete within 3 seconds under normal network conditions.
6. WHERE a Visitor has indicated a preference for reduced motion (via the `prefers-reduced-motion` media query), THE Page Loader SHALL skip the animation and reveal content immediately.

---

### Requirement 4: Responsive Navigation Header

**User Story:** As a Visitor, I want a clear, accessible navigation header on every page, so that I can move between sections without confusion on any device.

#### Acceptance Criteria

1. THE Website SHALL display a persistent navigation header on all pages containing the company logo, primary navigation links, and a CTA button.
2. THE Navigation Header SHALL include the following top-level links: Home, About, Services, Contact.
3. WHEN a Visitor hovers over or focuses the "Services" navigation link on a desktop Viewport, THE Navigation Header SHALL display a dropdown menu listing all seven Service Categories.
4. THE Navigation Header dropdown SHALL list: Vehicle Diagnostics, ECU Programming, Key & Immobilizer, Hybrid & EV Services, Anti-Theft & Tracking, Performance Tuning, Dash Cam Installation.
5. WHEN the Viewport width is less than 768 px, THE Navigation Header SHALL replace the desktop menu with a hamburger icon button.
6. WHEN a Visitor taps the hamburger icon, THE Navigation Header SHALL expand a mobile drawer containing all navigation links and the Services sub-items.
7. WHEN a Visitor taps a navigation link inside the mobile drawer, THE Navigation Header SHALL close the drawer.
8. THE Navigation Header CTA button SHALL link to the Contact page and use a Brand Palette accent colour.

---

### Requirement 5: Home Page

**User Story:** As a Visitor, I want a compelling home page that communicates what High Breed Network does, so that I can quickly decide whether to explore further or make contact.

#### Acceptance Criteria

1. THE Home Page SHALL display a Hero Section containing the primary tagline "ONE NETWORK. ALL SOLUTIONS.", a sub-tagline, and at least two CTA buttons (e.g., "Get a Diagnosis" and "Learn More").
2. THE Hero Section SHALL include a visually prominent background or graphic element that reflects the automotive / tech theme.
3. THE Home Page SHALL display a Key Highlights strip containing at least the following selling points: Expert Technicians, Latest Equipment, Accurate Diagnosis, Data Security.
4. THE Home Page SHALL display a Featured Services section showing at least six of the fifteen core services with icons and brief descriptions.
5. THE Home Page SHALL display a Vehicle Types section that lists the supported fuel types: Petrol, Diesel, Hybrid, PHEV, EV.
6. THE Home Page SHALL display a secondary CTA section with the tagline "ALL BRANDS. ALL SYSTEMS. TOTAL SOLUTIONS." and a button linking to the Contact page.
7. THE Home Page SHALL display a Footer containing the company phone number (08060617790), email (highbreed@gmail.com), quick navigation links, and social/contact icons.

---

### Requirement 6: About Page

**User Story:** As a Visitor, I want to learn about High Breed Network's background and values, so that I can build trust before booking a service.

#### Acceptance Criteria

1. THE About Page SHALL present a company story section describing High Breed Network's mission and background.
2. THE About Page SHALL list the company's core values, including but not limited to: dealer-level diagnostics, OEM software & database, fast turnaround, affordable pricing, customer satisfaction, and warranty on select services.
3. THE About Page SHALL include a "Why Choose Us" section presenting the key selling points (Expert Technicians, Latest Equipment, Accurate Diagnosis, Data Security, Affordable Pricing, Warranty on Select Services) each with a supporting icon or graphic.
4. THE About Page SHALL include a CTA section directing Visitors to the Contact page.
5. THE About Page SHALL display the service model statement: "WE COME TO YOU OR YOU VISIT US" and "SERVING INDIVIDUALS, FLEETS & DEALERSHIPS".

---

### Requirement 7: Services Pages

**User Story:** As a Visitor, I want dedicated pages for each service category, so that I can find detailed information about the specific service I need.

#### Acceptance Criteria

1. THE Website SHALL provide a distinct URL route for each of the seven Service Categories (e.g., `/services/vehicle-diagnostics`, `/services/ecu-programming`, `/services/key-immobilizer`, `/services/hybrid-ev`, `/services/anti-theft-tracking`, `/services/performance-tuning`, `/services/dash-cam`).
2. THE Website SHALL provide a Services overview page at `/services` that lists all seven Service Categories with links to their respective detail pages.
3. WHEN a Visitor navigates to a Service Category page, THE Services Page SHALL display a page heading, a description of the service, a list of specific capabilities within that category, and the vehicle brands/types supported.
4. THE Anti-Theft & Tracking Service Page SHALL explicitly list: Remote Cut-Off, SMS/App Alerts, and Real-Time Location Tracking as capabilities.
5. THE Hybrid & EV Services Page SHALL explicitly list: Hybrid System Diagnostics & Repair and Battery Health Check & Regeneration as capabilities.
6. EACH Service Category Page SHALL include a CTA prompting the Visitor to contact High Breed Network to book or enquire.
7. THE Services Pages SHALL list supported vehicle brands including: Toyota, Lexus, Mercedes-Benz, and a note covering broader European, Japanese, and other brands.

---

### Requirement 8: Contact Page

**User Story:** As a Visitor, I want multiple easy ways to get in touch with High Breed Network, so that I can choose the contact method that suits me best.

#### Acceptance Criteria

1. THE Contact Page SHALL display the company phone number (08060617790) as a tappable `tel:` link.
2. THE Contact Page SHALL display a WhatsApp link that opens a WhatsApp chat with the number 08060617790.
3. THE Contact Page SHALL display the company email (highbreed@gmail.com) as a tappable `mailto:` link.
4. THE Contact Page SHALL include a contact form with the following fields: Name (required), Phone Number (required), Email Address (optional), Service of Interest (dropdown listing all seven Service Categories), and Message (required).
5. WHEN a Visitor submits the contact form with all required fields populated, THE Contact Form SHALL provide visible confirmation to the Visitor that the submission was received.
6. WHEN a Visitor submits the contact form with one or more required fields empty, THE Contact Form SHALL display an inline validation error identifying each missing required field.
7. THE Contact Page SHALL display the service model statement: "WE COME TO YOU OR YOU VISIT US".
8. THE Contact Page SHALL include the "SERVING INDIVIDUALS, FLEETS & DEALERSHIPS" statement.

---

### Requirement 9: Mobile Responsiveness

**User Story:** As a Visitor using a smartphone, I want every page to be fully usable on a small screen, so that I can browse and contact the company without friction.

#### Acceptance Criteria

1. THE Website SHALL render without horizontal scroll on Viewport widths as narrow as 320 px.
2. THE Website SHALL display all text at a minimum font size of 14 px on mobile Viewports.
3. THE Website SHALL render all CTA buttons and navigation links with a tap target size of at least 44 × 44 px on mobile Viewports.
4. THE Website SHALL use fluid or responsive image elements so that images scale correctly on all Viewport widths.
5. WHEN a Visitor views any page on a Viewport narrower than 768 px, THE Website SHALL stack multi-column layouts into a single-column layout.

---

### Requirement 10: Performance and Accessibility

**User Story:** As a Visitor, I want the site to load fast and be accessible, so that I have a smooth experience regardless of my device or ability.

#### Acceptance Criteria

1. THE Website SHALL use Next.js `Image` component for all raster images to enable automatic optimisation and lazy loading.
2. THE Website SHALL provide descriptive `alt` text for every image element.
3. THE Website SHALL ensure all interactive elements (links, buttons, form inputs) are keyboard-navigable and receive a visible focus indicator.
4. THE Website SHALL use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h6>`) to structure each page.
5. THE Website SHALL include a `<title>` and `<meta name="description">` tag for each page using Next.js metadata API.
6. WHEN a Visitor accesses the Website on a slow connection, THE Website SHALL display meaningful content before all JavaScript has fully executed (server-side rendering or static generation via Next.js).

---

### Requirement 11: Footer

**User Story:** As a Visitor at the bottom of any page, I want quick access to contact details and navigation, so that I can take action without scrolling back to the top.

#### Acceptance Criteria

1. THE Footer SHALL appear on all pages below the main content area.
2. THE Footer SHALL display the High Breed Network logo or wordmark.
3. THE Footer SHALL display the company phone number (08060617790), email (highbreed@gmail.com), and WhatsApp contact link.
4. THE Footer SHALL include quick navigation links to all top-level pages: Home, About, Services, Contact.
5. THE Footer SHALL display the tagline "ONE NETWORK. ALL SOLUTIONS." or "ALL BRANDS. ALL SYSTEMS. TOTAL SOLUTIONS."
6. THE Footer SHALL display a copyright notice for High Breed Network.
