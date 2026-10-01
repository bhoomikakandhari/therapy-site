"use client";
import { useState } from "react";

const box =
  "w-full border border-ink/40 bg-paper px-4 py-3.5 text-[17px] text-ink focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";

function Label({ htmlFor, children, required = false }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block font-display text-xl font-light">
      {children}
      {required && <span className="ml-2 font-body text-sm text-ink/60">(required)</span>}
    </label>
  );
}

function Select({ id, options }: { id: string; options: string[] }) {
  return (
    <div className="relative">
      <select id={id} name={id} required defaultValue="" className={`${box} appearance-none pr-12`}>
        <option value="" disabled>Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

export default function BookingForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      first: (form.elements.namedItem("first") as HTMLInputElement).value,
      last: (form.elements.namedItem("last") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      format: (form.elements.namedItem("format") as HTMLSelectElement).value,
      heard: (form.elements.namedItem("heard") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div role="status" className="border border-primary/30 bg-secondary p-8 lg:p-10">
        <h2 className="font-display text-3xl font-light">Thank you for reaching out</h2>
        <p className="mt-4 text-[17px] leading-8 text-ink/85">
          Dr. Reynolds will be in touch to arrange your first conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <p className="mb-4 font-display text-2xl font-light">Name</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="first" required>First name</Label>
            <input id="first" name="first" required autoComplete="given-name" className={box} />
          </div>
          <div>
            <Label htmlFor="last" required>Last name</Label>
            <input id="last" name="last" required autoComplete="family-name" className={box} />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="email" required>Email</Label>
        <input id="email" name="email" type="email" required autoComplete="email" className={box} />
      </div>

      <div>
        <Label htmlFor="phone" required>Phone</Label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={box} />
      </div>

      <div>
        <Label htmlFor="format" required>Are you looking for telehealth or in-person therapy?</Label>
        <Select id="format" options={["In-person in Santa Monica", "Secure telehealth (California)"]} />
      </div>

      <div>
        <Label htmlFor="heard" required>How did you hear about this practice?</Label>
        <Select id="heard" options={["Google search", "Referral from a friend or professional", "Social media", "Other"]} />
      </div>

      <div>
        <Label htmlFor="message">What&apos;s bringing you to therapy?</Label>
        <textarea id="message" name="message" rows={4} className={box} />
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="rounded-full border border-primary bg-primary px-10 py-4 text-[13px] uppercase tracking-[0.2em] text-white transition hover:bg-primary-dark disabled:opacity-50"
      >
        {loading ? "Sending..." : "Request a consultation"}
      </button>

      <p className="text-sm leading-6 text-ink/70">
        This form isn&apos;t for emergencies. If you need immediate help in the U.S., call or text 988.
      </p>
    </form>
  );
}