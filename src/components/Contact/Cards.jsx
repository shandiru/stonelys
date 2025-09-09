import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function InfoCard({ icon, title, subtitle, body, cta }) {
  return (
    <div
      className="flex flex-col gap-6 rounded-xl border py-6 text-center 
                 transition-all duration-300 
                 bg-[#F7F7F7] dark:bg-neutral-900 
                 border-[#E6EAE7] dark:border-neutral-700 
                 hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)] 
                 hover:ring-2 hover:ring-green-600 hover:ring-offset-2"
    >
      <div className="px-6">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg 
                     bg-[#E7F3E9] dark:bg-green-950 
                     text-[#2F7D33] dark:text-green-400"
        >
          {icon}
        </div>
        <div className="text-xl font-bold text-[#111827] dark:text-white">
          {title}
        </div>
        {subtitle && (
          <div className="text-sm text-[#4B5563] dark:text-gray-400">{subtitle}</div>
        )}
      </div>

      <div className="px-6 space-y-4">
        {body && (
          <p className="text-sm whitespace-pre-line text-[#111827] dark:text-gray-200">
            {body}
          </p>
        )}
        {cta}
      </div>
    </div>
  );
}

export default function ContactCards() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {/* Call Us */}
          <InfoCard
            icon={<FaPhone className="h-6 w-6" />}
            title="Call Us"
            subtitle="Speak directly with our team"
            body="+44 1623 623759"
            cta={
              <a href="tel:+441623623759">
                <button
                  className="h-9 rounded-md border px-3 text-sm font-medium 
                             transition-all duration-300 
                             border-[#E6EAE7] dark:border-neutral-700 
                             text-[#111827] dark:text-white 
                             bg-transparent 
                             hover:border-green-600 hover:text-green-700 dark:hover:text-green-400 
                             hover:shadow-[0_6px_18px_rgba(47,125,51,0.35)]"
                >
                  Call Now
                </button>
              </a>
            }
          />

          {/* Visit Us */}
          <InfoCard
            icon={<FaMapMarkerAlt className="h-6 w-6" />}
            title="Visit Us"
            subtitle="Find us in Mansfield"
            body={`Stoneley's Garage\nHamilton Way\nMansfield NG18 5BU`}
            cta={
              <a
                href="https://www.google.com/maps/place/Stoneley's+Garage+Services/data=!4m2!3m1!1s0x0:0x5a644c3262063baf?sa=X&ved=1t:2428&hl=en-GB&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="h-9 rounded-md border px-3 text-sm font-medium 
                             transition-all duration-300 
                             border-[#E6EAE7] dark:border-neutral-700 
                             text-[#111827] dark:text-white 
                             bg-transparent 
                             hover:border-green-600 hover:text-green-700 dark:hover:text-green-400 
                             hover:shadow-[0_6px_18px_rgba(47,125,51,0.35)]"
                >
                  Get Directions
                </button>
              </a>
            }
          />

          {/* Opening Hours */}
          <InfoCard
            icon={<FaClock className="h-6 w-6" />}
            title="Opening Hours"
            subtitle="We're here when you need us"
            body={`Mon–Fri: 8:00 AM – 5:30 PM\nSat: 8:00 AM – 4:00 PM\nSun: Closed`}
            cta={
              <span className="text-sm text-[#4B5563] dark:text-gray-400">
                No appointment needed
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}
