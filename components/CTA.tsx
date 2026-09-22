import { Eyebrow, Accent, PillLink, Photo } from "./ui";
import { cta } from "@/lib/content";

export default function CTA() {
  return (
    <section id="contact" className="overflow-hidden bg-secondary">
      <div className="grid items-center gap-10 pt-16 lg:grid-cols-[15%_1fr_36%] lg:gap-0 lg:py-28">
        <Photo {...cta.images[0]} className="hidden aspect-2/5 lg:block" />
        <div className="px-5 md:px-10 lg:px-16">
          <Eyebrow>{cta.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-light leading-[1.2] lg:text-5xl">{cta.lead} <Accent>{cta.accent}</Accent>{cta.tail}</h2>
          <p className="mt-8 max-w-xl text-[17px] leading-8 text-ink/85">{cta.text}</p>
          <p className="mt-4 text-[17px] leading-8 text-ink/85">{cta.hint}</p>
          <div className="mt-10"><PillLink href="/book">{cta.button}</PillLink></div>
        </div>
        <Photo {...cta.images[1]} className="mt-10 aspect-4/3 lg:mt-0 lg:aspect-6/5" />
      </div>
    </section>
  );
}