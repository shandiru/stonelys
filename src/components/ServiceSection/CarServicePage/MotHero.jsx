"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function MotHero() {
  return (
    <section
      className="py-16 transition-colors duration-300 bg-linear-to-b 
                 from-[var(--mot-grad-top)] to-[var(--mot-grad-bottom)] 
                 dark:from-[var(--mot-grad-top-dark)] dark:to-[var(--mot-grad-bottom-dark)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
            style={{
              backgroundColor: "var(--mot-badge-bg)",
              color: "var(--mot-badge-text)",
            }}
          >
            Qualified Technicians
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-black mb-6 text-[color:var(--mot-heading)]">
            Car Service &{" "}
            <span style={{ color: "var(--mot-primary)" }}>MOT Testing</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[color:var(--mot-muted)]">
            Professional car servicing and MOT testing from qualified motor technicians and MOT testers.
            Comprehensive maintenance for cars, commercial vehicles, and motorhomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Call Button */}
            <a href="tel:+441623623759" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all"
                style={{
                  backgroundColor: "var(--mot-primary)",
                  color: "#FFFFFF",
                }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: +44 1623 623 759
              </button>
            </a>

            {/* MOT Booking Button */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300"
              style={{
                backgroundColor: "var(--mot-button-bg)",
                color: "var(--mot-heading)",
                border: "1px solid var(--mot-outline-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(47,125,51,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              MOT Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
