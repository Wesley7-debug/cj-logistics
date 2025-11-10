// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-20 flex items-center justify-between px-10  backdrop-blur-md rounded-2xl  text-white">
//       <div className="text-2xl font-bold flex items-center gap-2">
//         <span className="bg-white text-black rounded-full px-2 py-1 text-sm">
//           ⬤
//         </span>
//         NextPort
//       </div>
//       <ul className="hidden md:flex items-center gap-8 text-sm">
//         <li className="hover:text-gray-300 cursor-pointer">Models</li>
//         <li className="hover:text-gray-300 cursor-pointer">Our Mission</li>
//         <li className="hover:text-gray-300 cursor-pointer">Careers</li>
//         <li className="hover:text-gray-300 cursor-pointer">About us</li>
//       </ul>
//       <div className="flex items-center gap-4">
//         <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full">
//           Search
//         </button>
//         <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
//           ☰
//         </div>
//       </div>
//     </nav>
//   );
// }
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-20 flex items-center justify-between px-10 py-3 backdrop-blur-md bg-white/10 text-black">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <span className="bg-black text-white rounded-full px-2 py-1 text-sm">
          ⬤
        </span>
        NextPort
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm">
        <li className="hover:text-gray-300 cursor-pointer">Models</li>
        <li className="hover:text-gray-300 cursor-pointer">Our Mission</li>
        <li className="hover:text-gray-300 cursor-pointer">Careers</li>
        <li className="hover:text-gray-300 cursor-pointer">About us</li>
      </ul>

      {/* Search + Menu */}
      <div className="flex items-center gap-4">
        <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition">
          Search
        </button>
        <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
}
