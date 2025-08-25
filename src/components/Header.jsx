// File: GarageNav.jsx
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";

export default function GarageNav() {
  const brandGreen = "#458F3B"; // header bg
  const hoverLite = "rgba(255,255,255,0.85)";
  const [open, setOpen] = useState(false); // mobile menu
  const [svcOpen, setSvcOpen] = useState(false); // desktop services dropdown
  const [svcOpenMobile, setSvcOpenMobile] = useState(false); // mobile services dropdown

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="font-medium transition-colors duration-200"
      style={{ color: "#FFFFFF" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = hoverLite)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
    >
      {children}
    </a>
  );

  const ServiceLinks = ({ itemClass = "block px-4 py-2" }) => (
    <>
      <a href="/services/wheel-alignment" className={itemClass}>
        Wheel Alignment &amp; Tyres
      </a>
      <a href="/services/air-con" className={itemClass}>
        Air Conditioning
      </a>
      <a href="/services/car-service" className={itemClass}>
        Car Service &amp; MOT
      </a>
      <a href="/services/engine-cleaning" className={itemClass}>
        Engine Cleaning
      </a>
    </>
  );

  return (
    <nav className="shadow-lg" style={{ backgroundColor: brandGreen, color: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center space-x-2">
            <div className="text-xl font-black tracking-wide">STONELEY&apos;S GARAGE</div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            {/* Services (click to toggle) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSvcOpen((prev) => !prev)}
                className="flex items-center space-x-1 font-medium transition-colors duration-200"
                style={{ color: "#FFFFFF" }}
                aria-haspopup="menu"
                aria-expanded={svcOpen}
              >
                <span>Services</span>
                <FaChevronDown
                  className={`h-4 w-4 transition-transform ${
                    svcOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {svcOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 rounded-md border shadow-lg z-50"
                  style={{
                    background: "#FFFFFF",
                    color: "#111827",
                    borderColor: "rgba(0,0,0,0.08)",
                  }}
                  role="menu"
                >
                  <ServiceLinks itemClass="block px-4 py-2 hover:bg-gray-50" />
                </div>
              )}
            </div>
          </div>

          {/* Right utilities */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm">
              <FaPhoneAlt className="h-4 w-4" />
              <span>01623 623 759</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>Mansfield NG18 5BU</span>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center h-9 w-9 rounded-md text-white"
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
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: open ? "320px" : "0px", backgroundColor: brandGreen }}
      >
        <div className="px-4 pb-4 flex flex-col space-y-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          {/* Services (mobile expandable) */}
          <button
            className="flex items-center justify-between text-left font-medium pr-2"
            style={{ color: "#FFFFFF" }}
            onClick={() => setSvcOpenMobile((v) => !v)}
            aria-expanded={svcOpenMobile}
          >
            <span>Services</span>
            <FaChevronDown
              className={`h-4 w-4 transition-transform ${
                svcOpenMobile ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className="overflow-hidden transition-[max-height] duration-300 ease-in-out pl-3"
            style={{ maxHeight: svcOpenMobile ? "240px" : "0px" }}
          >
            <div className="flex flex-col py-1">
              <ServiceLinks itemClass="py-1.5" />
            </div>
          </div>

          {/* Phone + Location */}
          <div className="pt-2 border-t border-white/20 flex flex-col gap-2 text-sm">
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="h-4 w-4" />
              <span>01623 623 759</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>Mansfield NG18 5BU</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
