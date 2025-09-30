import { useState, useEffect } from "react";

export default function GDPRBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected
    const consent = localStorage.getItem("gdprConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false"); // optional
    setVisible(false);
  };

  if (!visible) return null; // Hide if already accepted/rejected

  return (
    <div
      className="fixed bottom-0 left-0 w-full 
      bg-white text-black dark:bg-black dark:text-gray-200
      p-6 text-center shadow-lg border-t border-gray-200 dark:border-gray-800
      z-50 transition-colors"
    >
      <p className="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">
        We use cookies to improve your experience.{" "}
        <a
          href="/privacy-policy"
          className="underline font-semibold text-[#00B140] dark:text-[#27AE60] hover:opacity-80"
        >
          Learn more
        </a>
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {/* Accept Button - Bright Green */}
        <button
          onClick={handleAccept}
          className="px-8 py-3 bg-[#00B140] text-white rounded-md font-semibold 
          hover:bg-[#009432] dark:bg-[#27AE60] dark:hover:bg-[#219150] 
          transition"
        >
          Accept Cookies
        </button>

        {/* Reject Button - Neutral Gray */}
        <button
          onClick={handleReject}
          className="px-8 py-3 bg-gray-200 text-black rounded-md font-semibold 
          hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 
          transition"
        >
          Reject Cookies
        </button>
      </div>
    </div>
  );
}
