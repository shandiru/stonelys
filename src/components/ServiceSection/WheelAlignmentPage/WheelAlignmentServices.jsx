"use client";
import React from "react";
import {
  FaBullseye,
  FaTachometerAlt,
  FaWrench,
  FaCar,
  FaRegCheckCircle,
} from "react-icons/fa";

export default function WheelAlignmentServices() {
  const services = [
    {
      title: "4-Wheel Laser Alignment",
      desc: "Precision laser technology ensures accurate wheel positioning for optimal vehicle performance",
      icon: <FaBullseye className="h-5 w-5 text-[var(--aircon-icon)]" />,
      points: [
        "Laser precision measurement",
        "All four wheels aligned",
        "Computer-guided accuracy",
        "Detailed printout provided",
      ],
    },
    {
      title: "3D Wheel Alignment",
      desc: "Advanced 3D imaging technology for comprehensive wheel geometry analysis",
      icon: <FaTachometerAlt className="h-5 w-5 text-[var(--aircon-icon)]" />,
      points: [
        "3D imaging technology",
        "Real-time measurements",
        "Comprehensive analysis",
        "Before/after comparison",
      ],
    },
    {
      title: "Castor & Camber Adjustment",
      desc: "Professional adjustment of wheel angles for improved handling and tyre wear",
      icon: <FaWrench className="h-5 w-5 text-[var(--aircon-icon)]" />,
      points: [
        "Castor angle correction",
        "Camber adjustment",
        "Toe alignment",
        "Steering wheel centering",
      ],
    },
    {
      title: "Full Geometry Alignment",
      desc: "Complete 4-wheel geometry alignment service for all vehicle types",
      icon: <FaCar className="h-5 w-5 text-[var(--aircon-icon)]" />,
      points: [
        "Complete geometry check",
        "All angles adjusted",
        "Commercial vehicles",
        "Motorhome alignment",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[var(--aircon-heading)] mb-4">
            Professional Wheel Alignment Services
          </h2>
          <p className="text-lg text-[var(--aircon-muted)] font-body max-w-2xl mx-auto">
            Advanced alignment technology for precise wheel positioning and
            optimal vehicle performance
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-6 rounded-xl py-6 shadow-sm
                bg-[var(--aircon-card-bg)] border border-[var(--aircon-card-border)]
                hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
                hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
                transition-all duration-300
              "
            >
              <div className="grid auto-rows-min items-start gap-1.5 px-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
                    {s.icon}
                  </div>
                  <div className="text-xl font-heading font-bold text-[var(--aircon-heading)]">
                    {s.title}
                  </div>
                </div>
                <div className="text-[var(--aircon-muted)] font-body text-base">
                  {s.desc}
                </div>
              </div>

              <div className="px-6">
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-center text-sm font-body text-[var(--aircon-heading)]/80 dark:text-[var(--aircon-muted)]">
                      <FaRegCheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-[var(--aircon-check-icon)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
