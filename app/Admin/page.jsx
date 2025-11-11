// "use client";

// import React, { useState } from "react";
// import {
//   Package,
//   Edit,
//   PauseCircle,
//   PlayCircle,
//   Plus,
//   UserPlus,
// } from "lucide-react";
// import AddShipmentModal from "../components/ui/AddShipmentModal";
// export default function AdminDashboard() {
//   const [shipments, setShipments] = useState([
//     {
//       id: "SH12345",
//       name: "John Doe",
//       email: "john@example.com",
//       destination: "New York, USA",
//       date: "2025-11-10",
//       status: "Active",
//     },
//     {
//       id: "SH67890",
//       name: "Alice Smith",
//       email: "alice@example.com",
//       destination: "Berlin, Germany",
//       date: "2025-11-12",
//       status: "Paused",
//     },
//   ]);

//   const [editId, setEditId] = useState(null);
//   const [newDate, setNewDate] = useState("");
//   const [showAddModal, setShowAddModal] = useState(false);

//   const handleDateUpdate = (id) => {
//     setShipments((prev) =>
//       prev.map((s) => (s.id === id ? { ...s, date: newDate || s.date } : s))
//     );
//     setEditId(null);
//     setNewDate("");
//   };

//   const toggleStatus = (id) => {
//     setShipments((prev) =>
//       prev.map((s) =>
//         s.id === id
//           ? { ...s, status: s.status === "Active" ? "Paused" : "Active" }
//           : s
//       )
//     );
//   };

//   const addShipment = (shipment) => {
//     setShipments((prev) => [
//       ...prev,
//       { id: `SH${prev.length + 100}`, status: "Active", ...shipment },
//     ]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans flex flex-col pt-20">
//       {/* Header */}
//       <header className="flex items-center justify-between bg-white shadow-md px-8 py-5">
//         <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//           <Package className="text-blue-500" /> Admin Dashboard
//         </h1>
//         <div className="flex items-center gap-3">
//           <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
//             <UserPlus size={18} /> Add User
//           </button>
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition"
//           >
//             <Plus size={18} /> Add Shipment
//           </button>
//         </div>
//       </header>

//       {/* Shipments Section */}
//       <main className="flex-1 p-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {shipments.map((shipment) => (
//             <div
//               key={shipment.id}
//               className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                   {shipment.destination}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-1">
//                   Name: {shipment.name}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-2">
//                   Email: {shipment.email}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-2">ID: {shipment.id}</p>

//                 {/* Editable Date */}
//                 {editId === shipment.id ? (
//                   <div className="flex items-center gap-2 mb-2">
//                     <input
//                       type="date"
//                       value={newDate || shipment.date}
//                       onChange={(e) => setNewDate(e.target.value)}
//                       className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                       onClick={() => handleDateUpdate(shipment.id)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 ) : (
//                   <p className="text-sm text-gray-500 mb-2">
//                     Date: {shipment.date}
//                   </p>
//                 )}

//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     shipment.status === "Active"
//                       ? "bg-blue-100 text-blue-600"
//                       : "bg-gray-200 text-gray-600"
//                   }`}
//                 >
//                   {shipment.status}
//                 </span>
//               </div>

//               {/* Actions */}
//               <div className="flex items-center gap-3 mt-4">
//                 <button
//                   onClick={() =>
//                     setEditId(editId === shipment.id ? null : shipment.id)
//                   }
//                   className="text-blue-600 hover:text-blue-800 transition"
//                 >
//                   <Edit size={18} />
//                 </button>
//                 <button
//                   onClick={() => toggleStatus(shipment.id)}
//                   className={`transition ${
//                     shipment.status === "Active"
//                       ? "text-blue-500 hover:text-blue-700"
//                       : "text-gray-500 hover:text-gray-700"
//                   }`}
//                 >
//                   {shipment.status === "Active" ? (
//                     <PauseCircle size={20} />
//                   ) : (
//                     <PlayCircle size={20} />
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Floating Add Button (Mobile) */}
//       <button
//         onClick={() => setShowAddModal(true)}
//         className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition md:hidden"
//       >
//         <Plus size={24} />
//       </button>

//       {/* Add Shipment Modal */}
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
  Edit,
  PauseCircle,
  PlayCircle,
  Plus,
  UserPlus,
} from "lucide-react";
import AddShipmentModal from "../components/ui/AddShipmentModal";

export default function AdminDashboard() {
  const [shipments, setShipments] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch all shipments on mount
  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const res = await fetch("/api/shipments");
        if (!res.ok) throw new Error("Failed to fetch shipments");
        const data = await res.json();
        // Map backend data including dynamic status
        setShipments(
          data.map((s) => ({
            id: s.shipmentId,
            name: s.name,
            email: s.email,
            from: s.from,
            to: s.to,
            destination: s.to,
            date: s.departed.split("T")[0],
            status: s.status, // now dynamic from backend
          }))
        );
      } catch (err) {
        console.error(err);
        alert("Error fetching shipments");
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, []);

  const handleDateUpdate = (id) => {
    setShipments((prev) =>
      prev.map((s) => (s.id === id ? { ...s, date: newDate || s.date } : s))
    );
    setEditId(null);
    setNewDate("");
  };

  const toggleStatus = async (id) => {
    const shipmentId = id;
    setShipments((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "Active" ? "Paused" : "Active" }
          : s
      )
    );

    // Get the new status
    const shipment = shipments.find((s) => s.id === id);
    const newStatus = shipment.status === "Active" ? "Paused" : "Active";

    try {
      const res = await fetch(`/api/shipments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update shipment status");
    } catch (err) {
      console.error(err);
      alert("Error updating shipment status on server");
      // Rollback UI state if needed
      setShipments((prev) =>
        prev.map((s) =>
          s.id === id
            ? { ...s, status: shipment.status } // revert back
            : s
        )
      );
    }
  };

  const addShipment = (shipment) => {
    setShipments((prev) => [
      ...prev,
      {
        id: shipment.shipmentId,
        status: "Active",
        name: shipment.name,
        email: shipment.email,
        from: shipment.from,
        to: shipment.to,
        destination: shipment.to,
        date: shipment.departed.split("T")[0],
      },
    ]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading shipments...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col pt-20">
      {/* Header */}
      <header className="flex items-center justify-between bg-white shadow-md px-8 py-5">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Package className="text-blue-500" /> Admin Dashboard
        </h1>
        <div className="flex items-center gap-3">
          {/* <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            <UserPlus size={18} /> Add User
          </button> */}
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <Plus size={18} /> Add Shipment
          </button>
        </div>
      </header>

      {/* Shipments Section */}
      <main className="flex-1 p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shipments.map((shipment) => (
            <div
              key={shipment.id}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {shipment.destination}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Name: {shipment.name}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Email: {shipment.email}
                </p>
                <p className="text-sm text-gray-500 mb-2">ID: {shipment.id}</p>

                {/* Editable Date */}
                {editId === shipment.id ? (
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="date"
                      value={newDate || shipment.date}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleDateUpdate(shipment.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 mb-2">
                    Date: {shipment.date}
                  </p>
                )}

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    shipment.status === "Active"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {shipment.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-4">
                {/* <button
                  onClick={() =>
                    setEditId(editId === shipment.id ? null : shipment.id)
                  }
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <Edit size={18} />
                </button> */}
                <button
                  onClick={() => toggleStatus(shipment.id)}
                  className={`transition ${
                    shipment.status === "Active"
                      ? "text-blue-500 hover:text-blue-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {shipment.status === "Active" ? (
                    <PauseCircle size={20} />
                  ) : (
                    <PlayCircle size={20} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Add Button (Mobile) */}
      <button
        onClick={() => setShowAddModal(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition md:hidden"
      >
        <Plus size={24} />
      </button>

      {/* Add Shipment Modal */}
      {showAddModal && (
        <AddShipmentModal
          onClose={() => setShowAddModal(false)}
          onAdd={addShipment}
        />
      )}
    </div>
  );
}
