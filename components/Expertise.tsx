import { Accent } from "./ui";
import { expertise } from "@/lib/content";

export default function Expertise() {
  return (
    <section className="bg-mist py-16 lg:py-28">
      <div className="grid gap-12 px-5 md:px-10 lg:grid-cols-[1fr_2fr] lg:px-24">
        <h2 className="font-display text-4xl font-light leading-tight lg:text-5xl">
          {expertise.lead}<br /><Accent>{expertise.accent}</Accent>
        </h2>
        <ul className="md:columns-2 md:gap-x-20">
          {expertise.items.map((item) => (
            <li key={item} className="break-inside-avoid border-b border-primary/25 py-6 text-[13px] uppercase tracking-[0.2em]">{item}</li>
          ))}
          <li className="break-inside-avoid py-6 text-[13px] uppercase tracking-[0.2em]">…and more.</li>
        </ul>
      </div>
    </section>
  );
}