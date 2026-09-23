import { Accent, TextLink, Photo } from "./ui";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-28">
      <div className="grid lg:grid-cols-[52%_1fr]">
        <Photo {...services.image} className="aspect-4/3 lg:aspect-auto lg:min-h-620px" />
        <div className="flex items-end px-5 py-10 md:px-10 lg:px-16 lg:pb-16">
          <h2 className="font-display text-4xl font-light leading-[1.2] lg:text-5xl">
            {services.introLead} <Accent>&amp;</Accent> {services.introTail}
          </h2>
        </div>
      </div>

      <div className="mt-20 grid gap-12 px-5 md:px-10 lg:mt-32 lg:grid-cols-[1fr_2fr] lg:px-24">
        <h2 className="font-display text-4xl font-light leading-tight lg:text-5xl">
          {services.lead} <Accent>{services.accent}</Accent><br />{services.tail}
        </h2>
        <div className="grid gap-14 md:grid-cols-2 md:gap-x-16 lg:pt-4">
          {services.items.map((s) => (
            <article key={s.title}>
              <h3 className="font-display text-3xl font-light">{s.title}</h3>
              <p className="mt-5 text-[17px] leading-8 text-ink/85">{s.text}</p>
              <div className="mt-8"><TextLink href={s.href}>Learn more</TextLink></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}