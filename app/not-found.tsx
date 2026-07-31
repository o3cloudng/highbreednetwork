import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | High Breed Network",
  description:
    "The page you are looking for could not be found. Return to the High Breed Network homepage.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      {/* 404 number in brand blue */}
      <p className="text-9xl font-extrabold text-brand-blue leading-none select-none">
        404
      </p>

      {/* "Page not found" heading */}
      <h1 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h1>

      {/* Brief explanation */}
      <p className="mt-3 max-w-md text-base text-gray-600">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Link back to home */}
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-brand-blue px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        Go Back Home
      </Link>
    </div>
  );
}
