// File: ContactHero.jsx
import React from "react";

const palette = {
  primary: "#2F7D33",     // brand green for highlighted text
  gradTop: "#EAF5EA",     // very light green (top of gradient)
  gradBottom: "#FFFFFF",  // white (bottom of gradient)
  heading: "#111827",     // near-black
  muted: "#4B5563",       // body copy
  badgeBg: "#A4BE6A",     // olive-green badge background
  badgeText: "#1F2A10",   // badge text
};

export default function ContactHero() {
  return (
    <section
      className="py-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${palette.gradTop}, ${palette.gradBottom})`,
      }}
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
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ color: palette.heading }}
          >
            Contact{" "}
            <span style={{ color: palette.primary }}>
              Stoneley&apos;s Garage
            </span>
          </h1>

          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: palette.muted }}
          >
            Family-run garage established 1973. Contact our friendly team for
            professional automotive services, quotes, or to book your
            appointment. We&apos;re here to help with all your vehicle needs.
          </p>
        </div>
      </div>
    </section>
  );
}
