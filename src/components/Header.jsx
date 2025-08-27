// File: GarageNav.jsx
import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronDown, FaBars } from "react-icons/fa";

export default function GarageNav() {
  const brandGreen = "#458F3B";
  const hoverLite = "rgba(255,255,255,0.88)";
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [svcOpenMobile, setSvcOpenMobile] = useState(false);

  const phoneNumber = "+441623623759";
  const phoneDisplay = "+44 1623 623759";
  const mapAddress =
    "https://www.google.com/maps/place/Stoneley's+Garage+Services/data=!4m2!3m1!1s0x0:0x5a644c3262063baf?sa=X&ved=1t:2428&hl=en-GB&ictx=111";

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="font-medium tracking-wide transition-colors duration-200 px-1 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
      style={{ color: "#FFFFFF" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = hoverLite)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
    >
      {children}
    </a>
  );

  // ✅ Added Diagnostics + hover style improved
  const ServiceLinks = ({ itemClass = "block px-3 py-2 text-sm" }) => (
    <>
      <a href="/services/wheel-alignment" className={`${itemClass} hover:bg-white/15`}>
        Wheel Alignment &amp; Tyres
      </a>
      <a href="/services/air-con" className={`${itemClass} hover:bg-white/15`}>
        Air Conditioning
      </a>
      <a href="/services/car-service" className={`${itemClass} hover:bg-white/15`}>
        Car Service &amp; MOT
      </a>
      <a href="/services/cleaning" className={`${itemClass} hover:bg-white/15`}>
        Engine Cleaning
      </a>
      <a href="/services/diagnostics" className={`${itemClass} hover:bg-white/15`}>
        Diagnostics
      </a>
    </>
  );

  return (
    <nav
      className="sticky top-0 z-50 shadow-md"
      style={{ background: `linear-gradient(0deg, ${brandGreen}, ${brandGreen})`, color: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bar */}
        <div className="relative flex h-16 md:h-20 items-center">
          {/* Left: Brand */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Stoneley's Garage Logo"
              className="h-12 md:h-16 w-auto object-contain rounded-md bg-black/70 p-1.5 shadow-sm"
            />
          </a>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            {/* Services dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSvcOpen((prev) => !prev)}
                className="flex items-center gap-1 font-medium px-1 py-2 rounded outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                style={{ color: "#FFFFFF" }}
                aria-haspopup="menu"
                aria-expanded={svcOpen}
              >
                <span>Services</span>
                <FaChevronDown className={`h-4 w-4 transition-transform duration-200 ${svcOpen ? "rotate-180" : ""}`} />
              </button>

              {svcOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md border border-white/20 shadow-xl overflow-hidden z-50"
                  style={{ backgroundColor: brandGreen, color: "#FFFFFF" }} // ✅ Green background
                  role="menu"
                >
                  <div className="py-2">
                    <ServiceLinks />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: utilities (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-sm/none bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              title="Call us"
            >
              <FaPhoneAlt className="h-4 w-4" />
              <span className="whitespace-nowrap">{phoneDisplay}</span>
            </a>
            <a
              href={mapAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm/none bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              title="Open location"
            >
              <FaMapMarkerAlt className="h-4 w-4" />
              <span className="whitespace-nowrap">Stoneley&apos;s Garage, NG18 5BU</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden ml-auto">
            <button
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white/95 hover:bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-white/10"
        style={{ maxHeight: open ? "360px" : "0px", backgroundColor: brandGreen }}
      >
        <div className="px-4 py-3 flex flex-col gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          {/* Services (Mobile) */}
          <button
            className="flex items-center justify-between text-left font-medium pr-1 py-2 rounded outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            style={{ color: "#FFFFFF" }}
            onClick={() => setSvcOpenMobile((v) => !v)}
            aria-expanded={svcOpenMobile}
          >
            <span>Services</span>
            <FaChevronDown className={`h-4 w-4 transition-transform ${svcOpenMobile ? "rotate-180" : ""}`} />
          </button>
          <div
            className="overflow-hidden transition-[max-height] duration-300 ease-in-out pl-2"
            style={{ maxHeight: svcOpenMobile ? "300px" : "0px" }}
          >
            <div className="flex flex-col py-1 text-white/95">
              <ServiceLinks itemClass="py-2 text-sm" />
            </div>
          </div>

          {/* Phone + Location */}
          <div className="mt-2 pt-3 border-t border-white/15 grid gap-2 text-sm">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 bg-white/10 hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
              <FaPhoneAlt className="h-4 w-4" />
              <span>{phoneDisplay}</span>
            </a>
            <a
              href={mapAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 px-3 py-2 rounded-md transition-colors"
            >
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>Stoneley&apos;s Garage, NG18 5BU</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
