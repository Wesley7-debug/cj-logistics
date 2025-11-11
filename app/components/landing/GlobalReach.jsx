"use client";
import { useState } from "react";
import Link from "next/link";
const GlobalReachSection = () => {
  const [shipmentId, setshipmentId] = useState("");
  return (
    <section className="bg-white px-8 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text and Cards */}
        <div>
          <p className="text-gray-500 mb-2 text-sm tracking-wide">
            Popular Destinations
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Global Reach. <br /> Unmatched Reliability.
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg">
            Our expansive network and tech-driven logistics ensure your
            shipments arrive on time — every time.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FFECE5] p-6 rounded-xl shadow-sm">
              <div className="mb-3">
                <span className="inline-block text-2xl">🌐</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                With a vast logistics network spanning over 150 countries, we
                offer truly global coverage. From transport corridors to remote
                regions, our operations ensure seamless shipping.
              </p>
              <div className="flex gap-2">
                <span className="bg-white text-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300">
                  Quality
                </span>
                <span className="bg-white text-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300">
                  Benefits
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E7F1FF] p-6 rounded-xl shadow-sm">
              <div className="mb-3">
                <span className="inline-block text-2xl">⏱️</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Reliability is the core of our promise. With an impressive 99.9%
                on-time delivery rate, we ensure that your shipment arrives
                exactly when expected.
              </p>
              <div className="flex gap-2">
                <span className="bg-white text-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300">
                  Quantity
                </span>
                <span className="bg-white text-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300">
                  Satisfied
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image and Form */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1505839673365-e3971f8d9184?auto=format&fit=crop&w=800&q=80"
            alt="Global Shipping"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Global Shipping
            </h3>
            <form className="space-y-3">
              <input
                value={shipmentId}
                onChange={(e) => setshipmentId(e.target.value)}
                type="text"
                placeholder="Package details"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-md hover:bg-gray-800 transition"
              >
                <Link href={`/Track/${shipmentId}`}>Track Shipment </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
