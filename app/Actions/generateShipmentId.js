// Generates a unique shipment ID
export default function generateShipmentId() {
  // Format: SH-YYYYMMDD-XXXX (e.g., SH-20251111-AB12)
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase(); // 4 random letters/numbers
  return `SH-${datePart}-${randomPart}`;
}
