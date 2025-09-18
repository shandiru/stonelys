"use client";

import React, { useEffect } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-green-50 to-white
        dark:from-neutral-900 dark:to-black
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left" data-aos="fade-right">
            {/* HEADLINE */}
            <div className="space-y-4">
              <h1
                className="
                  text-4xl lg:text-6xl font-black leading-tight
                  text-gray-900 dark:text-neutral-100
                "
              >
                STONELEY&apos;S
                <br />
                <span className="text-green-600">GARAGE SERVICES</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-neutral-300">
                Family-run garage established 1973
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg leading-relaxed text-gray-900 dark:text-neutral-200 max-w-lg">
              Over 50 years of trusted automotive expertise in Mansfield. From
              routine servicing to complex repairs, our qualified technicians
              provide professional, reliable service for all makes and models.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
              <a
                href="tel:+441623623759"
                className="
                  inline-flex items-center justify-center gap-2 text-sm
                  bg-green-600 text-white shadow h-10 rounded-md px-6 font-semibold
                  transition-all duration-300 hover:bg-green-700
                  hover:shadow-[0_6px_20px_rgba(47,125,51,0.45)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
                "
              >
                <FaPhone className="h-4 w-4" />
                Call +441623623759
              </a>

              <a
                href="#services"
                className="
                  inline-flex items-center justify-center gap-2 text-sm
                  border border-gray-300 text-gray-900 bg-transparent
                  dark:border-white/25 dark:text-neutral-100
                  h-10 rounded-md px-6 font-semibold
                  transition-all duration-300
                  hover:bg-gray-100 dark:hover:bg-white/10
                  hover:shadow-[0_6px_20px_rgba(47,125,51,0.35)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                "
              >
                View Our Services
              </a>
            </div>

            {/* LOCATION & ESTABLISHED */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 items-start"
              data-aos="zoom-in"
            >
              {/* Location */}
              <a
                href="https://www.google.com/maps/place/Stoneley's+Garage+Services/data=!4m2!3m1!1s0x0:0x5a644c3262063baf?sa=X&ved=1t:2428&hl=en-GB&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start gap-3 p-2 rounded transition
                  hover:bg-green-50 hover:shadow-[0_4px_15px_rgba(47,125,51,0.25)]
                  dark:hover:bg-white/5
                "
              >
                <FaMapMarkerAlt className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-neutral-100">
                    Location
                  </p>
                  <p className="text-sm text-gray-600 dark:text-neutral-300">
                    Oakham Business Park, Hamilton Way
                  </p>
                </div>
              </a>

              {/* Established */}
              <div className="flex items-start gap-3 p-2">
                <FaClock className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-neutral-100">
                    Established
                  </p>
                  <p className="text-sm text-gray-600 dark:text-neutral-300">
                    Family-run since 1973
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative w-full" data-aos="fade-left">
            <div
              className="
                aspect-video sm:aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-2xl
                transition-all duration-300
                hover:shadow-[0_12px_30px_rgba(47,125,51,0.4)]
                dark:shadow-black/50
              "
            >
              <video
                src="/stoneleysvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="object-cover absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
