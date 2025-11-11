// "use client";

// import React from "react";
// import { X } from "lucide-react";

// export default function TrackShipmentModal({ onClose }) {
//   return (
//     <>
//       {/* Overlay (blurs + darkens background) */}
//       <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"></div>

//       {/* Modal */}
//       <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md md:max-w-lg bg-white/95 p-8 rounded-2xl shadow-2xl z-50 animate-scaleUp">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
//         >
//           <X size={24} />
//         </button>

//         {/* Content */}
//         <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
//           Track Your Shipment
//         </h3>
//         <p className="text-gray-500 text-sm mb-6 text-center">
//           Enter your tracking ID below to view real-time updates on your
//           shipment.
//         </p>

//         <form className="space-y-5">
//           <input
//             type="text"
//             placeholder="Enter Tracking ID"
//             className="w-full border border-gray-300 rounded-lg text-black px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3 rounded-lg transition"
//           >
//             Track Shipment
//           </button>
//         </form>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes scaleUp {
//           from {
//             opacity: 0;
//             transform: translate(-50%, -45%) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out forwards;
//         }

//         .animate-scaleUp {
//           animation: scaleUp 0.25s ease-out forwards;
//         }
//       `}</style>
//     </>
//   );
// }
"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TrackShipmentModal({ onClose }) {
  const [trackingId, setTrackingId] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    // Redirect to /Track/[shipmentId]
    router.push(`/Track/${trackingId.trim()}`);
    onClose(); // close modal
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md md:max-w-lg bg-white/95 p-8 rounded-2xl shadow-2xl z-50 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
          Track Your Shipment
        </h3>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Enter your tracking ID below to view real-time updates on your
          shipment.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg text-black px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3 rounded-lg transition"
          >
            Track Shipment
          </button>
        </form>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: translate(-50%, -45%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.25s ease-out forwards;
        }
      `}</style>
    </>
  );
}
