"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

export default function ServiceTabs() {
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-200 bg-white">
      <nav
        aria-label="Service categories"
        className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8"
      >
        <ul className="flex min-w-max gap-1 py-2">
          <li>
            <Link
              href="/services"
              className={[
                "inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
                pathname === "/services"
                  ? "bg-brand-blue text-white"
                  : "text-gray-600 hover:bg-brand-off-white hover:text-brand-blue",
              ].join(" ")}
              aria-current={pathname === "/services" ? "page" : undefined}
            >
              All
            </Link>
          </li>
          {SERVICE_CATEGORIES.map((cat) => {
            const href = `/services/${cat.slug}`;
            const active = pathname === href;
            return (
              <li key={cat.slug}>
                <Link
                  href={href}
                  className={[
                    "inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
                    active
                      ? "bg-brand-blue text-white"
                      : "text-gray-600 hover:bg-brand-off-white hover:text-brand-blue",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {cat.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
