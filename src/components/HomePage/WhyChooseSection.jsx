"use client";

import React, { useEffect } from "react";
import { FaClock, FaUsers, FaAward, FaShieldAlt, FaCarSide } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-16 bg-[var(--brand-bgSoft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--brand-text)]">
            Why Choose Stoneley&apos;s Garage?
          </h2>
          <p className="text-lg text-[var(--brand-muted)] max-w-3xl mx-auto leading-relaxed">
            As a family-run business established in 1973, we&apos;ve built our reputation
            on honest, professional service and expert automotive knowledge. Our
            qualified technicians treat every vehicle with the care and attention it
            deserves.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Card
            icon={<FaClock className="h-6 w-6 text-[var(--brand-green)]" />}
            title="Established 1973"
            text="Over 50 years serving the Mansfield community"
          />
          <Card
            icon={<FaUsers className="h-6 w-6 text-[var(--brand-green)]" />}
            title="Family Business"
            text="Friendly, personal service you can trust"
          />
          <Card
            icon={<FaAward className="h-6 w-6 text-[var(--brand-green)]" />}
            title="Qualified Technicians"
            text="Certified motor technicians and MOT testers"
          />
          <Card
            icon={<FaShieldAlt className="h-6 w-6 text-[var(--brand-green)]" />}
            title="All Vehicles"
            text="Cars, commercial vehicles, and motorhomes"
          />
          <Card
            icon={<FaCarSide className="h-6 w-6 text-[var(--brand-green)]" />}
            title="Courtesy Car"
            text="Stay on the road while we look after your vehicle"
          />
        </div>

        {/* Bottom Panel */}
        <div
          className="bg-[var(--card-bg)] rounded-lg p-8 text-center border border-[var(--brand-border)]"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--brand-text)]">
            Professional Service You Can Trust
          </h3>
          <p className="text-[var(--brand-muted)] leading-relaxed max-w-2xl mx-auto">
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
      data-aos="zoom-in"
      className="
        flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center
        border-[var(--brand-border)] bg-[var(--card-bg)] transition-all duration-300
        hover:shadow-[var(--shadow-green)] hover:ring-2 hover:ring-[var(--brand-green)]
        hover:ring-offset-2 hover:ring-offset-[var(--brand-bgSoft)]
      "
    >
      <div className="px-6 pt-6">
        <div className="mx-auto w-12 h-12 bg-[var(--brand-greenSoft)] rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-bold text-lg mb-2 text-[var(--brand-text)]">{title}</h3>
        <p className="text-sm text-[var(--brand-muted)]">{text}</p>
      </div>
    </div>
  );
}
