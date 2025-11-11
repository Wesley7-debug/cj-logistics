import React from "react";

const testimonials = [
  {
    text: "CJ Logistics has transformed the way we handle our supply chain. Their precision and commitment to excellence make them an invaluable partner.",
    company: "LogiTrade Solutions",
    bg: "bg-blue-100",
  },
  {
    text: "Working with CJ Logistics has been seamless  their team is responsive, professional, and consistently delivers on time. It feels like they’re an extension of our own operations team.",
    company: "Emma R., Operations Manager at Nexa Retail",
    bg: "bg-orange-100",
  },
  {
    text: "Our shipping efficiency improved by 60% after partnering with CJ Logistics. They truly understand logistics innovation.",
    company: "TransEdge Manufacturing",
    bg: "bg-purple-100",
  },
  {
    text: "CJ Logistics stands out not just for their technology, but for their people. Their dedication to reliability and service quality is unmatched.",
    company: "James K., Supply Chain Director",
    bg: "bg-green-100",
  },
  {
    text: "They’ve helped us streamline deliveries across multiple regions  ensuring every order arrives exactly when it should. A true partner in growth.",
    company: "Ajinkya Y., Distribution Analyst",
    bg: "bg-yellow-100",
  },
  {
    text: "With CJ Logistics, our average delivery time dropped from 48 hours to just 18 hours. That kind of efficiency is a game-changer.",
    company: "Customer Case Study",
    bg: "bg-pink-100",
  },
];

const LovedByCustomers = () => {
  return (
    <section className="bg-white text-black py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Loved by our customers</h2>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-6">
          {testimonials.concat(testimonials).map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 p-6 rounded-xl shadow-md ${item.bg}`}
            >
              <p className="text-lg leading-relaxed mb-4">“{item.text}”</p>
              <p className="font-semibold text-sm text-gray-700">
                — {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LovedByCustomers;
