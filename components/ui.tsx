import Image from "next/image";

// Tracked uppercase label (used in the original for eyebrows & lead-ins)
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[13px] uppercase leading-7 tracking-[0.2em] ${light ? "text-white/85" : "text-ink/80"}`}>{children}</p>;
}

// Handwritten script accent inside headings (signature of the original)
export function Accent({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`font-script text-[1.7em] leading-none ${light ? "text-accent" : "text-primary"}`}>{children}</span>;
}

// Underlined tracked text link – the original's CTA style
export function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-block border-b pb-2 text-[13px] uppercase tracking-[0.2em] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
        light ? "border-accent text-white" : "border-primary text-ink"
      }`}
    >
      {children}
    </a>
  );
}

// Outlined oval button (original uses this for "Contact" and "Book now")
export function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full border border-primary px-8 py-3.5 text-[13px] uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      {children}
    </a>
  );
}

// Square-cornered image; light plum tint keeps every picture inside the palette.
export function Photo({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-secondary ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-primary/5 mix-blend-multiply" aria-hidden />
    </div>
  );
}