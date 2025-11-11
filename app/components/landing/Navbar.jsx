// "use client";
// import TrackShipmentModal from "../ui/TrackShipmentModal";
// import Link from "next/link";
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // icons for open/close

// const menuItems = [
//   { title: "Home", href: "/" },
//   { title: "About", href: "/About" },
//   { title: "Services", href: "/Services" },
//   { title: "Contact", href: "/Contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openModal, setopenModal] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm text-black transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//           {/* Logo */}
//           <div className=" text-base md:text-2xl font-bold flex items-center gap-2">
//             <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
//               ⬤
//             </span>
//             TrackFreight
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
//             {menuItems.map((item) => (
//               <li key={item.title}>
//                 <Link
//                   href={item.href}
//                   className="hover:text-blue-600 transition"
//                 >
//                   {item.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setopenModal(!openModal)}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
//             >
//               Track Shipment
//             </button>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition"
//             >
//               {menuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden bg-white/90 backdrop-blur-md overflow-hidden transition-all duration-300 ${
//             menuOpen ? "h-[30vh] py-4" : "h-0 py-0"
//           }`}
//         >
//           <ul className="flex flex-col items-center justify-center gap-5 text-base font-medium">
//             {menuItems.map((item) => (
//               <li key={item.title}>
//                 <Link
//                   href={item.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="block text-gray-800 hover:text-blue-600 transition"
//                 >
//                   {item.title}
//                 </Link>
//               </li>
//             ))}

//             <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
//               Track Shipment
//             </button>
//           </ul>
//         </div>
//       </nav>

//       {openModal && <TrackShipmentModal onClose={() => setOpenModal(false)} />}
//     </>
//   );
// }
"use client";

import TrackShipmentModal from "../ui/TrackShipmentModal";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/About" },
  { title: "Services", href: "/Services" },
  { title: "Contact", href: "/Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Dim background slightly when modal open */}
      <div className={openModal ? "blur-sm transition duration-300" : ""}>
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm text-black transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 pky-3 flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="text-base w-full h-[80px] font-bold flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                Track Shipment
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden bg-white/90 backdrop-blur-md overflow-hidden transition-all duration-300 ${
              menuOpen ? "h-[30vh] py-4" : "h-0 py-0"
            }`}
          >
            <ul className="flex flex-col items-center justify-center gap-5 text-base font-medium">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-800 hover:text-blue-600 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* <button
                onClick={() => setOpenModal(true)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
              >
                Track Shipment
              </button> */}
            </ul>
          </div>
        </nav>
      </div>

      {/* Modal */}
      {openModal && <TrackShipmentModal onClose={() => setOpenModal(false)} />}
    </>
  );
}
