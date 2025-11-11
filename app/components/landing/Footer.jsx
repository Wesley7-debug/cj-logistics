// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0D3B4C] text-white px-8 py-12 ">
//       {/* Newsletter Section */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 border-b border-white/10 pb-10">
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <div className="bg-white/10 p-3 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 className="w-6 h-6"
//               >
//                 <path d="M4 4h16v16H4z" stroke="none" />
//                 <path d="M22 6l-10 7L2 6" />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-semibold">Keep up with the latest</h2>
//           </div>
//           <p className="text-white/70 max-w-md">
//             Join our newsletter to stay up to date on features and releases.
//           </p>
//         </div>

//         {/* Subscribe Form */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-end">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full sm:w-auto px-4 py-2 rounded-full text-black focus:outline-none"
//           />
//           <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition">
//             Subscribe
//           </button>
//           <p className="text-xs text-white/60 sm:ml-3">
//             By subscribing, you agree to our{" "}
//             <a href="#" className="underline">
//               Privacy Policy
//             </a>
//             .
//           </p>
//         </div>
//       </div>

//       {/* Footer Links */}
//       <div className="max-w-6xl mx-auto mt-10 grid sm:grid-cols-6 gap-6 text-sm text-white/70">
//         {/* Logo + Description */}
//         <div className="col-span-2">
//           <h3 className="text-white font-semibold text-lg mb-2">CargoIp</h3>
//           <p className="max-w-xs">Make your complicated finance more simple</p>
//         </div>

//         {/* Column Groups */}
//         <div>
//           <h4 className="text-white font-semibold mb-2">Finzo</h4>
//           <ul className="space-y-1">
//             <li>Payment</li>
//             <li>Card</li>
//             <li>Pricing</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Products</h4>
//           <ul className="space-y-1">
//             <li>Personal</li>
//             <li>Business</li>
//             <li>Invoices</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Company</h4>
//           <ul className="space-y-1">
//             <li>About</li>
//             <li>Careers</li>
//             <li>Press Kit</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Developer</h4>
//           <ul className="space-y-1">
//             <li>API Documentation</li>
//             <li>Guide</li>
//             <li>Change Log</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Community</h4>
//           <ul className="space-y-1">
//             <li>Refer a Friend</li>
//             <li>Gift</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Support</h4>
//           <ul className="space-y-1">
//             <li>Help</li>
//             <li>FAQ</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Legal</h4>
//           <ul className="space-y-1">
//             <li>Privacy Policy</li>
//             <li>Terms of Service</li>
//             <li>Cookies</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0D3B4C] text-white px-8 py-12">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 border-b border-white/10 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">Stay Connected</h2>
          </div>
          <p className="text-white/70 max-w-md">
            Join our newsletter to receive updates on new logistics solutions
            and service offerings.
          </p>
        </div>

        {/* Subscribe Form */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-end">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-full text-black focus:outline-none"
          />
          <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Subscribe
          </button>
          <p className="text-xs text-white/60 sm:ml-3">
            By subscribing, you agree to our{" "}
            <Link href="/Privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-white/70">
        {/* Company Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">
            CJ Logistics
          </h3>
          <p className="max-w-sm">
            Delivering seamless, reliable, and efficient logistics solutions
            across the globe.
          </p>
          <p className="mt-4 text-white/60">
            Email:{" "}
            <a
              href="mailto:cjlogistics.customerinformation@gmail.com"
              className="underline"
            >
              cjlogistics.customerinformation@gmail.com
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/About" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/Services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/Privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/ToS" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-white/10 pt-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} CJ Logistics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
