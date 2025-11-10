// import React from "react";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-gray-100 font-sans mt-20">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/home.jpg')",
//         }}
//       ></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* Hero Content */}
//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 mt-16 text-white">
//         {/* Left Text Section */}
//         <div className="max-w-lg">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
//             Delivering <br /> Excellence in Every Mile
//           </h1>
//           <p className="text-gray-200 mb-8">
//             Fast, reliable, and cost-effective logistics solutions tailored to
//             your business from local deliveries to global freight forwarding.
//           </p>
//           <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
//             JOIN OUR TEAM
//           </button>
//         </div>

//         {/* Floating Card */}
//         <div className="relative mt-10 md:mt-0">
//           <div className="absolute top-[-3rem] right-[-3rem] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
//             Efficiency
//           </div>
//           <div className="absolute bottom-[-3rem] left-[-2rem] bg-green-500 text-white px-3 py-1 rounded-full text-sm">
//             Smart
//           </div>

//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm">
//             <img
//               src="/images/home1.jpg"
//               alt="Container ship"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">
//                 Delivery Revolution
//               </h3>
//               <p className="text-gray-500 text-sm mb-2">Your way in 2025</p>
//               <div className="text-gray-700 text-sm flex justify-between">
//                 <span>11:10</span>
//                 <span>09.04.2025</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Indicator */}
//       <div className="absolute bottom-6 left-10 text-white/80 text-sm flex items-center gap-2">
//         <span className="border-t border-white/50 w-10"></span>
//         /01
//       </div>
//     </div>
//   );
// }
import React from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen  bg-gray-100 font-sans overflow-hidden p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-20 md:top-20 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 mt-16 text-white">
        {/* Left Text Section */}
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Delivering <br /> Excellence in Every Mile
          </h1>
          <p className="text-gray-200 mb-8">
            Fast, reliable, and cost-effective logistics solutions tailored to
            your business — from local deliveries to global freight forwarding.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            JOIN OUR TEAM
          </button>
        </div>

        {/* Floating Card Section */}
        <div className="relative mt-10 md:mt-0">
          <div className="absolute top-[-3rem] right-[-3rem] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
            Efficiency
          </div>
          <div className="absolute bottom-[-3rem] left-[-2rem] bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Smart
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm">
            <img
              src="/images/home1.jpg"
              alt="Container ship"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Delivery Revolution
              </h3>
              <p className="text-gray-500 text-sm mb-2">Your way in 2025</p>
              <div className="text-gray-700 text-sm flex justify-between">
                <span>11:10</span>
                <span>09.04.2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Indicator */}
      <div className="absolute bottom-6 left-10 text-white/80 text-sm flex items-center gap-2">
        <span className="border-t border-white/50 w-10"></span>
        /01
      </div>
    </div>
  );
}
