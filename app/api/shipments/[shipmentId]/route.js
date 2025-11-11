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
        }
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

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { shipmentId } = await params;
    if (!shipmentId) {
      return new Response(
        JSON.stringify({ error: "Shipment ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    let { status } = body;

    // Accepted statuses
    const validStatuses = ["Moving", "Paused", "Clearance", "Withheld"];

    // Automatically convert "Active" → "Moving"
    if (status === "Active") {
      status = "Moving";
    }

    if (!status || !validStatuses.includes(status)) {
      return new Response(JSON.stringify({ error: "Invalid status value" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const updatedShipment = await Shipment.findOneAndUpdate(
      { shipmentId },
      { status },
      { new: true }
    );

    if (!updatedShipment) {
      return new Response(JSON.stringify({ error: "Shipment not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Status updated successfully",
        shipment: updatedShipment,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { shipmentId } = await params;
    if (!shipmentId) {
      return new Response(
        JSON.stringify({ error: "Shipment ID is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const deletedShipment = await Shipment.findOneAndDelete({ shipmentId });

    if (!deletedShipment) {
      return new Response(JSON.stringify({ error: "Shipment not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Shipment deleted successfully",
        shipment: deletedShipment,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error deleting shipment:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
