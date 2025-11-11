// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import ShipmentMap from "@/app/components/ui/ShipmentMap";
// import ShipmentProgressBar from "@/app/components/ui/ShipmentProgressBar";

// const TrackShipmentPage = () => {
//   const [shipment, setShipment] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const params = useParams();
//   const { shipmentId } = params;

//   useEffect(() => {
//     const fetchShipment = async () => {
//       try {
//         const res = await fetch(`/api/shipments/${shipmentId}`);
//         if (!res.ok) {
//           const data = await res.json();
//           throw new Error(data.error || "Shipment not found");
//         }
//         const data = await res.json();
//         setShipment(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (shipmentId) fetchShipment();
//   }, [shipmentId]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="w-12 h-12 border-4 border-indigo-600 border-dashed rounded-full animate-spin"></div>
//       </div>
//     );

//   if (error) return <p className="p-8 text-center text-red-600">{error}</p>;
//   if (!shipment) return <p className="p-8 text-center">Shipment not found</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center pt-20">
//       {/* Header */}
//       <div className="w-full max-w-4xl bg-white shadow-sm rounded-lg p-6">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">
//               Shipment ID: {shipment.shipmentId}
//             </h2>
//             <p className="text-sm text-gray-500">
//               Shipping date: {shipment.departed} • Email:{" "}
//               <span className="text-indigo-600 font-medium">
//                 {shipment.email}
//               </span>
//             </p>
//           </div>

//           <div className="mt-3 sm:mt-0 flex items-center gap-2">
//             <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//               shipment: {shipment.status || "In Progress"}
//             </span>
//           </div>
//         </div>

//         {/* From / To */}
//         <div className="mt-6 border-t border-gray-200 pt-4">
//           <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600">
//             <div>
//               <p className="font-semibold">From:</p>
//               <p>{shipment.from}</p>
//             </div>
//             <div className="mt-2 sm:mt-0">
//               <p className="font-semibold">To:</p>
//               <p>{shipment.to}</p>
//             </div>
//           </div>

//           {/* Progress Bar */}
//           <div className="relative mt-6">
//             <ShipmentProgressBar
//               departed={shipment.departed}
//               expected={shipment.expected}
//               status={shipment.status}
//               shipmentId={shipment.shipmentId}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Map */}
//       <div className="w-full max-w-4xl mt-6 bg-white shadow-sm rounded-lg overflow-hidden">
//         {shipment ? <ShipmentMap shipment={shipment} /> : null}
//       </div>
//     </div>
//   );
// };

// export default TrackShipmentPage;
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ShipmentMap from "@/app/components/ui/ShipmentMap";
import ShipmentProgressBar from "@/app/components/ui/ShipmentProgressBar";
import {
  Truck,
  PauseCircle,
  ShieldAlert,
  Lock,
  AlertTriangle,
  Mail,
} from "lucide-react";

const SUPPORT_EMAIL = "cjlogistics.customerinformation@gmail.com"; // 👈 change this

const TrackShipmentPage = () => {
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { shipmentId } = useParams();

  useEffect(() => {
    const fetchShipment = async () => {
      try {
        const res = await fetch(`/api/shipments/${shipmentId}`);
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Shipment not found");
        }
        const data = await res.json();
        setShipment(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (shipmentId) fetchShipment();
  }, [shipmentId]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-indigo-600 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center p-6 bg-gray-50">
        <AlertTriangle className="text-red-500 mb-3" size={36} />
        <p className="text-lg text-red-600 mb-2 font-medium">{error}</p>
        <p className="text-gray-600">
          Please contact{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-indigo-600 font-medium hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          for assistance.
        </p>
      </div>
    );

  if (!shipment)
    return <p className="p-8 text-center text-gray-600">Shipment not found.</p>;

  // 🟢 Status color + icon system
  const getStatusStyle = (status) => {
    switch (status) {
      case "Moving":
        return {
          color: "text-blue-700",
          bg: "bg-blue-100",
          icon: <Truck size={16} className="text-blue-600" />,
        };
      case "Paused":
        return {
          color: "text-yellow-700",
          bg: "bg-yellow-100",
          icon: <PauseCircle size={16} className="text-yellow-600" />,
        };
      case "Clearance":
        return {
          color: "text-green-700",
          bg: "bg-green-100",
          icon: <ShieldAlert size={16} className="text-green-600" />,
        };
      case "Withheld":
        return {
          color: "text-red-700",
          bg: "bg-red-100",
          icon: <Lock size={16} className="text-red-600" />,
        };
      default:
        return {
          color: "text-gray-700",
          bg: "bg-gray-100",
          icon: <Truck size={16} className="text-gray-600" />,
        };
    }
  };

  const statusStyle = getStatusStyle(shipment.status);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-24 px-4 pb-12">
      {/* Header Card */}
      <div className="w-full max-w-4xl bg-white shadow-sm rounded-lg p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Shipment ID:{" "}
              <span className="text-indigo-600">{shipment.shipmentId}</span>
            </h2>
            <p className="text-sm text-gray-500">
              Shipped on:{" "}
              <span className="font-medium text-gray-700">
                {shipment.departed
                  ? new Date(shipment.departed).toLocaleDateString()
                  : "N/A"}
              </span>{" "}
              • Contact:{" "}
              <span className="text-indigo-600 font-medium">
                {shipment.email}
              </span>
            </p>
          </div>
          <div className="flex gap-1.5">
            <span>shipment:</span>
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusStyle.bg} ${statusStyle.color}`}
            >
              {statusStyle.icon}
              <span>shipment:{shipment.status || "In Progress"}</span>
            </div>
          </div>
        </div>

        {/* From / To Info */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600 gap-3">
            <div>
              <p className="font-semibold text-gray-800">From:</p>
              <p>{shipment.from}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">To:</p>
              <p>{shipment.to}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mt-6">
            <ShipmentProgressBar
              departed={shipment.departed}
              expected={shipment.expected}
              status={shipment.status}
              shipmentId={shipment.shipmentId}
            />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-4xl mt-6 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
        {shipment ? <ShipmentMap shipment={shipment} /> : null}
      </div>

      {/* Support Message */}
      <div className="mt-8 text-center text-sm text-gray-600">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Mail size={16} className="text-indigo-600" />
          <span>Need help with this shipment?</span>
        </div>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-indigo-600 hover:underline font-medium"
        >
          {SUPPORT_EMAIL}
        </a>
      </div>
    </div>
  );
};

export default TrackShipmentPage;
