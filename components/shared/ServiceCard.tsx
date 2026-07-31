import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-shadow duration-200 hover:shadow-md">
      <div className="mb-4 text-brand-blue">{icon}</div>
      <h3 className="mb-2 text-lg font-bold text-[#0f1f3d]">{title}</h3>
      <p className="mb-4 flex-1 text-sm text-gray-600 line-clamp-3">
        {description}
      </p>
      <Link
        href={href}
        aria-label={`Learn more about ${title}`}
        className="inline-flex items-center gap-1 min-h-[44px] text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        Learn More
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
