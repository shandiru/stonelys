// File: ContactSection.jsx
import React from "react";
import {
  FaCommentDots,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCarSide,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const palette = {
  primary: "#2F7D33",     // brand green
  badge: "#E7F3E9",       // soft green for icon chips
  text: "#111827",        // headings
  muted: "#4B5563",       // body copy
  sectionBg: "#F3F6F4",   // page light bg (muted/30 feel)
  cardBg: "#FFFFFF",      // cards
  border: "#E6EAE7",      // subtle borders
};

export default function ContactSection() {
  return (
    <section className="py-16" style={{ backgroundColor: palette.sectionBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM CARD */}
          <div
            className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
            style={{ backgroundColor: palette.cardBg, borderColor: palette.border }}
          >
            <div className="px-6">
              <div className="text-2xl font-bold flex items-center" style={{ color: palette.text }}>
                <FaCommentDots className="mr-2 h-5 w-5" style={{ color: palette.primary }} />
                Send Us a Message
              </div>
              <p className="text-sm mt-1" style={{ color: palette.muted }}>
                Get in touch for quotes, bookings, or any questions about our services
              </p>
            </div>

            <div className="px-6 space-y-6">
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <FormInput
                  id="name"
                  label="Full Name *"
                  placeholder="Your full name"
                  icon={<FaUser className="h-4 w-4" />}
                />
                <FormInput
                  id="phone"
                  label="Phone Number *"
                  placeholder="Your phone number"
                  icon={<FaPhone className="h-4 w-4" />}
                />
              </div>

              {/* Email */}
              <FormInput
                id="email"
                type="email"
                label="Email Address"
                placeholder="your.email@example.com"
                icon={<FaEnvelope className="h-4 w-4" />}
              />

              {/* Vehicle */}
              <FormInput
                id="vehicle"
                label="Vehicle Details"
                placeholder="Make, model, year (e.g., Ford Focus 2018)"
                icon={<FaCarSide className="h-4 w-4" />}
              />

              {/* Service select */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 rounded-md border bg-white"
                  style={{ borderColor: palette.border, color: palette.text }}
                  defaultValue=""
                >
                  <option value="">Select a service</option>
                  <option value="mot">MOT Test</option>
                  <option value="service">Car Service</option>
                  <option value="alignment">Wheel Alignment</option>
                  <option value="tyres">Tyre Fitting</option>
                  <option value="brakes">Brake Service</option>
                  <option value="exhaust">Exhaust Repair</option>
                  <option value="aircon">Air Conditioning</option>
                  <option value="cleaning">Engine Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Please describe your requirements or any specific issues with your vehicle..."
                  className="w-full rounded-md border px-3 py-2"
                  style={{ borderColor: palette.border, color: palette.text }}
                />
              </div>

              {/* Submit */}
              <button
                className="inline-flex items-center justify-center gap-2 h-9 w-full rounded-md font-semibold shadow-xs transition-colors"
                style={{ backgroundColor: palette.primary, color: "#FFFFFF" }}
              >
                <FaCommentDots className="h-4 w-4" />
                Send Message
              </button>

              <p className="text-xs" style={{ color: palette.muted }}>
                * Required fields. We&apos;ll get back to you within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN CARDS */}
          <div className="space-y-8">
            {/* Opening Hours */}
            <SideCard title="Opening Hours" icon={<FaClock className="h-5 w-5" />}>
              <HoursRow day="Monday" time="8:00 AM - 5:30 PM" />
              <HoursRow day="Tuesday" time="8:00 AM - 5:30 PM" />
              <HoursRow day="Wednesday" time="8:00 AM - 5:30 PM" />
              <HoursRow day="Thursday" time="8:00 AM - 5:30 PM" />
              <HoursRow day="Friday" time="8:00 AM - 5:30 PM" />
              <HoursRow day="Saturday" time="8:00 AM - 4:00 PM" />
              <HoursRow day="Sunday" time="Closed" muted />
            </SideCard>

            {/* Find Us */}
            <SideCard title="Find Us" icon={<FaMapMarkerAlt className="h-5 w-5" />}>
              <div className="space-y-1 mb-4">
                <p className="font-semibold">Stoneley&apos;s Garage Services</p>
                <p className="text-sm" style={{ color: palette.muted }}>
                  Hamilton Way
                </p>
                <p className="text-sm" style={{ color: palette.muted }}>
                  Mansfield NG18 5BU
                </p>
                <p className="text-sm" style={{ color: palette.muted }}>
                  United Kingdom
                </p>
              </div>

              <div
                className="rounded-lg p-4 text-center"
                style={{ backgroundColor: "#EDF2EE" }}
              >
                <FaMapMarkerAlt
                  className="mx-auto mb-2 h-8 w-8"
                  style={{ color: palette.primary }}
                />
                <p className="text-sm" style={{ color: palette.muted }}>
                  Interactive map coming soon
                </p>
              </div>

              <button
                className="mt-4 h-9 w-full rounded-md border px-4 py-2 text-sm font-medium"
                style={{ borderColor: palette.border, color: palette.text, background: "transparent" }}
              >
                <FaMapMarkerAlt className="mr-2 inline h-4 w-4" />
                Get Directions
              </button>
            </SideCard>

            {/* About */}
            <SideCard title="About Stoneley&apos;s Garage">
              <p className="text-sm leading-relaxed" style={{ color: palette.muted }}>
                Family-run garage established in 1973, serving Mansfield and surrounding
                areas for over 50 years. Our qualified technicians and MOT testers provide
                professional, reliable service for all makes and models of cars, commercial
                vehicles, and motorhomes.
              </p>
            </SideCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small pieces ---------- */

function FormInput({ id, label, placeholder, icon, type = "text" }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <span
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: "#6B7280" }}
        >
          {icon}
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="h-9 w-full rounded-md border bg-white px-3 pl-10"
          style={{ borderColor: palette.border, color: palette.text }}
        />
      </div>
    </div>
  );
}

function SideCard({ title, icon, children }) {
  return (
    <div
      className="rounded-xl border py-6 shadow-sm"
      style={{ backgroundColor: palette.cardBg, borderColor: palette.border }}
    >
      <div className="px-6 mb-2">
        <div className="text-xl font-bold flex items-center" style={{ color: palette.text }}>
          {icon && <span className="mr-2" style={{ color: palette.primary }}>{icon}</span>}
          {title}
        </div>
      </div>
      <div className="px-6">{children}</div>
    </div>
  );
}

function HoursRow({ day, time, muted }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="font-medium">{day}</span>
      <span
        className="text-sm"
        style={{ color: muted ? "#6B7280" : palette.text }}
      >
        {time}
      </span>
    </div>
  );
}
