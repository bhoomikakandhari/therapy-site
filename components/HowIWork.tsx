import { TextLink, Photo } from "./ui";
import { how } from "@/lib/content";

export default function HowIWork() {
  return (
    <section className="bg-secondary py-16 lg:py-28">
      <div className="grid lg:grid-cols-[1fr_30%]">
        <div className="px-5 md:px-10 lg:pl-24 lg:pr-16">
          <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.2] lg:text-6xl">{how.heading}</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14 lg:mt-20">
            <div>
              <p className="text-[13px] uppercase leading-7 tracking-[0.2em]">{how.kicker}</p>
              <p className="mt-6 text-[17px] leading-8 text-ink/85">{how.paragraphs[0]}</p>
            </div>
            <p className="text-[17px] leading-8 text-ink/85 md:pt-[4.2rem]">{how.paragraphs[1]}</p>
          </div>
          <div className="mt-14"><TextLink href={how.link.href}>{how.link.label}</TextLink></div>
        </div>
        <Photo {...how.image} className="mt-14 aspect-4/5 lg:mt-0 lg:mr-8 lg:aspect-4/5" />
      </div>
    </section>
  );
}