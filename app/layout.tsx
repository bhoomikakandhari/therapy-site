import type { Metadata } from "next";
import { Newsreader, Nunito_Sans, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const display = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display-src" });
const body = Nunito_Sans({ subsets: ["latin"], variable: "--font-body-src" });
const script = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400", variable: "--font-script-src" });

const title = `${site.primarySpecialty} in ${site.city}, ${site.state} | ${site.name}`;

export const metadata: Metadata = {
  title,
  description: site.metaDescription,
  openGraph: { title, description: site.metaDescription, type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: `${site.name}, ${site.credentials}`,
  ...(site.phone && { telephone: site.phone }),
  ...(site.email && { email: site.email }),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.zip,
  },
  areaServed: ["Santa Monica", "California"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}