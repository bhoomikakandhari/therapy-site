import { Photo } from "./ui";
import { intro } from "@/lib/content";

export default function Intro() {
  return (
    <section id="about" className="py-16 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_30%]">
        <div className="px-5 md:px-10 lg:pl-24 lg:pr-16">
          <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.2] lg:text-6xl">{intro.heading}</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14 lg:mt-20">
            <div>
              <p className="text-[13px] uppercase leading-7 tracking-[0.2em]">{intro.kicker}</p>
              <p className="mt-6 text-[17px] leading-8 text-ink/85">{intro.body[0]}</p>
            </div>
            <p className="text-[17px] leading-8 text-ink/85 md:pt-[4.2rem]">{intro.body[1]}</p>
          </div>
        </div>
        <Photo {...intro.image} className="mt-14 aspect-3/4 lg:mt-24 lg:aspect-auto lg:min-h-520px" />
      </div>
    </section>
  );
}