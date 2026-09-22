import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Eyebrow, Accent } from "@/components/ui";
import { site, office } from "@/lib/content";

export const metadata: Metadata = {
  title: `Book a consultation | ${site.name}, ${site.primarySpecialty} in ${site.city}, ${site.state}`,
  description: `Request a consultation with ${site.name}, ${site.credentials}. In-person therapy in ${site.city}, ${site.state} and secure telehealth for adults across California.`,
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="py-16 lg:py-28">
        <div className="grid gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:px-24">
          <div>
            <Eyebrow>Book a consultation</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.2] lg:text-6xl">
              Let&apos;s find a time to <Accent>talk</Accent>.
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-8 text-ink/85">
              Reaching out is a big step. Tell me a little about what&apos;s bringing you in, and whether you&apos;d
              prefer to meet in person in Santa Monica or online.
            </p>
            <dl className="mt-12 space-y-8 border-t border-primary/25 pt-8">
              {office.details.map((d) => (
                <div key={d.label}>
                  <dt className="text-[13px] uppercase tracking-[0.2em] text-primary">{d.label}</dt>
                  <dd className="mt-2 text-[17px] leading-8 text-ink/85">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </>
  );
}