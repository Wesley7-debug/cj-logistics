"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
export default function AddShipmentModal({ onClose }) {
  const [shipmentId, setShipmentId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departed, setDeparted] = useState("");
  const [expected, setExpected] = useState("");
  const [copied, setCopied] = useState(false);
  // Generates a unique shipment ID
  function generateShipmentId() {
    // Format: SH-YYYYMMDD-XXXX (e.g., SH-20251111-AB12)
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase(); // 4 random letters/numbers
    return `SH-${datePart}-${randomPart}`;
  }

  const handleGenerateId = () => {
    const id = generateShipmentId();
    setShipmentId(id);
    setCopied(false);
  };

  const handleCopy = () => {
    if (shipmentId) {
      navigator.clipboard.writeText(shipmentId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !shipmentId ||
      !name ||
      !email ||
      !from ||
      !to ||
      !departed ||
      !expected
    )
      return;

    const payload = {
      shipmentId,
      name,
      email,
      from,
      to,
      departed,
      expected,
    };

    try {
      const res = await fetch("/api/shipments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add shipment");

      // Reset form
      setShipmentId("");
      setName("");
      setEmail("");
      setFrom("");
      setTo("");
      setDeparted("");
      setExpected("");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error adding shipment");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Shipment
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* From Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              From Address
            </label>
            <input
              type="text"
              placeholder="Starting address"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* To Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              To Address
            </label>
            <input
              type="text"
              placeholder="Destination address"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Departed Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Time Departed
            </label>
            <input
              type="datetime-local"
              value={departed}
              onChange={(e) => setDeparted(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Expected Delivery */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Expected Delivery
            </label>
            <input
              type="datetime-local"
              value={expected}
              onChange={(e) => setExpected(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Shipment ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Shipment ID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Click generate"
                value={shipmentId}
                readOnly
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
              />
              <button
                type="button"
                onClick={handleGenerateId}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition"
              >
                Generate
              </button>
              {shipmentId && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`px-3 py-2 rounded-md text-sm border ${
                    copied
                      ? "bg-green-500 text-white"
                      : "border-gray-300 text-gray-700"
                  } transition`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
          >
            Add Shipment
          </button>
        </form>
      </div>
    </div>
  );
}
