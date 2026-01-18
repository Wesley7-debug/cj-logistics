import mongoose from "mongoose";

const allowedStatuses = [
  "Transit",
  "Withheld",
  "Custom duty",
  "Clearance",
  "Seized",
  "Delayed",
  "Waiting For Pickup",
  "Paused",
  "On Hold",
  "Arrived",
];
const ShipmentSchema = new mongoose.Schema({
  shipmentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },

  from: { type: String, required: true },
  to: { type: String, required: true },

  departed: { type: Date, required: true },
  expected: { type: Date, required: true },

  // ⭐ Updated Status with your new allowed values
  status: {
    type: String,
    enum: allowedStatuses,
    default: "Transit",
  },

  // ⭐ Package info
  quantity: { type: Number, default: 1 },
  weight: { type: Number, default: 0 },
  dimensions: {
    length: { type: Number, default: 0 },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
  },
  packageType: { type: String, default: "Box" },
  serviceType: { type: String, default: "Standard" },

  originHub: { type: String, default: "" },
  currentLocation: { type: String, default: "" },
  destinationHub: { type: String, default: "" },

  lastUpdated: { type: Date, default: Date.now },
  notes: { type: String, default: "" },

  // ⭐ Full long info
  shipperInfo: { type: String, default: "" }, // full paragraph
  receiverInfo: { type: String, default: "" }, // full paragraph

  // ⭐ Payment, shipment type, pickup, carrier, and comments
  paymentMethod: { type: String, default: "card" },
  totalFreight: { type: Number, default: 0 },
  pickupDateTime: { type: Date },
  comments: { type: String, default: "" },
  shipmentType: { type: String, default: "Standard" },
  carrierReference: { type: String, default: "" }, // tracking ID
});

export default mongoose.models.Shipment ||
  mongoose.model("Shipment", ShipmentSchema);
