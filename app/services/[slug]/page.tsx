import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_CATEGORIES, PAGE_METADATA } from "@/lib/services-data";
import CtaButton from "@/components/shared/CtaButton";

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const meta = PAGE_METADATA[params.slug];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICE_CATEGORIES.find((cat) => cat.slug === params.slug);
  if (!service) notFound();

  // Split description into paragraphs, supporting both \n\n and \n separators
  const paragraphs = service.description
    .split(/\n\n|\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-[#1456a8] to-[#1a6fd4] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-blue-100 sm:text-xl">
            {service.headline}
          </p>
        </div>
      </section>

      {/* Description section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {paragraphs.map((para, index) => (
            <p
              key={index}
              className="mt-6 text-base leading-relaxed text-gray-700 first:mt-0 sm:text-lg"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Capabilities section */}
      <section className="bg-brand-off-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f1f3d] sm:text-3xl">
            What We Do
          </h2>
          <ul className="mt-8 space-y-3">
            {service.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-3">
                {/* Checkmark icon */}
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-brand-blue"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-base text-gray-700">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Supported brands section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f1f3d] sm:text-3xl">
            Supported Brands &amp; Vehicles
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {service.supportedBrands.map((brand) => (
              <li
                key={brand}
                className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-brand-blue-dark"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-brand-off-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f1f3d] sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Book this service today or get in touch to discuss your
            requirements.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">{service.ctaText}</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
