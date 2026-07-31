interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  id,
}: SectionHeadingProps) {
  return (
    <div className={["text-center", className].filter(Boolean).join(" ")}>
      <h2 id={id} className="text-3xl font-bold text-[#0f1f3d] sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-gray-500 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
