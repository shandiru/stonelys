import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronDown, FaBars } from "react-icons/fa";

export default function GarageNav() {
  const brandGreen = "#458F3B";
  const hoverLite = "rgba(255,255,255,0.85)";
  const [open, setOpen] = useState(false);

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

  return (
    <nav
      className="shadow-lg"
      style={{ backgroundColor: brandGreen, color: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <a href="/" className="flex items-center space-x-2">
            <div className="text-xl font-black tracking-wide">
              STONELEY&apos;S GARAGE
            </div>
          </a>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <button
              type="button"
              className="flex items-center space-x-1 font-medium transition-colors duration-200"
              style={{ color: "#FFFFFF" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverLite)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <span>Services</span>
              <FaChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Right: Phone + Location */}
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

          {/* Mobile Menu Button (Hamburger) */}
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
        style={{
          maxHeight: open ? "260px" : "0px",
          backgroundColor: brandGreen,
        }}
      >
        <div className="px-4 pb-4 flex flex-col space-y-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <button
            className="flex items-center space-x-1 text-left font-medium"
            style={{ color: "#FFFFFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverLite)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <span>Services</span>
            <FaChevronDown className="h-4 w-4" />
          </button>

          {/* Phone + Location (mobile) */}
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
