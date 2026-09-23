import { site, nav, navCta, footer, services } from "@/lib/content";

const h = "mb-5 text-[13px] uppercase tracking-[0.2em] text-white";

export default function Footer() {
  return (
    <footer className="bg-night text-white/75">
      <div className="mx-auto grid w-full max-w-1500px gap-12 px-5 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-[1.5fr_1fr_1.2fr_1.3fr] lg:px-24 lg:py-24">
        <div>
          <p className="font-display text-4xl font-light text-white lg:text-5xl">{site.name}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-accent">{site.tagline}</p>
          <p className="mt-6 max-w-sm leading-8">{footer.blurb}</p>
        </div>
        <div>
          <p className={h}>Navigate</p>
          <ul className="space-y-3">
            {[{ label: "Home", href: "#top" }, ...nav, navCta].map((n) => <li key={n.label}><a href={n.href} className="hover:text-accent">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <p className={h}>Specialties</p>
          <ul className="space-y-3">
            {services.items.map((s) => <li key={s.title}><a href="#services" className="hover:text-accent">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <p className={h}>Contact</p>
          <address className="space-y-3 not-italic leading-7">
            <p>{site.address}<br />{site.city}, {site.state} {site.zip}</p>
            {site.email && <p><a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a></p>}
            {site.phone && <p><a href={`tel:${site.phone}`} className="hover:text-accent">{site.phone}</a></p>}
            <p className="font-display text-lg italic text-white/65">{footer.serving}</p>
          </address>
        </div>
      </div>
      <p className="border-t border-white/10 py-6 text-center text-sm text-white/50">© {new Date().getFullYear()} {site.name}, {site.credentials}</p>
    </footer>
  );
}