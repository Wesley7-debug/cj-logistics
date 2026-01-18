"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ShipmentMap from "@/app/components/ui/ShipmentMap";
import ShipmentProgressBar from "@/app/components/ui/ShipmentProgressBar";
import {
  Truck,
  ArrowBigRightDash,
  CheckCircle2,
  AlarmClock,
  Timer,
  XCircle,
  PauseCircle,
  RotateCcw,
} from "lucide-react";

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

const STATUS_ICONS = {
  Transit: <Truck size={16} />,
  "Out for Delivery": <ArrowBigRightDash size={16} />,
  Delivered: <CheckCircle2 size={16} />,
  Delayed: <AlarmClock size={16} />,
  Pending: <Timer size={16} />,
  Cancelled: <XCircle size={16} />,
  Hold: <PauseCircle size={16} />,
  Returned: <RotateCcw size={16} />,
};

const TrackShipmentPage = () => {
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const params = useParams();
  const { shipmentId } = params;

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
        console.log(data);
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
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-indigo-600 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <p className="p-8 text-center text-red-600 font-medium text-lg">
        {error}
      </p>
    );

  if (!shipment)
    return (
      <p className="p-8 text-center text-gray-500 font-medium">
        Shipment not found
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center pt-20 space-y-6">
      {/* TOP CARD */}
      <div className="w-full max-w-4xl bg-white shadow-sm rounded-xl p-6 border border-gray-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Tracking: {shipment.shipmentId}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Departed:{" "}
              <span className="text-gray-700 font-medium">
                {shipment.departed}
              </span>{" "}
              • Email:{" "}
              <span className="text-indigo-600 font-medium">
                {shipment.email}
              </span>
            </p>
          </div>

          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full ${
              STATUS_STYLES[shipment.status]
            }`}
          >
            {STATUS_ICONS[shipment.status]}
            {shipment.status}
          </span>
        </div>

        {/* SHIPPER INFO */}
        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="font-semibold text-gray-800">Shipper Information</p>
          <p className="text-gray-600">
            {shipment.shipperInfo || "No shipper information available"}
          </p>
        </div>

        {/* RECEIVER INFO */}
        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="font-semibold text-gray-800">Receiver Information</p>
          <p className="text-gray-600">
            {shipment.receiverInfo || "No receiver information available"}
          </p>
        </div>

        {/* PACKAGE & PAYMENT INFO */}
        <div className="mt-4 border-t border-gray-200 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-800">Package Type</p>
            <p className="text-gray-600">{shipment.packageType}</p>

            <p className="mt-2 font-semibold text-gray-800">Quantity</p>
            <p className="text-gray-600">{shipment.quantity}</p>

            <p className="mt-2 font-semibold text-gray-800">Shipment Type</p>
            <p className="text-gray-600">{shipment.shipmentType || "N/A"}</p>

            <p className="mt-2 font-semibold text-gray-800">Payment Method</p>
            <p className="text-gray-600">{shipment.paymentMethod || "N/A"}</p>

            <p className="mt-2 font-semibold text-gray-800">Total Freight</p>
            <p className="text-gray-600">{shipment.totalFreight || "1"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Service Type</p>
            <p className="text-gray-600">{shipment.serviceType}</p>

            <p className="mt-2 font-semibold text-gray-800">Origin</p>
            <p className="text-gray-600">{shipment.originHub || "N/A"}</p>

            <p className="mt-2 font-semibold text-gray-800">Destination</p>
            <p className="text-gray-600">{shipment.destinationHub || "N/A"}</p>

            <p className="mt-2 font-semibold text-gray-800">
              Carrier Reference
            </p>
            <p className="text-gray-600">{shipment.shipmentId || "N/A"}</p>

            {shipment.comments && (
              <>
                <p className="mt-2 font-semibold text-gray-800">Comments</p>
                <p className="text-gray-600">{shipment.comments}</p>
              </>
            )}
          </div>
        </div>

        {/* NOTES */}
        {shipment.notes && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <p className="font-semibold text-gray-800">Notes</p>
            <p className="text-gray-600">{shipment.notes}</p>
          </div>
        )}

        {/* PROGRESS BAR */}
        <div className="mt-4">
          <ShipmentProgressBar
            departed={shipment.departed}
            expected={shipment.expected}
            status={shipment.status}
          />
        </div>
      </div>

      {/* MAP */}
      <div className="w-full max-w-4xl bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden h-80">
        {shipment && <ShipmentMap shipment={shipment} />}
      </div>
    </div>
  );
};

export default TrackShipmentPage;
