const highlights = [
  {
    title: "Expert Technicians",
    description:
      "Our certified engineers bring dealer-level expertise to every job — mobile or in-shop.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Latest Equipment",
    description:
      "We use OEM-grade scan tools and the most up-to-date software databases available.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h.01M10 8h4" />
        <path d="M7 11h.01M10 11h4" />
      </svg>
    ),
  },
  {
    title: "Accurate Diagnosis",
    description:
      "No guesswork — every fault is identified with live data and documented in a clear report.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
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
        <path d="M2 12h2" />
      </svg>
    ),
  },
  {
    title: "Data Security",
    description:
      "Your vehicle's data is handled with strict confidentiality — never stored or shared.",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function KeyHighlights() {
  return (
    <section
      className="bg-brand-off-white py-14 sm:py-16"
      aria-label="Key highlights"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="text-brand-blue">{item.icon}</div>
              <h3 className="text-base font-bold text-[#0f1f3d] sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
