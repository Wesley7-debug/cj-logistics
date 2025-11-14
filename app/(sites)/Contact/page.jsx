import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import ContactForm from "@/app/components/ui/ContactForm";

const ContactUs = () => {
  return (
    <div className="font-sans text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Contact logistics"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-10 md:px-20">
          <p className="text-white/70 text-sm mb-2">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            <span className="text-blue-500">Contact</span> Us
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 grid md:grid-cols-2 gap-12">
        {/* Left: Contact Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6">
            We’d love to hear from you
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Whether you have a question about our logistics services, shipment
            tracking, or want to get a quote — our team is ready to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-gray-600">+1 (800) #### ####</p>
                <p className="text-gray-600">+1 (800) ###-####</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">
                  cjlogistics.customerinformation@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium">Office Address</p>
                <p className="text-gray-600">
                  123 Global Chibiak Ave, Suite 400 <br />
                  New York, NY.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        {/* <div>
          <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
          <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div> */}
        <ContactForm />
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] bg-gray-200">
        {/* Optional: replace with Google Maps embed or Mapbox */}
        <iframe
          title="Office Location"
          src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer Accent */}
      <div className="h-4 bg-blue-600 w-full"></div>
    </div>
  );
};

export default ContactUs;
