import type { Metadata } from "next";
import { PAGE_METADATA, SERVICE_CATEGORIES } from "@/lib/services-data";
import ServiceCard from "@/components/shared/ServiceCard";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaButton from "@/components/shared/CtaButton";

export const metadata: Metadata = {
  title: PAGE_METADATA.services.title,
  description: PAGE_METADATA.services.description,
};

// One inline SVG icon per service slug — mirrors FeaturedServices.tsx
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "vehicle-diagnostics": (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
      <path d="m4.93 4.93 1.41 1.41" />
    </svg>
  ),
  "ecu-programming": (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  ),
  "key-immobilizer": (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="15" r="5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  ),
  "hybrid-ev": (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  "anti-theft-tracking": (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "performance-tuning": (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  "dash-cam": (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 10 4.553-2.069A1 1 0 0 1 21 8.82v6.36a1 1 0 0 1-1.447.89L15 14" />
      <rect x="2" y="6" width="13" height="12" rx="2" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-br from-[#1456a8] to-[#1a6fd4] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-blue-100 sm:text-xl">
            Professional automotive diagnostics and technology services for
            every vehicle brand and fuel type.
          </p>
        </div>
      </section>

      {/* Services grid — all 7 categories */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Everything Your Vehicle Needs"
            subtitle="Seven specialist service categories. One trusted network."
            className="mb-12"
          />

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <ServiceCard
                  slug={cat.slug}
                  title={cat.title}
                  description={cat.description.split("\n")[0]}
                  icon={SERVICE_ICONS[cat.slug]}
                  href={`/services/${cat.slug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f1f3d] sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Our team is happy to help. Just get in touch and we&apos;ll point
            you in the right direction.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Get in Touch</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
