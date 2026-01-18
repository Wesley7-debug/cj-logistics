// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Package,
//   Plus,
//   Truck,
//   Timer,
//   CheckCircle2,
//   AlarmClock,
//   XCircle,
//   PauseCircle,
//   RotateCcw,
//   PackageCheck,
//   ArrowBigRightDash,
// } from "lucide-react";

// import AddShipmentModal from "../components/ui/AddShipmentModal";

// export default function AdminDashboard() {
//   const [shipments, setShipments] = useState([]);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const STATUS_STYLES = {
//     Transit: "bg-blue-100 text-blue-700",
//     "Out for Delivery": "bg-indigo-100 text-indigo-700",
//     Delivered: "bg-green-100 text-green-700",
//     Delayed: "bg-yellow-100 text-yellow-700",
//     Pending: "bg-gray-100 text-gray-700",
//     Cancelled: "bg-red-100 text-red-700",
//     Hold: "bg-amber-100 text-amber-800",
//     Returned: "bg-purple-100 text-purple-700",
//   };

//   const STATUS_OPTIONS = [
//     { label: "Transit", icon: <Truck size={18} /> },
//     { label: "Out for Delivery", icon: <ArrowBigRightDash size={18} /> },
//     { label: "Delivered", icon: <CheckCircle2 size={18} /> },
//     { label: "Delayed", icon: <AlarmClock size={18} /> },
//     { label: "Pending", icon: <Timer size={18} /> },
//     { label: "Cancelled", icon: <XCircle size={18} /> },
//     { label: "Hold", icon: <PauseCircle size={18} /> },
//     { label: "Returned", icon: <RotateCcw size={18} /> },
//   ];

//   // Fetch shipments
//   useEffect(() => {
//     const fetchShipments = async () => {
//       try {
//         const res = await fetch("/api/shipments");
//         if (!res.ok) throw new Error("Failed to fetch shipments");
//         const data = await res.json();

//         setShipments(
//           data.map((s) => ({
//             id: s.shipmentId,
//             name: s.name,
//             email: s.email,
//             from: s.from,
//             to: s.to,
//             destination: s.to,
//             date: s.departed.split("T")[0],
//             status: s.status,
//           }))
//         );
//       } catch (err) {
//         console.error(err);
//         alert("Error loading shipments");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShipments();
//   }, []);

//   // Update status
//   const updateShipmentStatus = async (id, newStatus) => {
//     // UI update first (optimistic)
//     setShipments((prev) =>
//       prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
//     );

//     try {
//       const res = await fetch(`/api/shipments/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!res.ok) throw new Error("Server update failed");
//     } catch (err) {
//       console.error(err);
//       alert("Could not update status");

//       // Rollback UI
//       setShipments((prev) =>
//         prev.map((s) =>
//           s.id === id
//             ? { ...s, status: shipments.find((x) => x.id === id).status }
//             : s
//         )
//       );
//     }
//   };

//   const addShipment = (shipment) => {
//     setShipments((prev) => [
//       ...prev,
//       {
//         id: shipment.shipmentId,
//         status: shipment.status || "Transit",
//         name: shipment.name,
//         email: shipment.email,
//         from: shipment.from,
//         to: shipment.to,
//         destination: shipment.to,
//         date: shipment.departed.split("T")[0],
//       },
//     ]);
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="text-gray-500 text-lg">Loading shipments...</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
//       {/* Header */}
//       <header className="flex items-center justify-between bg-white shadow-md px-8 py-5">
//         <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//           <Package className="text-blue-500" /> Admin Dashboard
//         </h1>

//         <button
//           onClick={() => setShowAddModal(true)}
//           className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
//         >
//           <Plus size={18} /> Add Shipment
//         </button>
//       </header>

//       {/* Shipments */}
//       <main className="flex-1 p-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {shipments.map((s) => (

//             <div
//               key={s.id}
//               className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-5 border border-gray-100"
//             >
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {s.destination}
//               </h3>

//               <p className="text-sm text-gray-500 mt-1">Name: {s.name}</p>
//               <p className="text-sm text-gray-500">Email: {s.email}</p>
//               <p className="text-sm text-gray-500">ID: {s.id}</p>
//               <p className="text-sm text-gray-500 mb-3">Date: {s.date}</p>

//               {/* Status Badge */}
//               <div className="mb-3">
//                 <span
//                   className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
//                     STATUS_STYLES[s.status]
//                   }`}
//                 >
//                   {STATUS_OPTIONS.find((x) => x.label === s.status)?.icon}
//                   {s.status}
//                 </span>
//               </div>

//               {/* Status Picker */}
//               <div className="flex flex-wrap gap-2">
//                 {STATUS_OPTIONS.map((opt) => (
//                   <button
//                     key={opt.label}
//                     onClick={() => updateShipmentStatus(s.id, opt.label)}
//                     className={`p-2 rounded-md transition border flex items-center justify-center
//           ${
//             s.status === opt.label
//               ? "bg-blue-600 text-white border-blue-600 shadow"
//               : "bg-gray-100 text-gray-500 border-gray-300 opacity-40 hover:opacity-100 hover:bg-gray-200"
//           }
//         `}
//                   >
//                     {opt.icon}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Floating Mobile Button */}
//       <button
//         onClick={() => setShowAddModal(true)}
//         className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg md:hidden"
//       >
//         <Plus size={24} />
//       </button>

//       {showAddModal && (
//         <AddShipmentModal
//           onClose={() => setShowAddModal(false)}
//           onAdd={addShipment}
//         />
//       )}
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import {
  Package,
  Plus,
  Truck,
  Timer,
  CheckCircle2,
  AlarmClock,
  XCircle,
  PauseCircle,
  RotateCcw,
  ArrowBigRightDash,
  Pencil, // Added for Edit
} from "lucide-react";

import AddShipmentModal from "../components/ui/AddShipmentModal";

export default function AdminDashboard() {
  const [shipments, setShipments] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingShipment, setEditingShipment] = useState(null); // Track shipment being edited
  const [loading, setLoading] = useState(true);

  const STATUS_STYLES = {
    Transit: "bg-blue-100 text-blue-700",
    "Out for Delivery": "bg-indigo-100 text-indigo-700",
    Delivered: "bg-green-100 text-green-700",
    Delayed: "bg-yellow-100 text-yellow-700",
    Pending: "bg-gray-100 text-gray-700",
    Cancelled: "bg-red-100 text-red-700",
    Hold: "bg-amber-100 text-amber-800",
    Returned: "bg-purple-100 text-purple-700",
  };

  const STATUS_OPTIONS = [
    { label: "Transit", icon: <Truck size={18} /> },
    { label: "Out for Delivery", icon: <ArrowBigRightDash size={18} /> },
    { label: "Delivered", icon: <CheckCircle2 size={18} /> },
    { label: "Delayed", icon: <AlarmClock size={18} /> },
    { label: "Pending", icon: <Timer size={18} /> },
    { label: "Cancelled", icon: <XCircle size={18} /> },
    { label: "Hold", icon: <PauseCircle size={18} /> },
    { label: "Returned", icon: <RotateCcw size={18} /> },
  ];

  const fetchShipments = async () => {
    try {
      const res = await fetch("/api/shipments");
      if (!res.ok) throw new Error("Failed to fetch shipments");
      const data = await res.json();
      setShipments(
        data.map((s) => ({
          ...s,
          id: s.shipmentId,
          date: s.departed?.split("T")[0],
        })),
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  const handleEditClick = (shipment) => {
    setEditingShipment(shipment);
    setShowAddModal(true);
  };

  const updateShipmentStatus = async (id, newStatus) => {
    setShipments((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s)),
    );
    try {
      await fetch(`/api/shipments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (err) {
      alert("Could not update status");
      fetchShipments(); // Rollback
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
      <header className="flex items-center justify-between bg-white shadow-md px-8 py-5">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Package className="text-blue-500" /> Admin Dashboard
        </h1>
        <button
          onClick={() => {
            setEditingShipment(null);
            setShowAddModal(true);
          }}
          className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
        >
          <Plus size={18} /> Add Shipment
        </button>
      </header>

      <main className="flex-1 p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shipments.map((s) => (
            <div
              key={s.id}
              className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-5 border border-gray-100 relative"
            >
              {/* Edit Icon top left */}
              <button
                onClick={() => handleEditClick(s)}
                className="absolute top-3 left-3 p-1.5 bg-gray-50 hover:bg-gray-200 rounded-full text-gray-400 hover:text-blue-600 transition"
              >
                <Pencil size={14} />
              </button>

              <div className="pl-6">
                {" "}
                {/* Added padding to prevent overlap with icon */}
                <h3 className="text-lg font-semibold text-gray-800">{s.to}</h3>
                <p className="text-sm text-gray-500 mt-1">Name: {s.name}</p>
                <p className="text-sm text-gray-500">Email: {s.email}</p>
                <p className="text-sm text-gray-500">ID: {s.id}</p>
                <p className="text-sm text-gray-500 mb-3">Date: {s.date}</p>
              </div>

              <div className="mb-3 pl-6">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[s.status]}`}
                >
                  {STATUS_OPTIONS.find((x) => x.label === s.status)?.icon}
                  {s.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pl-6">
                {STATUS_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => updateShipmentStatus(s.id, opt.label)}
                    className={`p-2 rounded-md transition border flex items-center justify-center ${s.status === opt.label ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 opacity-40 hover:opacity-100"}`}
                  >
                    {opt.icon}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {showAddModal && (
        <AddShipmentModal
          initialData={editingShipment}
          onClose={() => {
            setShowAddModal(false);
            setEditingShipment(null);
          }}
          onRefresh={fetchShipments}
        />
      )}
    </div>
  );
}
