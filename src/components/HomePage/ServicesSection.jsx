import React from "react";
import {
  FaTachometerAlt,
  FaCarSide,
  FaBolt,
  FaCog,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

const Card = ({ icon, title, desc, bullets = [], href = "#" }) => (
  <div
    className="
      group flex flex-col h-full rounded-2xl border
      border-[var(--brand-border)]
      bg-[var(--card-bg)]
      text-[var(--brand-text)]
      shadow-sm transition-all duration-300
      hover:shadow-lg hover:border-[var(--brand-green)]
      hover:ring-2 hover:ring-[var(--brand-green)]
      hover:ring-offset-2 hover:ring-offset-[var(--brand-bgSoft)]
      hover:shadow-[var(--shadow-green)]
    "
  >
    {/* Header */}
    <div className="px-6 pt-6 text-center">
      <div
        className="
          mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-4
          bg-[var(--brand-greenSoft)] text-[var(--brand-green)]
        "
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2">{title}</div>
    </div>

    {/* Body */}
    <div className="px-6 flex-grow space-y-4">
      <p className="text-sm leading-relaxed text-[var(--brand-muted)]">
        {desc}
      </p>

      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-xs flex items-center text-[var(--brand-muted)]">
              <span className="w-1 h-1 rounded-full mr-2 flex-shrink-0 bg-[var(--brand-green)]" />
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
          className="
            inline-flex items-center justify-center w-full h-10 rounded-md gap-2 text-sm font-medium
            border border-[var(--brand-border)]
            bg-transparent text-[var(--brand-text)]
            transition-all duration-300
            hover:bg-[var(--brand-green)] hover:text-white hover:border-[var(--brand-green)]
            hover:shadow-[var(--hover-shadow)]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-green)]
            focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-bgSoft)]
          "
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
    <section className="py-16 bg-[var(--brand-bgSoft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--brand-text)]">
            Our Professional Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4 text-[var(--brand-muted)]">
            Comprehensive automotive services from qualified technicians with
            over 50 years of combined experience
          </p>
        </div>

        {/* Grid */}
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
