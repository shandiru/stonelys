"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FindUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const directionsUrl =
    "https://www.google.com/maps/dir/53.1691559,-1.2471979/Oakham+Business+Park,+Hamilton+Way,+Mansfield+NG18+5BU,+United+Kingdom/@53.1318888,-1.2938898,16720m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x48799602343e5541:0x5a644c3262063baf!2m2!1d-1.2114897!2d53.1319172?hl=en-GB&entry=ttu";

  return (
    <section
      className="py-10 px-4 bg-[var(--brand-bgSoft)] transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-[var(--brand-text)]"
          data-aos="fade-down"
        >
          Find Us
        </h2>

        {/* Google Maps Embed */}
        <div
          className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]"
          data-aos="zoom-in"
        >
          <iframe
            title="Google Map - Oakham Business Park"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47448.25722777067!2d-1.259!3d53.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48799602343e5541%3A0x5a644c3262063baf!2sOakham%20Business%20Park!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Address */}
        <p
          className="mt-6 text-lg font-medium text-[var(--brand-muted)]"
          data-aos="fade-up"
        >
          Stoneley's Garage Services,<br />
          Oakham Business Park, Hamilton Way,<br />
          Mansfield NG18 5BU, United Kingdom
        </p>

        {/* Directions Button */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="100">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Maps directions to Oakham Business Park, Hamilton Way, Mansfield"
            className="inline-flex items-center gap-2 rounded-md bg-black text-white px-5 py-3 text-sm md:text-base font-semibold 
                       hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black 
                       dark:bg-white dark:text-black dark:hover:opacity-90 dark:focus:ring-white"
          >
            Open Directions in Google Maps
            <svg
              className="h-4 w-4 md:h-5 md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h6m0 0v6m0-6L10 16"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
