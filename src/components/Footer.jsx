// File: SiteFooter.jsx
import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// ✅ Stoneley's Garage Services Palette
const palette = {
  black: "#000000",
  darkGrey: "#1C1C1C",
  neonGreen: "#00FF40",
  softGreen: "#27AE60",
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.85)",
  dim: "rgba(255,255,255,0.65)",
  border: "rgba(255,255,255,0.15)",
};

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: palette.black, color: palette.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-wide text-white">
              STONELEY&apos;S GARAGE SERVICES
            </h3>
            <p className="text-sm mt-3" style={{ color: palette.muted }}>
              Family-run garage established 1973. Professional automotive
              services for cars, commercial vehicles, and motorhomes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Contact Information
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+441623623759"
                className="flex items-center gap-2 text-sm transition hover:text-[#00FF40]"
                style={{ color: palette.muted }}
              >
                <FaPhone className="h-4 w-4" style={{ color: palette.neonGreen }} />
                +44 1623 623759
              </a>
              <a
                href="https://www.google.com/maps/place/Stoneley's+Garage+Services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition hover:text-[#00FF40]"
                style={{ color: palette.muted }}
              >
                <FaMapMarkerAlt className="h-4 w-4" style={{ color: palette.softGreen }} />
                Stoneley&apos;s Garage, Hamilton Way, Mansfield NG18 5BU, UK
              </a>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["MOT Testing & Car Servicing", "/services/car-service"],
                ["Wheel Alignment & Tyre Fitting", "/services/wheel-alignment"],
                ["Brakes, Exhausts & Clutches", "/services/brakes-exhausts-clutches"],
                ["Engine Cleaning Services", "/services/cleaning"],
                ["Air Conditioning Service", "/services/air-con"],
                ["Commercial Vehicle Repairs", "/services/commercial-repairs"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="block transition hover:text-[#27AE60]"
                    style={{ color: palette.dim }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10" style={{ borderTop: `1px solid ${palette.border}` }} />

        {/* Bottom note */}
        <div className="pt-6 text-center">
          <p className="text-sm" style={{ color: palette.dim }}>
            © {new Date().getFullYear()} Stoneley&apos;s Garage Services. All rights
            reserved. | Established 1973
          </p>
        </div>
      </div>
    </footer>
  );
}
