"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICE_CATEGORIES } from "@/lib/services-data";
import CtaButton from "@/components/shared/CtaButton";
import MobileDrawer from "./MobileDrawer";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const activeLinkClasses =
    "text-brand-blue font-semibold";
  const inactiveLinkClasses =
    "text-gray-700 hover:text-brand-blue";
  const baseLinkClasses =
    "inline-flex items-center min-h-[44px] min-w-[44px] px-2 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue rounded";

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue rounded"
          aria-label="High Breed Network — Home"
        >
          <span className="text-brand-blue font-extrabold text-lg tracking-tight leading-none">
            HIGH BREED
          </span>
          <span className="text-brand-green font-extrabold text-lg tracking-tight leading-none">
            NETWORK
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((link) => {
            if (link.label === "Services") {
              return (
                <li key="Services" className="relative">
                  {/* Services trigger — keyboard focus-within also opens the dropdown */}
                  <div
                    className="group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onFocus={() => setServicesOpen(true)}
                    onBlur={(e) => {
                      // Only close if focus moves outside this subtree
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setServicesOpen(false);
                      }
                    }}
                  >
                    <button
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={[
                        baseLinkClasses,
                        isActive(link.href)
                          ? activeLinkClasses
                          : inactiveLinkClasses,
                      ].join(" ")}
                    >
                      Services
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Dropdown panel */}
                    {servicesOpen && (
                      <div
                        role="menu"
                        aria-label="Services submenu"
                        className="absolute left-0 top-full mt-1 w-64 rounded-md border border-gray-200 bg-white py-2 shadow-lg z-50"
                      >
                        {/* Overview link */}
                        <Link
                          href="/services"
                          role="menuitem"
                          className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-brand-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          All Services
                        </Link>
                        <div className="my-1 h-px bg-gray-100" role="separator" />
                        {SERVICE_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/services/${cat.slug}`}
                            role="menuitem"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    baseLinkClasses,
                    isActive(link.href)
                      ? activeLinkClasses
                      : inactiveLinkClasses,
                  ].join(" ")}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CtaButton href="/contact" variant="blue">
            Get a Diagnosis
          </CtaButton>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          onClick={() => setDrawerOpen(true)}
          className="flex md:hidden items-center justify-center min-h-[44px] min-w-[44px] rounded text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </header>
  );
}
