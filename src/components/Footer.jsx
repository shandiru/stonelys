import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const palette = {
  bg: "#1E1E1E",          // footer background (near black)
  text: "#F3F3F3",        // main text
  muted: "rgba(243,243,243,0.8)",
  dim: "rgba(243,243,243,0.6)",
  border: "rgba(243,243,243,0.2)",
  primary: "#2F7D33",     // brand green for icons
};

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: palette.bg, color: palette.text }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* top grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand + blurb */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide">
              STONELEY&apos;S GARAGE SERVICES
            </h3>
            <p className="text-sm" style={{ color: palette.muted }}>
              Family-run garage established 1973. Professional automotive services
              for cars, commercial vehicles, and motorhomes.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaPhone className="h-4 w-4" style={{ color: palette.primary }} />
                <span className="text-sm">+44 1623 623759</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-4 w-4" style={{ color: palette.primary }} />
                <span className="text-sm">
                  Oakham Business Park, Hamilton Way, Mansfield NG18 5BU, United Kingdom
                </span>
              </div>
            </div>
          </div>

          {/* Services list */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-1 text-sm" style={{ color: palette.muted }}>
              <li>• MOT Testing &amp; Car Servicing</li>
              <li>• Wheel Alignment &amp; Tyre Fitting</li>
              <li>• Brakes, Exhausts &amp; Clutches</li>
              <li>• Engine Cleaning Services</li>
              <li>• Air Conditioning Service</li>
              <li>• Commercial Vehicle Repairs</li>
            </ul>
          </div>
        </div>

        {/* divider */}
        <div
          className="mt-8"
          style={{ borderTop: `1px solid ${palette.border}` }}
        />

        {/* bottom bar */}
        <div className="pt-8 text-center">
          <p className="text-sm" style={{ color: palette.dim }}>
            © 2024 Stoneley&apos;s Garage Services. All rights reserved. | Established 1973
          </p>
        </div>
      </div>
    </footer>
  );
}
