import Link from "next/link";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "blue" | "green";
  className?: string;
}

const variantClasses = {
  blue: "bg-brand-blue hover:bg-brand-blue-dark text-white focus-visible:outline-brand-blue",
  green: "bg-brand-green hover:bg-brand-green-dark text-white focus-visible:outline-brand-green",
};

export default function CtaButton({
  href,
  children,
  variant = "blue",
  className = "",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center",
        "min-h-[44px] min-w-[44px]",
        "px-6 py-3 rounded-md",
        "font-semibold text-base transition-colors duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Link>
  );
}
