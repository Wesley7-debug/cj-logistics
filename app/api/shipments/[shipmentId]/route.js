import { connectDB } from "@/libs/connectDB";
import Shipment from "@/app/models/shipment";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { shipmentId } = await params;
    if (!shipmentId) {
      return new Response(
        JSON.stringify({ error: "Shipment ID is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const shipment = await Shipment.findOne({ shipmentId });

    if (!shipment) {
      return new Response(JSON.stringify({ error: "Shipment not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(shipment), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// export async function PUT(req, { params }) {
//   try {
//     await connectDB();

//     const { shipmentId } = await params;

//     if (!shipmentId) {
//       return new Response(
//         JSON.stringify({ error: "Shipment ID is required" }),
//         { status: 400, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     // Parse request body
//     const body = await req.json();

//     // Allowed status enum values
//     const allowedStatuses = [
//       "Transit",
//       "Out for Delivery",
//       "Delivered",
//       "Delayed",
//       "Pending",
//       "Cancelled",
//       "Hold",
//       "Returned",
//     ];

//     // Validate status if present
//     if (body.status && !allowedStatuses.includes(body.status)) {
//       return new Response(JSON.stringify({ error: "Invalid status value" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     // Build update object (only include fields sent by client)
//     const updateData = {
//       ...body,
//       lastUpdated: new Date(),
//     };

//     const updatedShipment = await Shipment.findOneAndUpdate(
//       { shipmentId },
//       updateData,
//       { new: true }
//     );

//     if (!updatedShipment) {
//       return new Response(JSON.stringify({ error: "Shipment not found" }), {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     return new Response(
//       JSON.stringify({
//         message: "Shipment updated successfully",
//         shipment: updatedShipment,
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     return new Response(JSON.stringify({ error: "Server error" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
export async function PUT(req, { params }) {
  try {
    await connectDB();

    // Use whatever name matches your folder structure [id] or [shipmentId]
    const { shipmentId } = await params;

    const body = await req.json();

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

    // Validate status
    if (body.status && !allowedStatuses.includes(body.status)) {
      return new Response(
        JSON.stringify({
          error: `Invalid status: ${body.status}. Must be one of: ${allowedStatuses.join(", ")}`,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const updateData = {
      ...body,
      lastUpdated: new Date(),
    };

    const updatedShipment = await Shipment.findOneAndUpdate(
      { shipmentId },
      { $set: updateData },
      { new: true, runValidators: true },
    );

    if (!updatedShipment) {
      return new Response(JSON.stringify({ error: "Shipment not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Success", shipment: updatedShipment }),
      {
        status: 200,
      },
    );
  } catch (err) {
    console.error("Server Error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
