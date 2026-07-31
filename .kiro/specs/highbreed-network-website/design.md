# Design Document — High Breed Network Website

## Overview

High Breed Network is an automotive diagnostics and ECU programming business. This design document describes the technical architecture for a Next.js marketing website that presents the company's seven service categories, builds trust with prospective customers, and converts visitors into enquiries via phone, WhatsApp, and a contact form.

### Goals

- Deliver a fast, accessible, mobile-first static/SSR marketing site
- Enforce the High Breed Network brand palette (Blue `#1a6fd4`, Green `#3a9a3a`, white `#ffffff`)
- Provide a memorable branded page-load experience via an animated SVG loader
- Support zero-friction deployment to Vercel
- Keep the architecture simple — no database, no auth, no CMS needed at v1

### Non-Goals

- Real-time features, user accounts, or content management
- Server-side e-commerce or payment flows
- Native mobile apps

---

## Architecture

The site is a pure front-end Next.js 14+ application using the App Router. Because there is no persistent data store or authenticated user session, every page can be statically generated (SSG) or server-rendered on demand (SSR), both handled transparently by Next.js and hosted on Vercel's global edge network.

```mermaid
flowchart TD
    Browser["Visitor's Browser"]
    Vercel["Vercel Edge Network (SSG/ISR)"]
    NextApp["Next.js App Router\n(TypeScript + Tailwind CSS)"]
    Resend["Email Delivery API\n(Resend or Nodemailer/SMTP)"]

    Browser -->|HTTPS request| Vercel
    Vercel -->|Serves pre-built HTML + JS| Browser
    Browser -->|Contact form POST\n(Server Action)| NextApp
    NextApp -->|Send notification email| Resend
```

### Key Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Routing | App Router (`app/`) | Next.js 14 default; enables Server Components and Server Actions |
| Styling | Tailwind CSS with custom theme tokens | Single source of truth for brand palette; utility-first avoids CSS bloat |
| Animations | CSS keyframes + SVG SMIL / Framer Motion (optional) | Keeps the loader lightweight; CSS respects `prefers-reduced-motion` natively |
| Contact form | React Hook Form + Zod + Server Action | No third-party form service; validation both client and server side |
| Email delivery | Nodemailer with SMTP (configurable via env vars) | Simple, free, works with any SMTP provider (Gmail, SendGrid, etc.) |
| Images | Next.js `<Image>` | Automatic WebP conversion, lazy loading, LCP optimisation |
| Deployment | Vercel (zero-config) | First-class Next.js support; `next.config.ts` is the only config needed |

---

## Components and Interfaces

### Directory Structure

```
highbreed-network/
├── app/
│   ├── layout.tsx                  # Root layout: fonts, global metadata, PageLoader, Nav, Footer
│   ├── page.tsx                    # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx                # Services overview
│   │   ├── vehicle-diagnostics/page.tsx
│   │   ├── ecu-programming/page.tsx
│   │   ├── key-immobilizer/page.tsx
│   │   ├── hybrid-ev/page.tsx
│   │   ├── anti-theft-tracking/page.tsx
│   │   ├── performance-tuning/page.tsx
│   │   └── dash-cam/page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileDrawer.tsx
│   │   ├── Footer.tsx
│   │   └── PageLoader.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── KeyHighlights.tsx
│   │   ├── FeaturedServices.tsx
│   │   ├── VehicleTypes.tsx
│   │   └── SecondaryCta.tsx
│   ├── shared/
│   │   ├── CtaButton.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ServiceCard.tsx
│   └── contact/
│       └── ContactForm.tsx
├── lib/
│   ├── services-data.ts            # Static data for all 7 service categories
│   ├── send-email.ts               # Server-side email helper (Nodemailer)
│   └── validations.ts              # Zod schemas
├── public/
│   ├── logo.svg
│   └── images/
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

### Component Interface Definitions

#### `PageLoader`

```typescript
// Rendered once in app/layout.tsx; manages its own visibility state
interface PageLoaderProps {
  // no external props — reads prefers-reduced-motion internally
}
// Internal state: animating → fading → hidden
// Uses useEffect to detect window.matchMedia('(prefers-reduced-motion: reduce)')
```

#### `Navbar`

```typescript
interface NavbarProps {
  // no external props — uses Next.js usePathname() for active-link highlighting
}
// Renders desktop nav + dropdown and mobile hamburger trigger
// Controls MobileDrawer open/close state
```

#### `ServiceCard`

```typescript
interface ServiceCardProps {
  slug: string;          // e.g. "vehicle-diagnostics"
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;          // e.g. "/services/vehicle-diagnostics"
}
```

#### `ContactForm`

```typescript
interface ContactFormProps {
  // no external props — uses useActionState (React 19) / useFormState
}
// Fields: name, phone, email (optional), serviceInterest, message
// Validation: Zod schema on both client and server
// Submission: Server Action → Nodemailer SMTP
```

#### Service Page Data Shape

```typescript
interface ServiceCategory {
  slug: string;
  title: string;
  headline: string;           // short tagline shown in hero
  description: string;        // 2–3 paragraph description
  capabilities: string[];     // bullet list of specific capabilities
  supportedBrands: string[];  // list of vehicle brands/types
  ctaText: string;            // e.g. "Book a Diagnostic"
}
```

---

## Data Models

### Static Service Data (`lib/services-data.ts`)

All service content is stored as a TypeScript constant array — no database required. This makes pages statically generatable and content changes a simple code PR.

```typescript
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "vehicle-diagnostics",
    title: "Vehicle Diagnostics",
    headline: "Dealer-level diagnostics for every brand",
    description: "...",
    capabilities: [
      "Full system scan (engine, ABS, airbag, transmission, body)",
      "Fault code reading & clearing",
      "Live data streaming",
      "Pre-purchase inspection reports",
    ],
    supportedBrands: ["Toyota", "Lexus", "Mercedes-Benz", "Honda", "Ford",
                       "All European, Japanese & Korean brands"],
    ctaText: "Book a Diagnostic",
  },
  {
    slug: "ecu-programming",
    title: "ECU Programming",
    // ...
  },
  {
    slug: "key-immobilizer",
    title: "Key & Immobilizer",
    // ...
  },
  {
    slug: "hybrid-ev",
    title: "Hybrid & EV Services",
    capabilities: [
      "Hybrid System Diagnostics & Repair",
      "Battery Health Check & Regeneration",
      // ...
    ],
    // ...
  },
  {
    slug: "anti-theft-tracking",
    title: "Anti-Theft & Tracking",
    capabilities: [
      "Remote Cut-Off",
      "SMS/App Alerts",
      "Real-Time Location Tracking",
      // ...
    ],
    // ...
  },
  {
    slug: "performance-tuning",
    title: "Performance Tuning",
    // ...
  },
  {
    slug: "dash-cam",
    title: "Dash Cam Installation",
    // ...
  },
];
```

### Contact Form Schema (`lib/validations.ts`)

```typescript
import { z } from "zod";

export const contactFormSchema = z.object({
  name:            z.string().min(2, "Name is required"),
  phone:           z.string().min(7, "Phone number is required"),
  email:           z.string().email("Invalid email").optional().or(z.literal("")),
  serviceInterest: z.enum([
    "vehicle-diagnostics",
    "ecu-programming",
    "key-immobilizer",
    "hybrid-ev",
    "anti-theft-tracking",
    "performance-tuning",
    "dash-cam",
    "",
  ]),
  message:         z.string().min(10, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

### Tailwind Brand Tokens (`tailwind.config.ts`)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:         "#1a6fd4",
          "blue-light":  "#3d8fe8",
          "blue-dark":   "#1456a8",
          green:         "#3a9a3a",
          "green-light": "#4dbf4d",
          "green-dark":  "#2d7a2d",
          white:         "#ffffff",
          "off-white":   "#f5f7fa",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

### Page Metadata Shape

Each page exports a `metadata` object conforming to Next.js `Metadata` type:

```typescript
// Example: app/services/vehicle-diagnostics/page.tsx
export const metadata: Metadata = {
  title: "Vehicle Diagnostics | High Breed Network",
  description: "Dealer-level diagnostics for all vehicle brands — petrol, diesel, hybrid, PHEV, and EV.",
};
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navigation header is present on every page

*For any* valid route in the site (home, about, services, services/[slug], contact), the rendered HTML should contain the navigation header element with links to Home, About, Services, and Contact.

**Validates: Requirements 4.1, 4.2**

---

### Property 2: Every service category page renders required content

*For any* service category slug in the defined list (`vehicle-diagnostics`, `ecu-programming`, `key-immobilizer`, `hybrid-ev`, `anti-theft-tracking`, `performance-tuning`, `dash-cam`), the rendered page should contain a heading, a description, a non-empty list of capabilities, and vehicle brand information.

**Validates: Requirements 7.1, 7.3**

---

### Property 3: Every service category page contains a CTA

*For any* service category slug in the defined list, the rendered page should contain at least one element that is a call-to-action linking to the contact page (`/contact`) or triggering a contact method.

**Validates: Requirements 7.6**

---

### Property 4: Contact form validates all combinations of missing required fields

*For any* submission of the contact form where one or more required fields (name, phone, message) are absent or empty, the form should display an inline validation error message identifying each missing field, and should not submit the form to the server action.

**Validates: Requirements 8.6**

---

### Property 5: Every page image has descriptive alt text

*For any* `<img>` or Next.js `<Image>` element rendered on any page in the site, the element should have a non-empty `alt` attribute.

**Validates: Requirements 10.2**

---

### Property 6: Every page has title and meta description

*For any* page route in the site, the rendered `<head>` should contain a non-empty `<title>` element and a `<meta name="description">` tag with non-empty content.

**Validates: Requirements 10.5**

---

## Error Handling

### Contact Form Errors

| Scenario | Handling |
|---|---|
| Required field empty | Zod validation fires client-side before Server Action is called; inline error message per field |
| Server Action throws | `useActionState` catches the error; generic "Something went wrong, please try again" shown |
| Email delivery fails | Server Action returns an error state; visitor shown retry message; no silent failure |
| Network offline | Form is progressively enhanced — falls back gracefully; browser shows connection error |

### 404 / Unknown Routes

Next.js App Router automatically handles unknown routes. A custom `app/not-found.tsx` file will provide an on-brand 404 page with a link back to the home page.

### Image Loading Failures

All `<Image>` components should include an `onError` handler or a placeholder image to avoid broken-image icons in production.

### Animation Failures

The `PageLoader` component wraps its animation logic in a try/catch within `useEffect`. If the animation cannot start (e.g., unsupported browser), the loader immediately hides itself to avoid blocking page content.

---

## Testing Strategy

### Unit Tests (Vitest + React Testing Library)

Unit tests focus on specific examples, edge cases, and component interactions. They should not duplicate what property-based tests cover.

Recommended unit test scenarios:
- `PageLoader`: renders full-screen overlay on mount; hides after animation timer; skips animation when `prefers-reduced-motion: reduce` is mocked
- `Navbar`: renders all four top-level links; shows dropdown on hover/focus; renders hamburger on narrow viewport; closes drawer on link click
- `ContactForm`: shows success message after valid submission; shows field-level errors after invalid submission
- `ServiceCard`: renders title, description, and correct href
- `Footer`: renders phone, email, WhatsApp link, and navigation links
- Specific content: Anti-Theft page lists Remote Cut-Off, SMS/App Alerts, Real-Time Location Tracking; Hybrid & EV page lists Hybrid System Diagnostics & Repair and Battery Health Check & Regeneration

### Property-Based Tests (fast-check)

Property-based testing is appropriate for this feature because several behaviors must hold universally across a set of inputs (all page routes, all service slugs, all combinations of missing form fields, all image elements). [fast-check](https://github.com/dubzzz/fast-check) is the recommended library for TypeScript/JavaScript.

Each property test should be configured to run a minimum of **100 iterations**.

**Test tag format:** `Feature: highbreed-network-website, Property {N}: {property_text}`

#### Property 1 test — Navigation on every page

```typescript
// Feature: highbreed-network-website, Property 1: Navigation header is present on every page
it.prop([fc.constantFrom("/", "/about", "/services", "/contact",
         "/services/vehicle-diagnostics", "/services/ecu-programming",
         "/services/key-immobilizer", "/services/hybrid-ev",
         "/services/anti-theft-tracking", "/services/performance-tuning",
         "/services/dash-cam")])(
  "every route renders a navigation header with required links",
  async (route) => {
    const { getByRole } = renderPageForRoute(route);
    expect(getByRole("navigation")).toBeTruthy();
    expect(getByRole("link", { name: /home/i })).toBeTruthy();
    expect(getByRole("link", { name: /about/i })).toBeTruthy();
    expect(getByRole("link", { name: /services/i })).toBeTruthy();
    expect(getByRole("link", { name: /contact/i })).toBeTruthy();
  }
);
```

#### Property 2 test — Service pages render required content

```typescript
// Feature: highbreed-network-website, Property 2: Every service category page renders required content
it.prop([fc.constantFrom(
  "vehicle-diagnostics", "ecu-programming", "key-immobilizer",
  "hybrid-ev", "anti-theft-tracking", "performance-tuning", "dash-cam"
)])(
  "every service slug page renders heading, description, capabilities, and brand info",
  (slug) => {
    const data = SERVICE_CATEGORIES.find(s => s.slug === slug)!;
    expect(data.title).toBeTruthy();
    expect(data.description.length).toBeGreaterThan(0);
    expect(data.capabilities.length).toBeGreaterThan(0);
    expect(data.supportedBrands.length).toBeGreaterThan(0);
  }
);
```

#### Property 3 test — Service pages all have a CTA

```typescript
// Feature: highbreed-network-website, Property 3: Every service category page contains a CTA
it.prop([fc.constantFrom(
  "vehicle-diagnostics", "ecu-programming", "key-immobilizer",
  "hybrid-ev", "anti-theft-tracking", "performance-tuning", "dash-cam"
)])(
  "every service slug page renders a CTA linking to contact",
  (slug) => {
    const { getByRole } = renderServicePage(slug);
    const ctaLink = getByRole("link", { name: /contact|book|enquire/i });
    expect(ctaLink).toBeTruthy();
  }
);
```

#### Property 4 test — Contact form validation

```typescript
// Feature: highbreed-network-website, Property 4: Contact form validates all combinations of missing required fields
it.prop([
  fc.record({
    name:    fc.oneof(fc.constant(""), fc.string({ minLength: 1 })),
    phone:   fc.oneof(fc.constant(""), fc.string({ minLength: 1 })),
    email:   fc.option(fc.emailAddress()),
    message: fc.oneof(fc.constant(""), fc.string({ minLength: 1 })),
  })
])(
  "submitting with missing required fields shows field-level errors",
  async (formValues) => {
    const result = contactFormSchema.safeParse(formValues);
    const hasMissingName    = !formValues.name || formValues.name.length < 2;
    const hasMissingPhone   = !formValues.phone || formValues.phone.length < 7;
    const hasMissingMessage = !formValues.message || formValues.message.length < 10;

    if (hasMissingName || hasMissingPhone || hasMissingMessage) {
      expect(result.success).toBe(false);
      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;
        if (hasMissingName)    expect(fieldErrors.name).toBeTruthy();
        if (hasMissingPhone)   expect(fieldErrors.phone).toBeTruthy();
        if (hasMissingMessage) expect(fieldErrors.message).toBeTruthy();
      }
    }
  }
);
```

#### Property 5 test — Images have alt text

```typescript
// Feature: highbreed-network-website, Property 5: Every page image has descriptive alt text
it.prop([fc.constantFrom(
  "vehicle-diagnostics", "ecu-programming", "key-immobilizer",
  "hybrid-ev", "anti-theft-tracking", "performance-tuning", "dash-cam"
)])(
  "all img elements on service pages have non-empty alt text",
  (slug) => {
    const { container } = renderServicePage(slug);
    const images = container.querySelectorAll("img");
    images.forEach(img => {
      expect(img.getAttribute("alt")).not.toBe("");
      expect(img.getAttribute("alt")).not.toBeNull();
    });
  }
);
```

#### Property 6 test — Every page has title and meta description

This property is validated at the data layer (each page's `metadata` export) since `<head>` is managed by Next.js:

```typescript
// Feature: highbreed-network-website, Property 6: Every page has title and meta description
it.prop([fc.constantFrom(
  "home", "about", "services", "contact",
  "vehicle-diagnostics", "ecu-programming", "key-immobilizer",
  "hybrid-ev", "anti-theft-tracking", "performance-tuning", "dash-cam"
)])(
  "every page exports non-empty title and description metadata",
  (pageKey) => {
    const meta = PAGE_METADATA[pageKey];
    expect(meta.title).toBeTruthy();
    expect(meta.title.length).toBeGreaterThan(0);
    expect(meta.description).toBeTruthy();
    expect(meta.description.length).toBeGreaterThan(0);
  }
);
```

### Integration / Smoke Tests

- Build succeeds: `next build` completes without errors
- All 11 routes return HTTP 200 in production build
- Contact form Server Action: end-to-end test with a real SMTP test account (e.g., Ethereal/Mailtrap)
- Vercel deployment: preview deploy on pull request via Vercel GitHub integration

### Accessibility Checks

- Run `axe-core` or `jest-axe` assertions on rendered pages to catch obvious ARIA and contrast violations
- Manual keyboard navigation test on Navbar, mobile drawer, and ContactForm

---

## Animated Page Loader — Design Detail

The `PageLoader` component is a Client Component (`"use client"`) rendered at the top of `app/layout.tsx`. It sits in a fixed `z-50` full-screen overlay.

### SVG Animation Sequence (≤ 3 seconds total)

```
0.0s – 0.4s   Overlay fades in (opacity 0 → 1)
0.4s – 1.2s   Solar panel SVG draws in from top (stroke-dashoffset animation)
0.8s – 1.6s   Electric car SVG slides in from the right
1.2s – 1.8s   Sun rays rotate and pulse (green accent)
1.6s – 2.2s   "HIGH BREED NETWORK" text fades in character by character
2.2s – 3.0s   Overlay fades out (opacity 1 → 0, then display: none)
```

### `prefers-reduced-motion` Handling

```typescript
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// If true: skip all animation, set isVisible = false immediately
```

### Logo SVG Anatomy

The inline SVG used in the loader and navbar should contain:
- A stylised solar panel (blue `#1a6fd4` grid lines on a dark panel body)
- A side-profile electric/hybrid car silhouette (green `#3a9a3a`)
- A sun icon with rays in the top-right quadrant
- The wordmark "HIGH BREED NETWORK" below

---

## Deployment Configuration

### `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles image optimisation natively — no external loader needed
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable strict mode for React
  reactStrictMode: true,
};

export default nextConfig;
```

### Environment Variables

| Variable | Description | Required |
|---|---|---|
| `SMTP_HOST` | SMTP server hostname | Yes (for contact form) |
| `SMTP_PORT` | SMTP port (typically 587 or 465) | Yes |
| `SMTP_USER` | SMTP authentication username | Yes |
| `SMTP_PASS` | SMTP authentication password | Yes |
| `CONTACT_EMAIL_TO` | Recipient address for contact form submissions | Yes |

These are set as Vercel environment variables in the dashboard — never committed to the repository.

### `.gitignore` (required entries)

```
node_modules/
.next/
.env
.env.local
.env.*.local
out/
dist/
*.tsbuildinfo
```
