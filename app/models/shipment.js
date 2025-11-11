// import mongoose from "mongoose";

// const ShipmentSchema = new mongoose.Schema(
//   {
//     shipmentId: {
//       type: String,
//       required: true,
//       unique: true, // ensure no duplicates
//       trim: true,
//     },
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//     },
//     from: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     to: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     departed: {
//       type: Date,
//       required: true,
//     },
//     expected: {
//       type: Date,
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["Active", "Paused", "Delivered"],
//       default: "Active",
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true, // adds updatedAt and createdAt automatically
//   }
// );

// export default mongoose.models.Shipment ||
//   mongoose.model("Shipment", ShipmentSchema);
import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema({
  shipmentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departed: { type: Date, required: true },
  expected: { type: Date, required: true },
  status: { type: String, default: "Active" }, // Added status field
});

export default mongoose.models.Shipment ||
  mongoose.model("Shipment", ShipmentSchema);
