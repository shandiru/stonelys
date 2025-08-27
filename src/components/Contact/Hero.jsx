// File: ContactHero.jsx
import React from "react";

const palette = {
  black: "#000000",       // background dark
  darkGrey: "#1C1C1C",    // secondary dark
  neonGreen: "#00FF40",   // bright accent
  softGreen: "#27AE60",   // softer green
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.85)", // muted text
  dim: "rgba(255,255,255,0.65)",   // even softer
};

export default function ContactHero() {
  return (
    <section
      className="py-20 text-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${palette.darkGrey}, ${palette.black})`,
        color: palette.white,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <span
          className="inline-flex items-center justify-center rounded-md px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-6"
          style={{
            backgroundColor: palette.neonGreen,
            color: palette.black,
          }}
        >
          Get In Touch
        </span>

        {/* Heading */}
        <h1
          className="text-4xl lg:text-5xl font-extrabold mb-6"
          style={{ color: palette.white }}
        >
          Contact{" "}
          <span style={{ color: palette.neonGreen }}>
            Stoneley&apos;s Garage
          </span>
        </h1>

        {/* Paragraph */}
        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ color: palette.muted }}
        >
          Family-run garage established 1973. Contact our friendly team for
          professional automotive services, quotes, or to book your appointment.
          We&apos;re here to help with all your vehicle needs.
        </p>
      </div>
    </section>
  );
}
