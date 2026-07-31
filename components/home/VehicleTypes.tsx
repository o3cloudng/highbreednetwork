const FUEL_TYPES = [
  {
    label: "Petrol",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Fuel pump icon */}
        <path d="M3 22V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
        <path d="M3 22h12" />
        <path d="M13 7h2a2 2 0 0 1 2 2v6a1 1 0 0 0 2 0V9l-3-3" />
        <path d="M7 10h4" />
        <path d="M7 14h4" />
      </svg>
    ),
  },
  {
    label: "Diesel",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Droplet / diesel icon */}
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    label: "Hybrid",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Lightning bolt for hybrid/electric */}
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: "PHEV",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Plug icon for plug-in hybrid */}
        <path d="M12 22V12" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <rect x="8" y="2" width="8" height="8" rx="1" />
        <path d="M9 2v3M15 2v3" />
      </svg>
    ),
  },
  {
    label: "EV",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Battery icon for full EV */}
        <rect x="2" y="7" width="16" height="10" rx="2" />
        <path d="M22 11v2" />
        <path d="M7 11h6" />
        <path d="M10 8v8" />
      </svg>
    ),
  },
];

export default function VehicleTypes() {
  return (
    <section
      className="bg-brand-off-white py-14 sm:py-16"
      aria-labelledby="vehicle-types-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="vehicle-types-heading"
          className="mb-8 text-center text-2xl font-bold text-[#0f1f3d] sm:text-3xl"
        >
          All Fuel Types Supported
        </h2>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {FUEL_TYPES.map((type) => (
            <li
              key={type.label}
              className="flex min-w-[100px] flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-4 text-center shadow-sm"
            >
              <span className="text-brand-blue">{type.icon}</span>
              <span className="text-sm font-semibold text-[#0f1f3d]">
                {type.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
