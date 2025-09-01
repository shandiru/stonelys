import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const palette = {
  primary: "#2F7D33",     // brand green
  badge: "#E7F3E9",       // soft green badge bg
  text: "#111827",        // dark heading
  muted: "#4B5563",       // body copy
  cardBg: "#F7F7F7",      // very light card bg
  border: "#E6EAE7",      // subtle border
};

function InfoCard({ icon, title, subtitle, body, cta }) {
  return (
    <div
      className="flex flex-col gap-6 rounded-xl border py-6 text-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)] hover:ring-2 hover:ring-green-600 hover:ring-offset-2"
      style={{
        backgroundColor: palette.cardBg,
        borderColor: palette.border,
      }}
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
    <section className="py-16 bg-white">
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
                  className="h-9 rounded-md border px-3 text-sm font-medium transition-all duration-300 hover:border-green-600 hover:text-green-700 hover:shadow-[0_6px_18px_rgba(47,125,51,0.35)]"
                  style={{
                    borderColor: palette.border,
                    color: palette.text,
                    background: "transparent",
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
                href="https://www.google.com/maps/place/Stoneley's+Garage+Services/data=!4m2!3m1!1s0x0:0x5a644c3262063baf?sa=X&ved=1t:2428&hl=en-GB&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="h-9 rounded-md border px-3 text-sm font-medium transition-all duration-300 hover:border-green-600 hover:text-green-700 hover:shadow-[0_6px_18px_rgba(47,125,51,0.35)]"
                  style={{
                    borderColor: palette.border,
                    color: palette.text,
                    background: "transparent",
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
              <span className="text-sm" style={{ color: palette.muted }}>
                No appointment needed
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}
