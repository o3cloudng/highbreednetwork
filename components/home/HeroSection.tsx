import CtaButton from "@/components/shared/CtaButton";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-dark"
      aria-label="Hero"
    >
      {/* Decorative background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-10"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          {/* Circuit / automotive tech pattern */}
          <circle cx="300" cy="300" r="250" stroke="white" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="180" stroke="white" strokeWidth="1" />
          <circle cx="300" cy="300" r="110" stroke="white" strokeWidth="0.8" />
          <line x1="50" y1="300" x2="550" y2="300" stroke="white" strokeWidth="1" />
          <line x1="300" y1="50" x2="300" y2="550" stroke="white" strokeWidth="1" />
          <line x1="123" y1="123" x2="477" y2="477" stroke="white" strokeWidth="0.8" />
          <line x1="477" y1="123" x2="123" y2="477" stroke="white" strokeWidth="0.8" />
          {/* Car silhouette */}
          <g transform="translate(160, 260)">
            <rect x="20" y="30" width="240" height="55" rx="8" fill="white" fillOpacity="0.15" />
            <rect x="55" y="10" width="150" height="40" rx="6" fill="white" fillOpacity="0.15" />
            <circle cx="65" cy="88" r="22" fill="white" fillOpacity="0.2" />
            <circle cx="195" cy="88" r="22" fill="white" fillOpacity="0.2" />
            <circle cx="65" cy="88" r="12" fill="white" fillOpacity="0.3" />
            <circle cx="195" cy="88" r="12" fill="white" fillOpacity="0.3" />
          </g>
          {/* Solar panel grid */}
          <g transform="translate(420, 80)">
            <rect x="0" y="0" width="80" height="60" rx="4" fill="white" fillOpacity="0.12" />
            <line x1="20" y1="0" x2="20" y2="60" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="40" y1="0" x2="40" y2="60" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="60" y1="0" x2="60" y2="60" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="0" y1="20" x2="80" y2="20" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="0" y1="40" x2="80" y2="40" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            ONE NETWORK.{" "}
            <span className="text-brand-green-light">ALL SOLUTIONS.</span>
          </h1>
          <p className="mt-6 text-lg text-blue-100 sm:text-xl lg:text-2xl">
            Expert automotive diagnostics and ECU programming for all vehicle
            brands and fuel types.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <CtaButton href="/contact" variant="green">
              Get a Diagnosis
            </CtaButton>
            <CtaButton
              href="/services"
              variant="blue"
              className="border-2 border-white bg-transparent hover:bg-white hover:text-brand-blue"
            >
              View All Services
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
