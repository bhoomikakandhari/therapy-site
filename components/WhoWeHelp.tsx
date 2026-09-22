import { Accent, Photo } from "./ui";
import { who } from "@/lib/content";

export default function WhoWeHelp() {
  return (
    <section id="who" className="pb-16 pt-4 lg:pb-28">
      <div className="px-5 md:px-10 lg:px-24">
        <h2 className="font-display text-4xl font-light lg:text-6xl">{who.lead} <Accent>{who.accent}</Accent></h2>

        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8 lg:ml-[18%] lg:mt-16">
          {who.items.map((i) => (
            <article key={i.title}>
              <Photo src={i.image} alt={i.alt} className="aspect-[3/4]" />
              <h3 className="mt-8 font-display text-3xl font-light">{i.title}</h3>
              <p className="mt-4 text-[17px] leading-8 text-ink/85">{i.text}</p>
            </article>
          ))}
        </div>
      </div>

      <Photo {...who.banner} className="mt-20 aspect-[16/9] w-full md:aspect-[21/8]" />

      <p className="mx-auto mt-16 max-w-4xl px-5 text-center font-display text-3xl font-light leading-snug md:px-10 lg:text-5xl">
        {who.statementLead} <Accent>{who.statementAccent}</Accent>.
      </p>
    </section>
  );
}