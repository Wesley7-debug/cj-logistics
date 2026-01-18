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
//   ArrowBigRightDash,
//   Pencil, // Added for Edit
// } from "lucide-react";

// import AddShipmentModal from "../components/ui/AddShipmentModal";

// export default function AdminDashboard() {
//   const [shipments, setShipments] = useState([]);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [editingShipment, setEditingShipment] = useState(null); // Track shipment being edited
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

//   const fetchShipments = async () => {
//     try {
//       const res = await fetch("/api/shipments");
//       if (!res.ok) throw new Error("Failed to fetch shipments");
//       const data = await res.json();
//       setShipments(
//         data.map((s) => ({
//           ...s,
//           id: s.shipmentId,
//           date: s.departed?.split("T")[0],
//         })),
//       );
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchShipments();
//   }, []);

//   const handleEditClick = (shipment) => {
//     setEditingShipment(shipment);
//     setShowAddModal(true);
//   };

//   const updateShipmentStatus = async (id, newStatus) => {
//     setShipments((prev) =>
//       prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s)),
//     );
//     try {
//       await fetch(`/api/shipments/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus }),
//       });
//     } catch (err) {
//       alert("Could not update status");
//       fetchShipments(); // Rollback
//     }
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         Loading...
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
//       <header className="flex items-center justify-between bg-white shadow-md px-8 py-5">
//         <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//           <Package className="text-blue-500" /> Admin Dashboard
//         </h1>
//         <button
//           onClick={() => {
//             setEditingShipment(null);
//             setShowAddModal(true);
//           }}
//           className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
//         >
//           <Plus size={18} /> Add Shipment
//         </button>
//       </header>

//       <main className="flex-1 p-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {shipments.map((s) => (
//             <div
//               key={s.id}
//               className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-5 border border-gray-100 relative"
//             >
//               {/* Edit Icon top left */}
//               <button
//                 onClick={() => handleEditClick(s)}
//                 className="absolute top-3 left-3 p-1.5 bg-gray-50 hover:bg-gray-200 rounded-full text-gray-400 hover:text-blue-600 transition"
//               >
//                 <Pencil size={14} />
//               </button>

//               <div className="pl-6">
//                 {" "}
//                 {/* Added padding to prevent overlap with icon */}
//                 <h3 className="text-lg font-semibold text-gray-800">{s.to}</h3>
//                 <p className="text-sm text-gray-500 mt-1">Name: {s.name}</p>
//                 <p className="text-sm text-gray-500">Email: {s.email}</p>
//                 <p className="text-sm text-gray-500">ID: {s.id}</p>
//                 <p className="text-sm text-gray-500 mb-3">Date: {s.date}</p>
//               </div>

//               <div className="mb-3 pl-6">
//                 <span
//                   className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[s.status]}`}
//                 >
//                   {STATUS_OPTIONS.find((x) => x.label === s.status)?.icon}
//                   {s.status}
//                 </span>
//               </div>

//               <div className="flex flex-wrap gap-2 pl-6">
//                 {STATUS_OPTIONS.map((opt) => (
//                   <button
//                     key={opt.label}
//                     onClick={() => updateShipmentStatus(s.id, opt.label)}
//                     className={`p-2 rounded-md transition border flex items-center justify-center ${s.status === opt.label ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 opacity-40 hover:opacity-100"}`}
//                   >
//                     {opt.icon}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {showAddModal && (
//         <AddShipmentModal
//           initialData={editingShipment}
//           onClose={() => {
//             setShowAddModal(false);
//             setEditingShipment(null);
//           }}
//           onRefresh={fetchShipments}
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
  AlertTriangle,
  Gavel,
  FileSearch,
  XCircle,
  Clock,
  PackageSearch,
  PauseCircle,
  Hand,
  MapPin,
  Pencil,
} from "lucide-react";

import AddShipmentModal from "../components/ui/AddShipmentModal";

export default function AdminDashboard() {
  const [shipments, setShipments] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingShipment, setEditingShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  const STATUS_STYLES = {
    Transit: "bg-blue-100 text-blue-700",
    Withheld: "bg-orange-100 text-orange-700",
    "Custom duty": "bg-amber-100 text-amber-800",
    Clearance: "bg-emerald-100 text-emerald-800",
    Seized: "bg-red-100 text-red-700",
    Delayed: "bg-yellow-100 text-yellow-700",
    "Waiting For Pickup": "bg-indigo-100 text-indigo-700",
    Paused: "bg-gray-100 text-gray-700",
    "On Hold": "bg-rose-100 text-rose-700",
    Arrived: "bg-green-100 text-green-700",
  };

  const STATUS_OPTIONS = [
    { label: "Transit", icon: <Truck size={18} /> },
    { label: "Withheld", icon: <AlertTriangle size={18} /> },
    { label: "Custom duty", icon: <Gavel size={18} /> },
    { label: "Clearance", icon: <FileSearch size={18} /> },
    { label: "Seized", icon: <XCircle size={18} /> },
    { label: "Delayed", icon: <Clock size={18} /> },
    { label: "Waiting For Pickup", icon: <PackageSearch size={18} /> },
    { label: "Paused", icon: <PauseCircle size={18} /> },
    { label: "On Hold", icon: <Hand size={18} /> },
    { label: "Arrived", icon: <MapPin size={18} /> },
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
      fetchShipments();
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen font-medium text-gray-500 text-sm sm:text-base">
        Loading shipments...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24 sm:pt-20">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white shadow-md px-4 sm:px-8 py-4 fixed top-0 w-full z-10">
        <h1 className="text-lg sm:text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Package className="text-blue-500" /> Admin Dashboard
        </h1>
        <button
          onClick={() => {
            setEditingShipment(null);
            setShowAddModal(true);
          }}
          className="flex items-center justify-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto"
        >
          <Plus size={18} /> Add Shipment
        </button>
      </header>

      <main className="flex-1 p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {shipments.map((s) => (
            <div
              key={s.id}
              className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-4 sm:p-5 border border-gray-100 relative"
            >
              <button
                onClick={() => handleEditClick(s)}
                className="absolute top-3 left-3 p-1.5 bg-gray-50 hover:bg-gray-200 rounded-full text-gray-400 hover:text-blue-600 transition"
              >
                <Pencil size={14} />
              </button>

              <div className="pl-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                  {s.to}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Name: {s.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Email: {s.email}
                </p>
                <p className="text-xs text-gray-500 font-mono mt-1">
                  ID: {s.id}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3">
                  Date: {s.date}
                </p>
              </div>

              <div className="mb-4 pl-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                    STATUS_STYLES[s.status] || "bg-gray-100 text-gray-700"
                  }`}
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
                    title={opt.label}
                    className={`p-2 rounded-md transition border flex items-center justify-center ${
                      s.status === opt.label
                        ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                        : "bg-gray-50 border-gray-100 text-gray-400 hover:bg-white hover:text-blue-500 hover:border-blue-200"
                    }`}
                  >
                    {opt.icon}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {shipments.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-sm sm:text-base">
            No shipments found in the records.
          </div>
        )}
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
