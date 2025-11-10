import React from "react";

const testimonials = [
  {
    text: "No matter how many tools you change, you can keep Tines in place.",
    company: "Intercom",
    bg: "bg-blue-100",
  },
  {
    text: "My favorite thing about Tines is how easy and user-friendly it is. It feels like a game — whenever I build in Tines, I feel like I'm solving a fun puzzle.",
    company: "GitLab",
    bg: "bg-orange-100",
  },
  {
    text: "750 days of work time saved.",
    company: "Elastic",
    bg: "bg-purple-100",
  },
  {
    text: "Tines is not only great for cybersecurity teams who are likely already undersized and drowning in alerts, but also for the business at large.",
    company: "James K., Senior Manager, InfoSec",
    bg: "bg-green-100",
  },
  {
    text: "The platform has played a pivotal role in helping us achieve our vision of a 24/7 SOC — ensuring alerts are streamlined and no critical notifications are missed.",
    company: "Ajinkya Y., Cyber Analyst",
    bg: "bg-yellow-100",
  },
  {
    text: "Process time per alert reduced from 30s to 5s.",
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
