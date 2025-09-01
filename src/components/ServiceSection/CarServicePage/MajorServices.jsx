import { FaQuoteRight } from "react-icons/fa";

export default function MajorServices() {
  const services = [
    {
      title: "Cambelt Replacement",
      subtitle: "Critical timing belt replacement service",
      description:
        "Essential service to prevent catastrophic engine damage. Our qualified technicians use genuine parts and follow manufacturer specifications.",
    },
    {
      title: "Clutch Repair & Replacement",
      subtitle: "Complete clutch system service",
      description:
        "Professional clutch diagnosis, repair, and replacement. We service manual and automatic transmissions for all vehicle types.",
    },
    {
      title: "Welding Work",
      subtitle: "Professional automotive welding services",
      description:
        "Expert welding repairs for MOT failures, bodywork, and structural components. All work guaranteed and MOT compliant.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Major Service & Repair Work
        </h2>
        <p className="text-lg text-gray-600">
          Specialist services for major components and critical vehicle systems
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm 
                       transition-all duration-300 
                       hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)] hover:ring-2 hover:ring-green-600 hover:ring-offset-2"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{service.subtitle}</p>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <a href="/contact" className="inline-block">
                <button className="flex items-center gap-2 text-sm px-4 py-1.5 border border-gray-300 rounded-md 
                                   hover:bg-green-100 hover:border-green-300 transition-colors duration-200">
                  Get Quote <FaQuoteRight className="text-gray-500" />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
