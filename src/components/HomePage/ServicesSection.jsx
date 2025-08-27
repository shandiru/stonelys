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

const colors = {
  black: "#000000",
  darkGrey: "#1C1C1C",
  white: "#FFFFFF",
  neon: "#00FF40",
  softGreen: "#27AE60",
};

const Card = ({ icon, title, desc, bullets = [], href = "#" }) => (
  <div
    className="flex flex-col gap-6 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5"
    style={{
      backgroundColor: colors.darkGrey,
      border: `1px solid ${colors.neon}33`, // 20% neon
    }}
  >
    <div className="grid auto-rows-min items-start gap-1.5 text-center">
      <div
        className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-3 ring-2"
        style={{ color: colors.neon, ringColor: colors.neon + "66" }} // 40% neon ring
      >
        {icon}
      </div>
      <div className="text-lg font-bold" style={{ color: colors.white }}>
        {title}
      </div>
    </div>

    <div className="space-y-4">
      <p className="text-sm leading-relaxed" style={{ color: "#D1D5DB" }}>
        {desc}
      </p>

      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-xs flex items-center" style={{ color: "#BFC6CF" }}>
              <span
                className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: colors.neon }}
              />
              {b}
            </li>
          ))}
        </ul>
      )}

      <a href={href} className="block">
        <button
          className="inline-flex items-center justify-center w-full h-10 rounded-md gap-2 text-sm font-semibold transition-colors"
          style={{
            backgroundColor: "transparent",
            color: colors.white,
            border: `1px solid ${colors.neon}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.neon;
            e.currentTarget.style.color = colors.black;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = colors.white;
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
    <section
      className="py-16"
      style={{
        background: `linear-gradient(180deg, ${colors.black} 0%, ${colors.darkGrey} 60%, ${colors.black} 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: colors.white }}>
            Our Professional Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto mt-4"
            style={{ color: colors.softGreen }}
          >
            Comprehensive automotive services from qualified technicians with
            over 50 years of combined experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Diagnostics – NEW */}
          <Card
            icon={<FaSearch className="h-6 w-6" />}
            title="Vehicle Diagnostics"
            desc="Fault finding & system analysis for quick, accurate fixes using professional equipment."
            bullets={[
              "Engine management & sensors",
              "ABS & airbag systems",
              "Transmission & electrical",
              "Climate control diagnostics",
            ]}
            href="/services/diagnostics"
          />

          <Card
            icon={<FaTachometerAlt className="h-6 w-6" />}
            title="Wheel Alignment & Tyres"
            desc="4-wheel laser alignment, 3D alignment, castor & camber adjustment, tyre fitting and balancing."
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
            desc="Full servicing, MOT testing, brakes, exhausts, cambelts, clutches, welding & more."
            bullets={["Qualified MOT testers", "Complete servicing", "Commercial vehicles"]}
            href="/services/car-service"
          />

          <Card
            icon={<FaBolt className="h-6 w-6" />}
            title="Engine Cleaning"
            desc="Carbon engine cleaning, DPF & EGR cleaning for optimal performance and longevity."
            bullets={["Carbon cleaning", "DPF regeneration", "EGR valve cleaning"]}
            href="/services/cleaning"
          />

          <Card
            icon={<FaCog className="h-6 w-6" />}
            title="Air Conditioning"
            desc="Professional re-gas & servicing to keep your vehicle comfortable year-round."
            bullets={["Re-gas service", "System diagnostics", "Leak detection"]}
            href="/services/air-con"
          />
        </div>
      </div>
    </section>
  );
}
