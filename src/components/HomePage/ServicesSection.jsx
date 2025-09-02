// File: ServicesSection.jsx
import React from "react";
import {
  FaTachometerAlt,
  FaCarSide,
  FaBolt,
  FaCog,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

const brand = {
  green: "#2F7D33",      // primary green
  greenSoft: "#E7F3E9",  // soft badge background
  bgSoft: "#F3F8F4",     // section background
  text: "#111827",       // heading
  muted: "#4B5563",      // body
  border: "#E6EAE7",     // subtle border
};

const Card = ({ icon, title, desc, bullets = [], href = "#" }) => (
  <div
    className="group flex flex-col h-full rounded-2xl border shadow-sm transition-all duration-300
               hover:shadow-lg hover:border-green-600
               hover:ring-2 hover:ring-[#2F7D33] hover:ring-offset-2 hover:ring-offset-[#F3F8F4]
               hover:shadow-[0_8px_24px_rgba(47,125,51,0.25)]"
    style={{ borderColor: brand.border, backgroundColor: "#FFFFFF", color: brand.text }}
  >
    {/* Header */}
    <div className="px-6 pt-6 text-center">
      <div
        className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: brand.greenSoft, color: brand.green }}
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2">{title}</div>
    </div>

    {/* Body */}
    <div className="px-6 flex-grow space-y-4">
      <p className="text-sm leading-relaxed" style={{ color: brand.muted }}>
        {desc}
      </p>

      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-xs flex items-center" style={{ color: brand.muted }}>
              <span
                className="w-1 h-1 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: brand.green }}
              />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Footer with button */}
    <div className="px-6 pt-6 pb-6 mt-auto">
      <a href={href}>
        <button
          className="inline-flex items-center justify-center w-full h-10 rounded-md gap-2 text-sm font-medium border
                     transition-all duration-300
                     hover:bg-[#2F7D33] hover:text-white hover:border-[#2F7D33]
                     hover:shadow-[0_6px_18px_rgba(47,125,51,0.35)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D33] focus-visible:ring-offset-2"
          style={{
            borderColor: brand.border,
            backgroundColor: "transparent",
            color: brand.text,
          }}
        >
          Learn More
          <FaArrowRight className="h-4 w-4" />
        </button>
      </a>
    </div>
  </div>
);

export default function ServicesSection() {
  return (
    <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: brand.text }}>
            Our Professional Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4" style={{ color: brand.muted }}>
            Comprehensive automotive services from qualified technicians with
            over 50 years of combined experience
          </p>
        </div>

        {/* Grid - ✅ now 3 per row on desktop */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <Card
            icon={<FaSearch className="h-6 w-6" />}
            title="Vehicle Diagnostics & ECU Remapping"
            desc="Fault finding, system analysis, and performance tuning for quick, accurate fixes and improved efficiency using professional equipment."
            bullets={[
              "Engine Management",
              "Performance Tune",
              "Transmission & electrical",
              "Stage 1 Remap",
            ]}
            href="/services/diagnostics"
          />

          <Card
            icon={<FaTachometerAlt className="h-6 w-6" />}
            title="Wheel Alignment & Tyres"
            desc="4-wheel laser alignment, 3D wheel alignment, castor & camber adjustment, tyre fitting and balancing"
            bullets={[
              "Laser precision alignment",
              "Professional tyre fitting",
              "Wheel balancing service",
            ]}
            href="/services/wheel-alignment"
          />

          <Card
            icon={<FaCarSide className="h-6 w-6" />}
            title="Car Service & MOT"
            desc="Full car servicing, MOT testing, brakes, exhausts, cambelts, clutches, and welding work"
            bullets={["Qualified MOT testers", "Complete servicing", "Commercial vehicles"]}
            href="/services/car-service"
          />

          <Card
            icon={<FaBolt className="h-6 w-6" />}
            title="Engine Cleaning"
            desc="Carbon engine cleaning, DPF cleaning, EGR cleaning for optimal engine performance"
            bullets={["Carbon cleaning", "DPF regeneration", "EGR valve cleaning"]}
            href="/services/cleaning"
          />

          <Card
            icon={<FaCog className="h-6 w-6" />}
            title="Air Conditioning"
            desc="Professional air-con re-gas and service to keep your vehicle comfortable year-round"
            bullets={["Re-gas service", "System diagnostics", "Leak detection"]}
            href="/services/air-con"
          />
        </div>
      </div>
    </section>
  );
}
