import { faqs } from "@/lib/content";


export default function FAQ() {
  return (
    <section id="faqs" className="py-16 lg:py-28">
      <div className="grid gap-12 px-5 md:px-10 lg:grid-cols-[1fr_2fr] lg:px-24">
        <h2 className="font-display text-4xl font-light leading-tight lg:text-5xl">Frequently asked questions</h2>
        <div className="border-t border-primary/25">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-primary/25">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-2xl font-light marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-3xl text-primary transition group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="pb-8 text-[17px] leading-8 text-ink/85">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}