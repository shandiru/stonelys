import React from "react";

const palette = {
  primary: "#2F7D33",     // green accent
  heading: "#111827",     // dark heading
  muted: "#4B5563",       // muted body text
  badgeBg: "#A4BE6A",
  badgeText: "#1F2A10",
};

export default function ContactHero() {
  return (
    <section
      className="py-16 transition-colors duration-300 bg-gradient-to-b 
                 from-[var(--contact-grad-top)] to-[var(--contact-grad-bottom)] dark:from-[var(--contact-grad-top-dark)] dark:to-[var(--contact-grad-bottom-dark)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
            style={{ backgroundColor: palette.badgeBg, color: palette.badgeText }}
          >
            Get In Touch
          </span>

          <h1
            className="text-4xl lg:text-5xl font-black mb-6 text-[var(--contact-heading)]"
          >
            Contact{" "}
            <span style={{ color: palette.primary }}>
              Stoneley&apos;s Garage
            </span>
          </h1>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[var(--contact-muted)]">
            Family-run garage established 1973. Contact our friendly team for
            professional automotive services, quotes, or to book your
            appointment. We&apos;re here to help with all your vehicle needs.
          </p>
        </div>
      </div>
    </section>
  );
}
