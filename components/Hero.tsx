import { Eyebrow, Accent, TextLink, Photo } from "./ui";
import { hero } from "@/lib/content";


export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 lg:pb-44">
      <div className="grid lg:grid-cols-[42%_1fr]">
        <Photo {...hero.images[0]} priority className="aspect-4/5 lg:aspect-auto lg:min-h-700px" />

        <div className="px-5 py-12 md:px-10 lg:flex lg:flex-col lg:justify-between lg:py-16 lg:pl-20 lg:pr-[14%]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <div className="mt-10 lg:mt-28">
            <h1 className="font-display text-[2.5rem] font-light leading-[1.15] md:text-6xl lg:text-[3.9rem]">
              {hero.lead} <Accent>{hero.accent}</Accent>{hero.tail}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/85">{hero.sub}</p>
            <div className="mt-10"><TextLink href="/book">{hero.cta}</TextLink></div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-[40%] hidden h-[36%] w-[7%] lg:block"><Photo {...hero.images[1]} className="h-full w-full" /></div>
      <div className="absolute bottom-8 right-[4%] hidden w-[24%] lg:block"><Photo {...hero.images[2]} className="aspect-16/10 w-full" /></div>
    </section>
  );
}