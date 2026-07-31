import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/services-data";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaButton from "@/components/shared/CtaButton";

export const metadata: Metadata = {
  title: PAGE_METADATA.about.title,
  description: PAGE_METADATA.about.description,
};

// ── Core Values ──────────────────────────────────────────────────────────────

const CORE_VALUES = [
  {
    title: "Dealer-Level Diagnostics",
    description:
      "We use OEM-grade scan tools to communicate with every control module in your vehicle — the same depth of access a franchised dealer uses.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M6.4 6.4l1.4 1.4" />
        <path d="M17.6 6.4l-1.4 1.4" />
        <path d="M6 12H4" />
        <path d="M20 12h-2" />
      </svg>
    ),
  },
  {
    title: "OEM Software & Database",
    description:
      "Our proprietary software databases are kept up to date with manufacturer data so every programming and coding job is performed with the correct calibration files.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 4v3M12 4v3M15 4v3" />
        <path d="M9 17v3M12 17v3M15 17v3" />
        <path d="M4 9h3M4 12h3M4 15h3" />
        <path d="M17 9h3M17 12h3M17 15h3" />
      </svg>
    ),
  },
  {
    title: "Fast Turnaround",
    description:
      "Most diagnostic and programming jobs are completed the same day. We respect your time — no unnecessary delays, no waiting for parts we already have.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l3 3" />
      </svg>
    ),
  },
  {
    title: "Affordable Pricing",
    description:
      "We believe dealer-quality work should not come with a dealer-sized bill. Our pricing is transparent, competitive, and explained upfront — no surprise invoices.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v2" />
        <path d="M12 16v2" />
        <path d="M8.5 9.5A3.5 3.5 0 0 1 12 8a3 3 0 0 1 3 3c0 2-3 2.5-3 4" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description:
      "We do not close a job until you are satisfied. Clear communication, honest reporting, and a follow-up check are standard parts of every service we carry out.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Warranty on Select Services",
    description:
      "Select services — including ECU programming and key coding — carry a service warranty, giving you confidence that the work will perform as expected.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

// ── Why Choose Us ─────────────────────────────────────────────────────────────

const WHY_CHOOSE_US = [
  {
    title: "Expert Technicians",
    description:
      "Our team combines years of hands-on automotive experience with continuous training on the latest vehicle platforms — from classic petrol engines to full EVs.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Latest Equipment",
    description:
      "We invest in the newest OEM-level diagnostic hardware and keep our software licences current — so no job is too new or too complex for our kit.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Accurate Diagnosis",
    description:
      "We go beyond reading fault codes. Our technicians analyse live data streams and module communication to find the root cause — not just the symptom.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Data Security",
    description:
      "Your vehicle's ECU data and personal information are handled with strict confidentiality. We do not share or retain customer data beyond what is needed to complete your service.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Affordable Pricing",
    description:
      "Quality diagnostics and ECU programming at a fair price. No hidden charges — you receive a written quote before any work begins.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Warranty on Select Services",
    description:
      "We back our work. Key coding, ECU programming, and other select services include a warranty period so you have peace of mind long after we leave.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1456a8] to-[#1a6fd4] py-20 text-white sm:py-28">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-green opacity-10 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest">
            High Breed Network
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            About High Breed Network
          </h1>
          <p className="mt-6 text-lg text-blue-100 sm:text-xl">
            One network. All automotive technology solutions — for individuals,
            fleets, and dealerships.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Story"
            subtitle="Where we came from and why we do what we do"
            className="mb-10"
          />

          <div className="space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>
              High Breed Network was founded on a single conviction: every
              vehicle owner — whether an individual driver, a fleet manager, or
              a dealership service team — deserves access to dealer-quality
              diagnostics and programming without the dealer price tag or the
              dealer waiting time. We set out to close that gap by combining
              OEM-grade tools, up-to-date manufacturer software databases, and
              technicians who stay current with the rapidly evolving world of
              automotive electronics.
            </p>
            <p>
              We serve the full spectrum of customers. Private owners bring
              their cars to us when a warning light appears or a key stops
              working. Fleet operators rely on us for fast, accurate fault
              diagnosis that keeps their vehicles earning. Dealerships partner
              with us for overflow programming and specialist work their own
              equipment cannot handle. Whatever your situation, we treat every
              job — large or small — with the same rigour.
            </p>
            <p>
              We cover all brands and all fuel types: petrol, diesel, hybrid,
              PHEV, and full electric. Our mobile unit comes to you at home, at
              work, or roadside — and we also welcome walk-in and booked
              appointments at our workshop. Whether your vehicle carries a
              Japanese badge, a European marque, or a Korean nameplate, High
              Breed Network has the tools, the data, and the experience to
              diagnose and fix it correctly the first time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-brand-off-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every job we take on"
            className="mb-12"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  {value.icon}
                </span>
                <h3 className="text-lg font-bold text-[#0f1f3d]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Six reasons why customers trust High Breed Network"
            className="mb-12"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white">
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold text-[#0f1f3d]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Model Banner ── */}
      <section className="bg-[#0f1f3d] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
            <div className="flex flex-col items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/20"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a6fd4"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="5" cy="19" r="2" />
                  <circle cx="19" cy="19" r="2" />
                  <path d="M1 19h2M17 19H7" />
                  <path d="M17 19l1-4H3l2-5h12l1 3" />
                  <path d="M10 5h4l2 5" />
                </svg>
              </span>
              <p className="text-xl font-extrabold uppercase tracking-widest text-white sm:text-2xl">
                WE COME TO YOU
                <br />
                OR YOU VISIT US
              </p>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-16 w-px bg-white/20 sm:block"
            />

            <div className="flex flex-col items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/20"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3a9a3a"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <p className="text-xl font-extrabold uppercase tracking-widest text-white sm:text-2xl">
                SERVING INDIVIDUALS,
                <br />
                FLEETS &amp; DEALERSHIPS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-off-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f1f3d] sm:text-3xl">
            Ready to Book a Service?
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Get in touch today — by phone, WhatsApp, or our online form. We are
            ready to come to you or welcome you to our workshop.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaButton href="/contact" variant="blue">
              Contact Us
            </CtaButton>
            <a
              href="tel:08060617790"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-brand-blue px-6 py-3 text-base font-semibold text-brand-blue transition-colors duration-200 hover:bg-brand-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Call 08060617790
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
