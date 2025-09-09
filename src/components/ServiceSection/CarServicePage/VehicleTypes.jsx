import { FaCarSide, FaTools, FaShieldAlt } from "react-icons/fa";

const vehicleCards = [
  {
    icon: <FaCarSide className="text-green-600 dark:text-[var(--auto-icon)] text-2xl" />,
    title: "Cars & Light Vehicles",
    description:
      "All makes and models of cars and light commercial vehicles",
  },
  {
    icon: <FaTools className="text-green-600 dark:text-[var(--auto-icon)] text-2xl" />,
    title: "Commercial Vehicles",
    description: "Vans, trucks, and commercial fleet maintenance",
  },
  {
    icon: <FaShieldAlt className="text-green-600 dark:text-[var(--auto-icon)] text-2xl" />,
    title: "Motorhomes",
    description: "Specialist motorhome and campervan services",
  },
];

export default function VehicleTypes() {
  return (
    <section className="py-16 bg-white dark:bg-[var(--auto-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black dark:text-[var(--auto-heading)] mb-4">
            All Vehicle Types Welcome
          </h2>
          <p className="text-lg text-gray-600 dark:text-[var(--auto-muted)] max-w-2xl mx-auto">
            Professional service for cars, commercial vehicles, and motorhomes
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {vehicleCards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-[var(--auto-card-bg)] 
                         text-black dark:text-[var(--auto-heading)] 
                         flex flex-col gap-4 rounded-xl 
                         border border-gray-200 dark:border-[var(--auto-card-border)] 
                         py-8 px-6 shadow-sm text-center 
                         transition-all duration-300 
                         hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)] 
                         hover:ring-2 hover:ring-green-600 hover:ring-offset-2 
                         dark:hover:ring-[var(--auto-icon)]"
            >
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-[var(--auto-icon-bg)] rounded-lg flex items-center justify-center mb-2">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-[var(--auto-muted)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
