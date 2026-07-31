"use client";

import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOP_LEVEL_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-y-0 right-0 z-50 w-72 max-w-full overflow-y-auto bg-white shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
          <span className="font-extrabold text-brand-blue">HIGH BREED</span>
          <span className="font-extrabold text-brand-green ml-1">NETWORK</span>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="ml-auto inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded text-gray-600 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="px-2 py-4">
          <ul className="space-y-1 list-none m-0 p-0">
            {TOP_LEVEL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center min-h-[44px] px-3 py-2 rounded text-base font-medium text-gray-800 hover:bg-brand-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Services section */}
            <li>
              <Link
                href="/services"
                onClick={onClose}
                className="flex items-center min-h-[44px] px-3 py-2 rounded text-base font-medium text-gray-800 hover:bg-brand-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
              >
                Services
              </Link>
              <ul className="mt-1 ml-3 space-y-0.5 list-none p-0 border-l-2 border-brand-blue/20 pl-3">
                {SERVICE_CATEGORIES.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/services/${cat.slug}`}
                      onClick={onClose}
                      className="flex items-center min-h-[44px] px-2 py-2 rounded text-sm text-gray-600 hover:bg-brand-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Mobile CTA */}
          <div className="mt-6 px-1">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center min-h-[44px] w-full rounded-md bg-brand-blue px-6 py-3 text-base font-semibold text-white hover:bg-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
            >
              Get a Diagnosis
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
