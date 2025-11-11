"use client";

import React, { useState, useEffect } from "react";
import {
  Package,
  PauseCircle,
  PlayCircle,
  ShieldAlert,
  Lock,
  Truck,
  Plus,
  Trash2,
} from "lucide-react";
import AddShipmentModal from "../components/ui/AddShipmentModal";

export default function AdminDashboard() {
  const [shipments, setShipments] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const statuses = [
    { name: "Moving", icon: Truck, color: "text-blue-500" },
    { name: "Paused", icon: PauseCircle, color: "text-yellow-500" },
    { name: "Clearance", icon: ShieldAlert, color: "text-green-500" },
    { name: "Withheld", icon: Lock, color: "text-red-500" },
  ];

  // Fetch all shipments on mount
  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const res = await fetch("/api/shipments");
        if (!res.ok) throw new Error("Failed to fetch shipments");

        const data = await res.json();

        setShipments(
          data.map((s) => ({
            id: s.shipmentId,
            name: s.name,
            email: s.email,
            destination: s.to,
            date: s.departed?.split("T")[0],
            status: s.status === "Active" ? "Moving" : s.status, // migrate old data
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

  // Update status handler
  const updateStatus = async (id, newStatus) => {
    const shipment = shipments.find((s) => s.id === id);
    const prevStatus = shipment.status;

    // Optimistic update
    setShipments((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );

    try {
      const res = await fetch(`/api/shipments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update shipment");
    } catch (err) {
      console.error(err);
      alert("Error updating shipment status");
      // Rollback
      setShipments((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: prevStatus } : s))
      );
    }
  };

  // Delete shipment
  const deleteShipment = async (id) => {
    if (!confirm("Are you sure you want to delete this shipment?")) return;

    try {
      const res = await fetch(`/api/shipments/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete shipment");
      setShipments((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting shipment");
    }
  };

  // Add shipment handler (for modal)
  const addShipment = (shipment) => {
    setShipments((prev) => [
      ...prev,
      {
        id: shipment.shipmentId,
        name: shipment.name,
        email: shipment.email,
        destination: shipment.to,
        date: shipment.departed?.split("T")[0],
        status: "Moving",
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

  // Helper: badge color
  const getStatusBadge = (status) => {
    switch (status) {
      case "Moving":
        return "bg-blue-100 text-blue-600";
      case "Paused":
        return "bg-yellow-100 text-yellow-600";
      case "Clearance":
        return "bg-green-100 text-green-600";
      case "Withheld Export":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col pt-20">
      {/* Header */}
      <header className="flex items-center justify-between bg-white shadow-md px-8 py-5">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Package className="text-blue-500" /> Admin Dashboard
        </h1>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          <Plus size={18} /> Add Shipment
        </button>
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
                <p className="text-sm text-gray-500 mb-2">
                  Date: {shipment.date}
                </p>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                    shipment.status
                  )}`}
                >
                  {shipment.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-4">
                {/* Status Icons */}
                <div className="flex items-center gap-3">
                  {statuses.map((st) => {
                    const Icon = st.icon;
                    const isActive = shipment.status === st.name;
                    return (
                      <button
                        key={st.name}
                        onClick={() => updateStatus(shipment.id, st.name)}
                        title={`Set to ${st.name}`}
                        className={`transition ${
                          isActive
                            ? `${st.color}`
                            : "text-gray-400 hover:text-gray-500"
                        }`}
                      >
                        <Icon size={20} />
                      </button>
                    );
                  })}
                </div>

                {/* Delete */}
                <button
                  onClick={() => deleteShipment(shipment.id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Delete Shipment"
                >
                  <Trash2 size={18} />
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
