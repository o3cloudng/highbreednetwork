import CtaButton from "@/components/shared/CtaButton";

export default function SecondaryCta() {
  return (
    <section
      className="bg-[#0f1f3d] py-16 sm:py-20"
      aria-labelledby="secondary-cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="secondary-cta-heading"
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          ALL BRANDS.{" "}
          <span className="text-brand-green-light">ALL SYSTEMS.</span>{" "}
          TOTAL SOLUTIONS.
        </h2>
        <p className="mt-4 text-base text-blue-200 sm:text-lg">
          Whatever you drive, wherever you are — High Breed Network has you covered.
        </p>
        <div className="mt-8">
          <CtaButton href="/contact" variant="green">
            Get in Touch
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
