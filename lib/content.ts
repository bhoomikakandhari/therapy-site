/**
 * SINGLE SOURCE OF TRUTH – every word comes from Dr. Maya Reynolds' profile.
 * Facts used: licensed clinical psychologist, PsyD, Santa Monica CA 90401; adults; anxiety, panic,
 * trauma, burnout, perfectionism; CBT, EMDR, mindfulness, body-oriented; in-person + telehealth (CA);
 * quiet, private, natural-light office. (No phone/email/fees in the profile, so none are invented.)
 */
export const site = {
  name: "Dr. Maya Reynolds",
  credentials: "PsyD",
  tagline: "Clinical Psychology · Santa Monica",
  city: "Santa Monica",
  state: "CA",
  zip: "90401",
  address: "123th Street 45 W",
  phone: "",   // not in profile – leave empty to hide
  email: "",   // not in profile – leave empty to hide
  primarySpecialty: "Anxiety & Trauma Therapy",
  sessionFormat: "In-person & telehealth",
  metaDescription:
    "Anxiety, trauma and burnout therapy in Santa Monica, CA with Dr. Maya Reynolds, PsyD. In-person sessions and secure telehealth for adults across California.",
};

export type NavItem = { label: string; href: string };
export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
];
export const navCta = { label: "Contact", href: "/book" };

export const hero = {
  eyebrow: "In-person therapy in Santa Monica & secure telehealth across CA",
  lead: "Anxiety & trauma therapy in Santa Monica, CA, so you can finally",
  accent: "exhale",
  tail: ".",
  sub: "Evidence-based, warm and grounded therapy for high-achieving adults who look fine on the outside but feel worn down, on edge, or stuck in overthinking.",
  cta: "Book a consultation",
  images: [
    { src: "/images/hero-1.svg", alt: "Sunset over the Pacific near the Santa Monica Pier, framed by palm trees" },
    { src: "/images/hero-2.svg", alt: "Golden grass stems on a warm parchment background" },
    { src: "/images/hero-3.svg", alt: "Layered plum hills under a golden sun" },
  ],
};

export const intro = {
  heading: "You seem to have it all together, yet inside you're running on empty.",
  kicker: "Therapy can be a place to slow down, reconnect, and feel steady again.",
  body: [
    "I'm Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica, California. I support adults whose anxiety, stress, or past experiences have started to weigh on daily life. Many are driven, thoughtful, and self-aware, and still feel exhausted, stuck in overthinking, or constantly on edge.",
    "From the outside you may look completely functional. On the inside there may be constant worry, tension in your body, restless sleep, or a feeling that you're always bracing for something to go wrong. In therapy we make room to understand what's happening and start feeling steady again.",
  ],
  image: { src: "/images/intro.svg", alt: "Palm trees silhouetted against a golden hour sky in Santa Monica" },
};

export const who = {
  lead: "Who I",
  accent: "help",
  items: [
    {
      title: "Anxiety & panic",
      text: "Constant worry, racing thoughts, and a body that never fully relaxes are exhausting. Together we'll understand what fuels your anxiety and build practical ways to feel calmer, emotionally and physically.",
      image: "/images/help-1.svg",
      alt: "Calm ripples spreading across still water",
    },
    {
      title: "Trauma",
      text: "Whether you lived through a single distressing event or long-standing patterns from childhood, relationships, or chronic stress, we'll move at a careful pace with safety and stabilization first.",
      image: "/images/help-2.svg",
      alt: "A young green sprout growing in warm light",
    },
    {
      title: "Burnout & perfectionism",
      text: "Entrepreneurs, creatives, and high performers who have pushed through stress for years often feel disconnected from themselves. Therapy becomes a space to slow down and find a more sustainable rhythm.",
      image: "/images/help-3.svg",
      alt: "A slow sunset over layered hills",
    },
  ],
  banner: { src: "/images/banner.svg", alt: "Wide panorama of plum dunes and sea at golden hour" },
  statementLead: "Practical tools, real depth, and a space where you can finally",
  statementAccent: "breathe",
};

export const expertise = {
  lead: "Areas of",
  accent: "expertise",
  items: [
    "Anxiety",
    "Panic",
    "Trauma",
    "Complex trauma",
    "Burnout",
    "Perfectionism",
    "Overthinking",
    "Chronic stress",
    "Relationships & confidence",
    "Sense of safety",
  ],
};

export const how = {
  heading: "Warm, collaborative & grounded.",
  kicker: "Structured enough to feel supportive, with space for reflection and depth.",
  paragraphs: [
    "I draw on evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, so we can look at both the emotional and the physical side of what you're experiencing.",
    "Therapy works best when you feel respected, understood, and actively involved. My goal goes beyond symptom relief: I want to help you build insight, resilience, and a stronger relationship with yourself over time.",
  ],
  link: { label: "Learn more about me", href: "#about" },
  image: { src: "/images/maya.png", alt: "Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica" },
};

export const services = {
  image: { src: "/images/services.svg", alt: "Santa Monica coastline at sunset with the pier in the distance" },
  introLead: "Making sense of where you've been",
  introTail: "building steadier ground ahead.",
  lead: "My",
  accent: "specialties",
  tail: "include…",
  items: [
    {
      title: "Anxiety & Panic Therapy",
      text: "Constant worry, tension in your body, and trouble sleeping make it hard to switch off. We'll explore what keeps you on high alert and build tools, from CBT to mindfulness, that help you feel calmer and more in control.",
      href: "/book",
    },
    {
      title: "Trauma Therapy & EMDR",
      text: "With carefully paced, evidence-based work including EMDR, we focus first on safety and stabilization so you can feel more regulated in daily life, not just during sessions.",
      href: "/book",
    },
    {
      title: "Burnout & Perfectionism Support",
      text: "If years of pushing through stress have left you disconnected from yourself, therapy can be a place to slow down, reconnect, and create more sustainable ways of living and working.",
      href: "/book",
    },
  ],
};

/* NEW SECTION – "Our Office" (uses office details + the office photos from the profile's Drive folder) */
export const office = {
  eyebrow: "Our office",
  lead: "A quiet, private space in",
  accent: "Santa Monica",
  text: "My Santa Monica office is designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often tell me the space itself helps them feel more at ease the moment they arrive.",
  images: [
    { src: "/images/office-1.jpeg", alt: "Bright therapy office in Santa Monica with large windows, wood floors and comfortable seating" },
    { src: "/images/office-2.jpeg", alt: "Cozy counseling room with a sofa, armchair, plants and bookshelf" },
  ],
  
  details: [
    { label: "Location", value: `${site.address}, ${site.city}, ${site.state} ${site.zip}` },
    { label: "In-person or online", value: "In-person sessions at my Santa Monica office, plus secure telehealth for clients located in California." },
    { label: "Comfort & privacy", value: "A quiet, private room with natural light, where you can slow down and feel safe." },
  ],
};

export const faqs = [
  {
    q: "Do you offer in-person and online therapy?",
    a: "Yes. I see clients in person at my Santa Monica office and offer secure telehealth sessions for clients located in California.",
  },
  {
    q: "What do you help with?",
    a: "I work with adults facing anxiety, panic, trauma, and burnout, as well as perfectionism and high internal pressure. Many of my clients also want support with relationships, confidence, or feeling safe again.",
  },
  {
    q: "What is your approach to therapy?",
    a: "Warm, collaborative, and grounded. I combine evidence-based methods such as CBT, EMDR, mindfulness, and body-oriented techniques, and I leave room for reflection and depth.",
  },
  {
    q: "How do you approach trauma work?",
    a: "Carefully and at your pace. We start with safety and stabilization, and the aim is to help you feel more regulated in everyday life, not only during sessions.",
  },
  {
    q: "I'm successful but exhausted. Is therapy with you a good fit?",
    a: "If you want practical tools combined with depth-oriented work, and a therapist who understands the realities of living and working in a fast-paced environment, I may be a good fit.",
  },
];

export const cta = {
  eyebrow: "Schedule an appointment",
  lead: "Begin therapy in Santa Monica, or online, with care that fits",
  accent: "you",
  tail: ".",
  text: "Reaching out is a big step. If you want a therapist who blends practical tools with depth-oriented work, I'd be glad to hear from you.",
  hint: "Click the button below to book a first conversation.",
  button: "Book now",
  images: [
    { src: "/images/cta-left.svg", alt: "A single stem of golden grass" },
    { src: "/images/cta-right.svg", alt: "A full moon rising over a calm night sea" },
  ],
};

export const footer = {
  blurb: "Come see me at my Santa Monica office, or meet online from anywhere in California. Whichever feels easier, we can begin when you're ready.",
  serving: "Serving Santa Monica and clients across California via secure telehealth.",
};