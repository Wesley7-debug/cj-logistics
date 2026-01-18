import { connectDB } from "@/libs/connectDB";
import Shipment from "@/app/models/shipment";

// POST: create a new shipment
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      shipmentId,
      name,
      email,
      from,
      to,
      departed,
      expected,
      shipperInfo,
      receiverInfo,
      quantity,
      weight,
      dimensions,
      packageType,
      serviceType,
      originHub,
      currentLocation,
      destinationHub,
      notes,
      paymentMethod,
      totalFreight,
      pickupDateTime,
      comments,
      shipmentType,
      carrierReference,
      status,
    } = body;

    // Validate required fields
    if (
      !shipmentId ||
      !name ||
      !email ||
      !from ||
      !to ||
      !departed ||
      !expected
    ) {
      return new Response(
        JSON.stringify({ error: "All required fields must be provided" }),
        { status: 400 }
      );
    }

    // Create new shipment
    const newShipment = await Shipment.create({
      shipmentId,
      name,
      email,
      from,
      to,
      departed,
      expected,
      status: status || "Transit",
      shipperInfo: shipperInfo || "",
      receiverInfo: receiverInfo || "",

      // Package info
      quantity: quantity || 1,
      weight: weight || 0,
      dimensions: dimensions || { length: 0, width: 0, height: 0 },
      packageType: packageType || "Box",
      serviceType: serviceType || "Standard",
      originHub: originHub || "",
      currentLocation: currentLocation || "",
      destinationHub: destinationHub || "",
      notes: notes || "",

      // Additional info
      paymentMethod: paymentMethod || "",
      totalFreight: totalFreight || 1,
      pickupDateTime: pickupDateTime || null,
      comments: comments || "",
      shipmentType: shipmentType || "Standard",
      carrierReference: carrierReference || "",
    });

    return new Response(JSON.stringify(newShipment), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add shipment" }), {
      status: 500,
    });
  }
}

// GET: fetch all shipments
export async function GET(req) {
  try {
    await connectDB();
    const shipments = await Shipment.find({});
    return new Response(JSON.stringify(shipments), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch shipments" }),
      { status: 500 }
    );
  }
}
