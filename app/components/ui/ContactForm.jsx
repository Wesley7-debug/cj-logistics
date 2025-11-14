// "use client";

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Send } from "lucide-react"; // You already use this for the icon

// const ContactForm = () => {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     emailjs
//       .sendForm(
//         "service_n89eonr", // Replace with your EmailJS service ID
//         "template_1z4j9ce", // Replace with your EmailJS template ID
//         form.current,
//         "6jW4cbaANCUD52XvW" // Replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setStatus("Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           console.log(error.text);
//           setStatus("Failed to send message. Try again.");
//         }
//       );
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
//       <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

//       <form ref={form} onSubmit={sendEmail} className="space-y-6">
//         <div>
//           <label className="block text-gray-700 text-sm font-medium mb-2">
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-medium mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-medium mb-2">
//             Message
//           </label>
//           <textarea
//             name="message"
//             rows="4"
//             placeholder="Write your message..."
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
//         >
//           <Send className="w-5 h-5" />
//           Send Message
//         </button>
//       </form>

//       {status && (
//         <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
//       )}
//     </div>
//   );
// };

// export default ContactForm;
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // Status message
  const [loading, setLoading] = useState(false); // Sending state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_awjnomo", // Your EmailJS Service ID
        "template_1z4j9ce", // Your EmailJS Template ID
        form.current,
        "6jW4cbaANCUD52XvW" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
        Contact Us
      </h3>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          <Send className="w-5 h-5" />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 text-center font-medium ${
            status.includes("❌") ? "text-red-600" : "text-green-600"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
