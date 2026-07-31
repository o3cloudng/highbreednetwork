import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/services-data";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1456a8] to-[#1a6fd4] py-20 text-white sm:py-28">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-green opacity-10 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest">
            High Breed Network
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-blue-100 sm:text-xl">
            Reach us by phone, WhatsApp, or email — or fill in our form below
            and we will get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact Details"
            subtitle="Choose the channel that works best for you"
            className="mb-12"
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Phone */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-brand-off-white p-6 text-center shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.83 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-gray-500">
                  Phone
                </h2>
                <a
                  href="tel:08060617790"
                  className="inline-flex min-h-[44px] items-center justify-center text-lg font-bold text-brand-blue hover:text-brand-blue-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue rounded"
                >
                  08060617790
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-brand-off-white p-6 text-center shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-gray-500">
                  WhatsApp
                </h2>
                <a
                  href="https://wa.me/2348060617790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center text-lg font-bold text-brand-green hover:text-brand-green-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green rounded"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-brand-off-white p-6 text-center shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-gray-500">
                  Email
                </h2>
                <a
                  href="mailto:highbreed@gmail.com"
                  className="inline-flex min-h-[44px] items-center justify-center text-lg font-bold text-brand-blue hover:text-brand-blue-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue rounded break-all"
                >
                  highbreed@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Model Statements ── */}
      <section className="bg-[#0f1f3d] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
            {/* We come to you */}
            <div className="flex flex-col items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/20"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a6fd4"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="5" cy="19" r="2" />
                  <circle cx="19" cy="19" r="2" />
                  <path d="M1 19h2M17 19H7" />
                  <path d="M17 19l1-4H3l2-5h12l1 3" />
                  <path d="M10 5h4l2 5" />
                </svg>
              </span>
              <p className="text-xl font-extrabold uppercase tracking-widest text-white sm:text-2xl">
                WE COME TO YOU
                <br />
                OR YOU VISIT US
              </p>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-16 w-px bg-white/20 sm:block"
            />

            {/* Serving all customers */}
            <div className="flex flex-col items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/20"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3a9a3a"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <p className="text-xl font-extrabold uppercase tracking-widest text-white sm:text-2xl">
                SERVING INDIVIDUALS,
                <br />
                FLEETS &amp; DEALERSHIPS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="bg-brand-off-white py-16 sm:py-20" aria-labelledby="contact-form-heading">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="contact-form-heading"
            title="Send Us a Message"
            subtitle="Fill in the form and we'll get back to you as soon as possible"
            className="mb-10"
          />
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
