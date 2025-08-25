// File: ContactCards.jsx
import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const palette = {
  primary: "#2F7D33",     // brand green
  badge: "#E7F3E9",       // soft green badge bg
  text: "#111827",        // dark heading
  muted: "#4B5563",       // body copy
  cardBg: "#F7F7F7",      // very light card bg
  border: "#E6EAE7",      // subtle border
  shadow: "0 10px 20px rgba(0,0,0,0.06)",
};

function InfoCard({ icon, title, subtitle, body, cta }) {
  return (
    <div
      className="flex flex-col gap-6 rounded-xl border py-6 text-center transition-shadow"
      style={{ backgroundColor: palette.cardBg, borderColor: palette.border, boxShadow: palette.shadow }}
    >
      <div className="px-6">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
          style={{ backgroundColor: palette.badge, color: palette.primary }}
        >
          {icon}
        </div>
        <div className="text-xl font-bold" style={{ color: palette.text }}>
          {title}
        </div>
        {subtitle && (
          <div className="text-sm" style={{ color: palette.muted }}>
            {subtitle}
          </div>
        )}
      </div>

      <div className="px-6 space-y-4">
        {body && (
          <p className="text-sm whitespace-pre-line" style={{ color: palette.text }}>
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
    <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {/* Call Us */}
          <InfoCard
            icon={<FaPhone className="h-6 w-6" />}
            title="Call Us"
            subtitle="Speak directly with our team"
            body={"01623 623 759"}
            cta={
              <a href="tel:01623623759">
                <button
                  className="h-9 rounded-md border px-3 text-sm font-medium"
                  style={{ borderColor: palette.border, color: palette.text, background: "transparent" }}
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
            body={"Hamilton Way, Mansfield NG18 5BU"}
            cta={
              <a
                href="https://maps.google.com/?q=Hamilton+Way,+Mansfield+NG18+5BU"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="h-9 rounded-md border px-3 text-sm font-medium"
                  style={{ borderColor: palette.border, color: palette.text, background: "transparent" }}
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
            body={`Mon-Fri: 8:00 AM - 5:30 PM\nSat: 8:00 AM - 4:00 PM`}
            cta={
              <button
                className="h-9 rounded-md border px-3 text-sm font-medium"
                style={{ borderColor: palette.border, color: palette.text, background: "transparent" }}
              >
                View Hours
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}
