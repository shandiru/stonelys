import React from "react";
import { FaClock, FaUsers, FaAward, FaShieldAlt, FaCarSide } from "react-icons/fa";

export default function WhyChooseSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Stoneley&apos;s Garage?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a family-run business established in 1973, we&apos;ve built our reputation
            on honest, professional service and expert automotive knowledge. Our
            qualified technicians treat every vehicle with the care and attention it
            deserves.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Card
            icon={<FaClock className="h-6 w-6 text-green-700" />}
            title="Established 1973"
            text="Over 50 years serving the Mansfield community"
          />
          <Card
            icon={<FaUsers className="h-6 w-6 text-green-700" />}
            title="Family Business"
            text="Friendly, personal service you can trust"
          />
          <Card
            icon={<FaAward className="h-6 w-6 text-green-700" />}
            title="Qualified Technicians"
            text="Certified motor technicians and MOT testers"
          />
          <Card
            icon={<FaShieldAlt className="h-6 w-6 text-green-700" />}
            title="All Vehicles"
            text="Cars, commercial vehicles, and motorhomes"
          />
          {/* New Courtesy Car card */}
          <Card
            icon={<FaCarSide className="h-6 w-6 text-green-700" />}
            title="Courtesy Car"
            text="Stay on the road while we look after your vehicle"
          />
        </div>

        {/* Bottom Panel */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Professional Service You Can Trust
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From routine maintenance to complex repairs, our experienced team uses
            the latest diagnostic equipment and genuine parts to keep your vehicle
            running safely and efficiently. We&apos;re proud to serve Mansfield and the
            surrounding areas with honest, reliable automotive services.
          </p>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="bg-white flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center border-gray-200">
      <div className="px-6 pt-6">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
