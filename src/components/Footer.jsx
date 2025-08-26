import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const palette = {
  bg: "#1E1E1E",
  text: "#F3F3F3",
  muted: "rgba(243,243,243,0.8)",
  dim: "rgba(243,243,243,0.6)",
  border: "rgba(243,243,243,0.2)",
  primary: "#2F7D33",
};

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: palette.bg, color: palette.text }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-wide">STONELEY&apos;S GARAGE SERVICES</h3>
            <p className="text-sm" style={{ color: palette.muted }}>
              Family-run garage established 1973. Professional automotive services for cars, commercial vehicles,
              and motorhomes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-2">
              <a href="tel:+441623623759" className="flex items-center gap-2 text-sm hover:underline">
                <FaPhone className="h-4 w-4" style={{ color: palette.primary }} />
                +44 1623 623759
              </a>
              <a
                href="https://www.google.com/maps/place/Stoneley's+Garage+Services/data=!4m2!3m1!1s0x0:0x5a644c3262063baf?sa=X&ved=1t:2428&hl=en-GB&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FaMapMarkerAlt className="h-4 w-4" style={{ color: palette.primary }} />
                Stoneley's Garage, Hamilton Way, Mansfield NG18 5BU, UK
              </a>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-1 text-sm" style={{ color: palette.muted }}>
              <li>
                <a href="/services/car-service" className="hover:underline block">
                  MOT Testing &amp; Car Servicing
                </a>
              </li>
              <li>
                <a href="/services/wheel-alignment" className="hover:underline block">
                  Wheel Alignment &amp; Tyre Fitting
                </a>
              </li>
              <li>
                <a href="/services/brakes-exhausts-clutches" className="hover:underline block">
                  Brakes, Exhausts &amp; Clutches
                </a>
              </li>
              <li>
                <a href="/services/cleaning" className="hover:underline block">
                  Engine Cleaning Services
                </a>
              </li>
              <li>
                <a href="/services/air-con" className="hover:underline block">
                  Air Conditioning Service
                </a>
              </li>
              <li>
                <a href="/services/commercial-repairs" className="hover:underline block">
                  Commercial Vehicle Repairs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8" style={{ borderTop: `1px solid ${palette.border}` }} />

        <div className="pt-8 text-center">
          <p className="text-sm" style={{ color: palette.dim }}>
            © 2024 Stoneley&apos;s Garage Services. All rights reserved. | Established 1973
          </p>
        </div>
      </div>
    </footer>
  );
}
