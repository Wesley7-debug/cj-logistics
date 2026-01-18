// "use client";

// import React, { useState } from "react";
// import { X } from "lucide-react";

// export default function AddShipmentModal({ onClose }) {
//   // Original fields
//   const [shipmentId, setShipmentId] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [departed, setDeparted] = useState("");
//   const [expected, setExpected] = useState("");

//   // New shipment details
//   const [quantity, setQuantity] = useState(1);
//   const [weight, setWeight] = useState(0);
//   const [length, setLength] = useState(0);
//   const [width, setWidth] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [packageType, setPackageType] = useState("Box");
//   const [serviceType, setServiceType] = useState("Standard");
//   const [originHub, setOriginHub] = useState("");
//   const [currentLocation, setCurrentLocation] = useState("");
//   const [destinationHub, setDestinationHub] = useState("");
//   const [notes, setNotes] = useState("");

//   // Full-page info fields
//   const [shipperInfo, setShipperInfo] = useState("");
//   const [receiverInfo, setReceiverInfo] = useState("");

//   // Additional new fields
//   const [paymentMethod, setPaymentMethod] = useState("Credit Card");
//   const [totalFreight, setTotalFreight] = useState(0);
//   const [pickupDateTime, setPickupDateTime] = useState("");
//   const [comments, setComments] = useState("");
//   const [shipmentType, setShipmentType] = useState("Air Cargo");
//   const [carrierReference, setCarrierReference] = useState("");

//   const [copied, setCopied] = useState(false);

//   function generateShipmentId() {
//     const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
//     const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
//     return `SH-${datePart}-${randomPart}`;
//   }

//   const handleGenerateId = () => {
//     const id = generateShipmentId();
//     setShipmentId(id);
//     setCopied(false);
//   };

//   const handleCopy = () => {
//     if (shipmentId) {
//       navigator.clipboard.writeText(shipmentId);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !shipmentId ||
//       !name ||
//       !email ||
//       !from ||
//       !to ||
//       !departed ||
//       !expected
//     )
//       return;

//     const payload = {
//       shipmentId,
//       name,
//       email,
//       from,
//       to,
//       departed,
//       expected,
//       quantity,
//       weight,
//       dimensions: { length, width, height },
//       packageType,
//       serviceType,
//       originHub,
//       currentLocation,
//       destinationHub,
//       notes,
//       shipperInfo,
//       receiverInfo,
//       paymentMethod,
//       totalFreight,
//       pickupDateTime,
//       comments,
//       shipmentType,
//       carrierReference,
//       status: "Transit",
//     };

//     try {
//       const res = await fetch("/api/shipments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Failed to add shipment");

//       // Reset all fields
//       setShipmentId("");
//       setName("");
//       setEmail("");
//       setFrom("");
//       setTo("");
//       setDeparted("");
//       setExpected("");
//       setQuantity(1);
//       setWeight(0);
//       setLength(0);
//       setWidth(0);
//       setHeight(0);
//       setPackageType("Box");
//       setServiceType("Standard");
//       setOriginHub("");
//       setCurrentLocation("");
//       setDestinationHub("");
//       setNotes("");
//       setShipperInfo("");
//       setReceiverInfo("");
//       setPaymentMethod("Credit Card");
//       setTotalFreight(0);
//       setPickupDateTime("");
//       setComments("");
//       setShipmentType("Air Cargo");
//       setCarrierReference("");

//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Error adding shipment");
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//       <div className="bg-white rounded-xl max-h-screen overflow-scroll shadow-xl w-full max-w-md p-8 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//           Add New Shipment
//         </h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>
//           {/* Original fields */}
//           <Input
//             label="Name"
//             value={name}
//             setter={setName}
//             placeholder="Full name"
//           />
//           <Input
//             label="Email"
//             type="email"
//             value={email}
//             setter={setEmail}
//             placeholder="Email"
//           />
//           <Input
//             label="From Address"
//             value={from}
//             setter={setFrom}
//             placeholder="Starting address"
//           />
//           <Input
//             label="To Address"
//             value={to}
//             setter={setTo}
//             placeholder="Destination address"
//           />
//           <Input
//             label="Time Departed"
//             type="datetime-local"
//             value={departed}
//             setter={setDeparted}
//           />
//           <Input
//             label="Expected Delivery"
//             type="datetime-local"
//             value={expected}
//             setter={setExpected}
//           />

//           {/* Shipment ID */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Shipment ID
//             </label>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={shipmentId}
//                 readOnly
//                 placeholder="Click generate"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-black text-sm"
//               />
//               <button
//                 type="button"
//                 onClick={handleGenerateId}
//                 className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm"
//               >
//                 Generate
//               </button>
//               {shipmentId && (
//                 <button
//                   type="button"
//                   onClick={handleCopy}
//                   className={`px-3 py-2 rounded-md text-sm border ${
//                     copied
//                       ? "bg-green-500 text-white"
//                       : "border-gray-300 text-gray-700"
//                   }`}
//                 >
//                   {copied ? "Copied!" : "Copy"}
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* New shipment details */}
//           <Input
//             label="Quantity"
//             type="number"
//             value={quantity}
//             setter={setQuantity}
//           />
//           <Input
//             label="Weight (kg)"
//             type="number"
//             value={weight}
//             setter={setWeight}
//           />

//           <Input
//             label="Package Type"
//             value={packageType}
//             setter={setPackageType}
//             placeholder="Box, Envelope…"
//           />
//           <Input
//             label="Service Type"
//             value={serviceType}
//             setter={setServiceType}
//             placeholder="Standard / Express"
//           />
//           <Input label="Origin Hub" value={originHub} setter={setOriginHub} />
//           <Input
//             label="Current Location"
//             value={currentLocation}
//             setter={setCurrentLocation}
//           />
//           <Input
//             label="Destination Hub"
//             value={destinationHub}
//             setter={setDestinationHub}
//           />

//           {/* Notes */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Notes
//             </label>
//             <textarea
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               className="w-full h-20 border border-gray-300 rounded-md px-3 py-2 text-black text-sm"
//               placeholder="Optional notes…"
//             />
//           </div>

//           {/* Shipper Info */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Shipper Information
//             </label>
//             <textarea
//               value={shipperInfo}
//               onChange={(e) => setShipperInfo(e.target.value)}
//               className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 text-black text-sm"
//               placeholder="Full shipper information…"
//             />
//           </div>

//           {/* Receiver Info */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Receiver Information
//             </label>
//             <textarea
//               value={receiverInfo}
//               onChange={(e) => setReceiverInfo(e.target.value)}
//               className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 text-black text-sm"
//               placeholder="Full receiver information…"
//             />
//           </div>

//           {/* Additional new fields */}
//           <Input
//             label="Payment Method"
//             value={paymentMethod}
//             setter={setPaymentMethod}
//             placeholder="Credit Card, Cash…"
//           />
//           <Input
//             label="Total Freight ($)"
//             type="number"
//             value={totalFreight}
//             setter={setTotalFreight}
//           />
//           <Input
//             label="Pickup Date & Time"
//             type="datetime-local"
//             value={pickupDateTime}
//             setter={setPickupDateTime}
//           />

//           <Input
//             label="Shipment Type"
//             value={shipmentType}
//             setter={setShipmentType}
//             placeholder="Air Cargo, Sea, Road…"
//           />
//           <Input
//             label="Carrier Reference / Tracking ID"
//             value={carrierReference}
//             setter={setCarrierReference}
//             placeholder="Tracking ID…"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
//           >
//             Add Shipment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// // Reusable Input component
// function Input({
//   label,
//   value,
//   setter,
//   type = "text",
//   placeholder = "",
//   short = false,
// }) {
//   return (
//     <div className={short ? "" : "w-full"}>
//       {label && (
//         <label className="block text-gray-700 font-medium mb-1">{label}</label>
//       )}
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => setter(e.target.value)}
//         placeholder={placeholder}
//         className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm"
//       />
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AddShipmentModal({ onClose, onAdd, initialData }) {
  // Check if we are editing or adding
  const isEdit = !!initialData;

  // State initialization
  // If initialData exists, we populate; otherwise, we use defaults
  const [shipmentId, setShipmentId] = useState(initialData?.id || "");
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [from, setFrom] = useState(initialData?.from || "");
  const [to, setTo] = useState(initialData?.to || "");

  // Format dates for datetime-local input (YYYY-MM-DDTHH:MM)
  const [departed, setDeparted] = useState(
    initialData?.departed ? initialData.departed.slice(0, 16) : "",
  );
  const [expected, setExpected] = useState(
    initialData?.expected ? initialData.expected.slice(0, 16) : "",
  );

  const [quantity, setQuantity] = useState(initialData?.quantity || 1);
  const [weight, setWeight] = useState(initialData?.weight || 0);
  const [length, setLength] = useState(initialData?.dimensions?.length || 0);
  const [width, setWidth] = useState(initialData?.dimensions?.width || 0);
  const [height, setHeight] = useState(initialData?.dimensions?.height || 0);
  const [packageType, setPackageType] = useState(
    initialData?.packageType || "Box",
  );
  const [serviceType, setServiceType] = useState(
    initialData?.serviceType || "Standard",
  );
  const [originHub, setOriginHub] = useState(initialData?.originHub || "");
  const [currentLocation, setCurrentLocation] = useState(
    initialData?.currentLocation || "",
  );
  const [destinationHub, setDestinationHub] = useState(
    initialData?.destinationHub || "",
  );
  const [notes, setNotes] = useState(initialData?.notes || "");
  const [shipperInfo, setShipperInfo] = useState(
    initialData?.shipperInfo || "",
  );
  const [receiverInfo, setReceiverInfo] = useState(
    initialData?.receiverInfo || "",
  );
  const [paymentMethod, setPaymentMethod] = useState(
    initialData?.paymentMethod || "Credit Card",
  );
  const [totalFreight, setTotalFreight] = useState(
    initialData?.totalFreight || 0,
  );
  const [pickupDateTime, setPickupDateTime] = useState(
    initialData?.pickupDateTime ? initialData.pickupDateTime.slice(0, 16) : "",
  );
  const [comments, setComments] = useState(initialData?.comments || "");
  const [shipmentType, setShipmentType] = useState(
    initialData?.shipmentType || "Air Cargo",
  );
  const [carrierReference, setCarrierReference] = useState(
    initialData?.carrierReference || "",
  );

  const [copied, setCopied] = useState(false);

  function generateShipmentId() {
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `SH-${datePart}-${randomPart}`;
  }

  const handleGenerateId = () => {
    if (isEdit) return; // Prevent changing ID during edit
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
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const payload = {
      shipmentId,
      name,
      email,
      from,
      to,
      departed,
      expected,
      quantity,
      weight,
      dimensions: { length, width, height },
      packageType,
      serviceType,
      originHub,
      currentLocation,
      destinationHub,
      notes,
      shipperInfo,
      receiverInfo,
      paymentMethod,
      totalFreight,
      pickupDateTime,
      comments,
      shipmentType,
      carrierReference,
      status: initialData?.status || "Transit",
    };

    try {
      // Switch between POST and PUT based on mode
      const response = await fetch(
        isEdit ? `/api/shipments/${shipmentId}` : "/api/shipments",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) throw new Error("Failed to save shipment");

      const savedData = await response.json();

      // If your dashboard has a callback to update UI, use it
      if (onAdd) onAdd(savedData);

      onClose();
    } catch (err) {
      console.error(err);
      alert(`Error ${isEdit ? "updating" : "adding"} shipment`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-h-[90vh] overflow-y-auto shadow-xl w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {isEdit ? "Edit Shipment" : "Add New Shipment"}
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input
            label="Name"
            value={name}
            setter={setName}
            placeholder="Full name"
          />
          <Input
            label="Email"
            type="email"
            value={email}
            setter={setEmail}
            placeholder="Email"
          />
          <Input
            label="From Address"
            value={from}
            setter={setFrom}
            placeholder="Starting address"
          />
          <Input
            label="To Address"
            value={to}
            setter={setTo}
            placeholder="Destination address"
          />
          <Input
            label="Time Departed"
            type="datetime-local"
            value={departed}
            setter={setDeparted}
          />
          <Input
            label="Expected Delivery"
            type="datetime-local"
            value={expected}
            setter={setExpected}
          />

          {/* Shipment ID Section */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Shipment ID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={shipmentId}
                readOnly
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-black text-sm"
              />
              {!isEdit && (
                <button
                  type="button"
                  onClick={handleGenerateId}
                  className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm"
                >
                  Generate
                </button>
              )}
              <button
                type="button"
                onClick={handleCopy}
                className={`px-3 py-2 rounded-md text-sm border ${copied ? "bg-green-500 text-white" : "border-gray-300 text-gray-700"}`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Quantity"
              type="number"
              value={quantity}
              setter={setQuantity}
            />
            <Input
              label="Weight (kg)"
              type="number"
              value={weight}
              setter={setWeight}
            />
          </div>

          <Input
            label="Package Type"
            value={packageType}
            setter={setPackageType}
          />
          <Input
            label="Service Type"
            value={serviceType}
            setter={setServiceType}
          />
          <Input label="Origin Hub" value={originHub} setter={setOriginHub} />
          <Input
            label="Current Location"
            value={currentLocation}
            setter={setCurrentLocation}
          />
          <Input
            label="Destination Hub"
            value={destinationHub}
            setter={setDestinationHub}
          />

          <Textarea
            label="Notes"
            value={notes}
            setter={setNotes}
            placeholder="Optional notes..."
          />
          <Textarea
            label="Shipper Information"
            value={shipperInfo}
            setter={setShipperInfo}
            height="h-32"
          />
          <Textarea
            label="Receiver Information"
            value={receiverInfo}
            setter={setReceiverInfo}
            height="h-32"
          />

          <Input
            label="Payment Method"
            value={paymentMethod}
            setter={setPaymentMethod}
          />
          <Input
            label="Total Freight ($)"
            type="number"
            value={totalFreight}
            setter={setTotalFreight}
          />
          <Input
            label="Pickup Date & Time"
            type="datetime-local"
            value={pickupDateTime}
            setter={setPickupDateTime}
          />
          <Input
            label="Shipment Type"
            value={shipmentType}
            setter={setShipmentType}
          />
          <Input
            label="Tracking / Carrier Ref"
            value={carrierReference}
            setter={setCarrierReference}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors"
          >
            {isEdit ? "Update Shipment" : "Add Shipment"}
          </button>
        </form>
      </div>
    </div>
  );
}

// Helper components for clean code
function Input({ label, value, setter, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setter(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}

function Textarea({ label, value, setter, placeholder = "", height = "h-20" }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => setter(e.target.value)}
        placeholder={placeholder}
        className={`w-full ${height} border border-gray-300 rounded-md px-3 py-2 text-black text-sm focus:ring-2 focus:ring-blue-500 outline-none`}
      />
    </div>
  );
}
