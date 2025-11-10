import React from "react";

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          {/* Section Label */}
          <p className="text-sm font-semibold text-red-600 mb-2">
            How It Works
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            How We Move Your Goods, <br /> Step by Step
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
            Browse our fleet and select the perfect vehicle for your needs.
            Reserve instantly with flexible dates and payment options.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div>
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg mb-4">
                ⬤
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Get real-time company analysis, clear and trustworthy pricing,
                and an alternative to hidden costs. Lower your operational risks
                and stress.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg mb-4">
                ↩
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Delivery Guarantee
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Customize your logistics by mileage, date, or amount, and gain
                certainty knowing your shipments will arrive as expected and
                your finances flow faster.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
              JOIN OUR TEAM
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1625045198793-4b2b0fcecc3f?auto=format&fit=crop&w=1000&q=80"
              alt="Workers discussing logistics"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
