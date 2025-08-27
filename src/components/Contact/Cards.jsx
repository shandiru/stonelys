// File: ContactCards.jsx
import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// ✅ Stoneley’s Garage Services Palette
const palette = {
  black: "#000000",
  darkGrey: "#1C1C1C",
  neonGreen: "#00FF40",   // bright accent
  softGreen: "#27AE60",   // softer green
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.85)",
  dim: "rgba(255,255,255,0.65)",
  border: "rgba(255,255,255,0.15)",
  cardBg: "#111111",      // dark card background
  shadow: "0 8px 18px rgba(0,0,0,0.4)",
};

function InfoCard({ icon, title, subtitle, body, cta }) {
  return (
    <div
      className="flex flex-col gap-6 rounded-xl border py-6 text-center transition hover:shadow-lg"
      style={{
        backgroundColor: palette.cardBg,
        borderColor: palette.border,
        boxShadow: palette.shadow,
      }}
    >
      <div className="px-6">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
          style={{ backgroundColor: palette.softGreen, color: palette.white }}
        >
          {icon}
        </div>
        <div className="text-xl font-bold" style={{ color: palette.white }}>
          {title}
        </div>
        {subtitle && (
          <div className="text-sm" style={{ color: palette.dim }}>
            {subtitle}
          </div>
        )}
      </div>

      <div className="px-6 space-y-4">
        {body && (
          <p
            className="text-sm whitespace-pre-line leading-relaxed"
            style={{ color: palette.muted }}
          >
            {body}
          </p>
        )}
        {cta}
      </div>
    </div>
  );
}

export default function ContactCards() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: palette.black, color: palette.white }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {/* Call Us */}
          <InfoCard
            icon={<FaPhone className="h-6 w-6" />}
            title="Call Us"
            subtitle="Speak directly with our team"
            body="+44 1623 623759"
            cta={
              <a href="tel:+441623623759">
                <button
                  className="h-9 rounded-md px-4 text-sm font-medium transition"
                  style={{
                    backgroundColor: palette.neonGreen,
                    color: palette.black,
                  }}
                >
                  Call Now
                </button>
              </a>
            }
          />

          {/* Visit Us */}
          <InfoCard
            icon={<FaMapMarkerAlt className="h-6 w-6" />}
            title="Visit Us"
            subtitle="Find us in Mansfield"
            body={`Stoneley's Garage\nHamilton Way\nMansfield NG18 5BU`}
            cta={
              <a
                href="https://www.google.com/maps/place/Stoneley's+Garage+Services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="h-9 rounded-md px-4 text-sm font-medium transition"
                  style={{
                    backgroundColor: palette.neonGreen,
                    color: palette.black,
                  }}
                >
                  Get Directions
                </button>
              </a>
            }
          />

          {/* Opening Hours */}
          <InfoCard
            icon={<FaClock className="h-6 w-6" />}
            title="Opening Hours"
            subtitle="We're here when you need us"
            body={`Mon–Fri: 8:00 AM – 5:30 PM\nSat: 8:00 AM – 4:00 PM\nSun: Closed`}
            cta={
              <span className="text-sm" style={{ color: palette.dim }}>
                No appointment needed
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}
