import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="High Breed Network — Home"
      className={[
        "inline-flex items-center min-h-[44px] rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
        className,
      ].join(" ")}
    >
      <Image
        src="/logo.jpg"
        alt="High Breed Network logo — solar, EV, and charging network"
        width={200}
        height={80}
        className="h-10 w-auto rounded-lg object-contain sm:h-11"
        priority
      />
    </Link>
  );
}
