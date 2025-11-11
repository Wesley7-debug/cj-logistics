import { connectDB } from "@/libs/connectDB";
import Shipment from "@/app/models/shipment";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { shipmentId, name, email, from, to, departed, expected } = body;

    // Validate fields
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
        JSON.stringify({ error: "All fields are required" }),
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
    });

    return new Response(JSON.stringify(newShipment), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add shipment" }), {
      status: 500,
    });
  }
}
// export async function GET() {
//   try {
//     await connectDB();

//     const shipments = await Shipment.find().sort({ createdAt: -1 }); // latest first

//     return new Response(JSON.stringify(shipments), { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch shipments" }),
//       { status: 500 }
//     );
//   }
// }

export async function GET(req) {
  try {
    await connectDB();
    const shipments = await Shipment.find({});
    return new Response(JSON.stringify(shipments), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch shipments" }),
      {
        status: 500,
      }
    );
  }
}
