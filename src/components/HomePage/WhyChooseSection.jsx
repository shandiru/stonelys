// File: WhyChooseSection.jsx
import React from "react";
import { FaClock, FaUsers, FaAward, FaShieldAlt, FaCarSide } from "react-icons/fa";

const colors = {
  black: "#000000",
  darkGrey: "#1C1C1C",
  white: "#FFFFFF",
  neon: "#00FF40",
  softGreen: "#27AE60",
};

export default function WhyChooseSection() {
  return (
    <section
      className="py-16"
      style={{
        background: `linear-gradient(180deg, ${colors.black} 0%, ${colors.darkGrey} 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: colors.white }}>
            Why Choose Stoneley&apos;s Garage?
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.softGreen }}
          >
            As a family-run business established in 1973, we&apos;ve built our reputation
            on honest, professional service and expert automotive knowledge. Our
            qualified technicians treat every vehicle with the care and attention it
            deserves.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Card
            icon={<FaClock className="h-6 w-6" style={{ color: colors.neon }} />}
            title="Established 1973"
            text="Over 50 years serving the Mansfield community"
          />
          <Card
            icon={<FaUsers className="h-6 w-6" style={{ color: colors.neon }} />}
            title="Family Business"
            text="Friendly, personal service you can trust"
          />
          <Card
            icon={<FaAward className="h-6 w-6" style={{ color: colors.neon }} />}
            title="Qualified Technicians"
            text="Certified motor technicians and MOT testers"
          />
          <Card
            icon={<FaShieldAlt className="h-6 w-6" style={{ color: colors.neon }} />}
            title="All Vehicles"
            text="Cars, commercial vehicles, and motorhomes"
          />
          {/* New Courtesy Car card */}
          <Card
            icon={<FaCarSide className="h-6 w-6" style={{ color: colors.neon }} />}
            title="Courtesy Car"
            text="Stay on the road while we look after your vehicle"
          />
        </div>

        {/* Bottom Panel */}
        <div
          className="rounded-lg p-8 text-center shadow-lg"
          style={{ backgroundColor: colors.darkGrey, border: `1px solid ${colors.neon}55` }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: colors.white }}>
            Professional Service You Can Trust
          </h3>
          <p className="leading-relaxed max-w-2xl mx-auto" style={{ color: "#D1D5DB" }}>
            From routine maintenance to complex repairs, our experienced team uses
            the latest diagnostic equipment and genuine parts to keep your vehicle
            running safely and efficiently. We&apos;re proud to serve Mansfield and the
            surrounding areas with honest, reliable automotive services.
          </p>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div
      className="flex flex-col gap-6 rounded-xl py-6 shadow-md text-center transition-all hover:-translate-y-0.5"
      style={{
        backgroundColor: "#111111",
        border: "1px solid #00FF4040", // faint neon border
      }}
    >
      <div className="px-6 pt-6">
        <div
          className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: "#00FF4015", color: "#00FF40" }}
        >
          {icon}
        </div>
        <h3 className="font-bold text-lg mb-2" style={{ color: colors.white }}>
          {title}
        </h3>
        <p className="text-sm" style={{ color: "#BFC6CF" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
