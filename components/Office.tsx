import { Eyebrow, Accent, Photo } from "./ui";
import { office } from "@/lib/content";


export default function Office() {
  const [a, b, c] = office.images;
  return (
    <section id="office" className="bg-primary py-16 text-white lg:py-28">
      <div className="px-5 md:px-10 lg:px-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow light>{office.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.2] lg:text-6xl">{office.lead} <Accent light>{office.accent}</Accent></h2>
          </div>
          <p className="text-[17px] leading-8 text-white/85 lg:pt-10">{office.text}</p>
        </div>

        {/* adapts to 2 or 3 photos */}
        {c ? (
          <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2 lg:mt-20">
            <Photo {...a} className="aspect-4/3 md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-28rem" />
            <Photo {...b} className="aspect-4/3" />
            <Photo {...c} className="aspect-4/3" />
          </div>
        ) : (
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20">
            <Photo {...a} className="aspect-4/3" />
            <Photo {...b} className="aspect-4/3" />
          </div>
        )}

        <dl className="mt-14 grid gap-10 border-t border-white/25 pt-10 md:grid-cols-3">
          {office.details.map((d) => (
            <div key={d.label}>
              <dt className="text-[13px] uppercase tracking-[0.2em] text-accent">{d.label}</dt>
              <dd className="mt-3 text-[17px] leading-8 text-white/85">{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}