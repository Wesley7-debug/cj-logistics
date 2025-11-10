import React from "react";

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-16 py-20 bg-white font-sans">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Comprehensive <br /> Logistics Services
        </h2>
      </div>

      {/* Cards + Navigation */}
      <div className="relative">
        {/* Slider Arrows */}
        <div className="absolute -top-12 right-0 flex gap-2 hidden">
          <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg text-gray-800">
            &#8592;
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-lg text-white">
            &#8594;
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl overflow-hidden shadow-md group">
            <div className="relative">
              <img
                src="/images/home2.jpg"
                alt="Ocean Freight"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-white/80 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                Paris, France
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Ocean Freight
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl overflow-hidden shadow-md group">
            <div className="relative">
              <img
                src="/images/airplane.jpg"
                alt="Air Freight"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-white/80 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                Worldwide
              </div>

              {/* Rating badges */}
              <div className="absolute bottom-3 left-3 flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 1"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User 2"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                  src="/images/airplane.jpg"
                  alt="User 3"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Air Freight
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl overflow-hidden shadow-md group">
            <div className="relative">
              <img
                src="/images/express-car.jpg"
                alt="Land Express"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Land Express
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 text-gray-700 text-base leading-relaxed w-full px-5 md:px-50 md:text-center text-start">
        Our commitment to on-time delivery, real-time tracking, and exceptional
        names in the logistics industry. We ensure that your shipments{" "}
        <span className="text-gray-900 font-medium">
          reach their destination
        </span>{" "}
        safely and on schedule.
      </div>
    </section>
  );
}
