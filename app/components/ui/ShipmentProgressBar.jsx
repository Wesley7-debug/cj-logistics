"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pausedShipmentTime";

const ShipmentProgressBar = ({ departed, expected, status, shipmentId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    const departedTime = new Date(departed).getTime();
    const expectedTime = new Date(expected).getTime();

    // Helper: calculate progress %
    const calculateProgress = () => {
      let currentTime = Date.now();

      // If paused, use saved timestamp from localStorage if exists
      if (status === "paused") {
        const pausedTime = localStorage.getItem(`${STORAGE_KEY}_${shipmentId}`);
        if (!pausedTime) {
          localStorage.setItem(`${STORAGE_KEY}_${shipmentId}`, currentTime);
        }
        currentTime = localStorage.getItem(`${STORAGE_KEY}_${shipmentId}`);
      } else {
        // If active again, remove saved paused timestamp
        localStorage.removeItem(`${STORAGE_KEY}_${shipmentId}`);
      }

      const totalDuration = expectedTime - departedTime;
      const elapsed = currentTime - departedTime;
      const pct = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);

      setProgress(pct);
    };

    calculateProgress(); // initial calculation
    interval = setInterval(calculateProgress, 1000); // update every second

    return () => clearInterval(interval);
  }, [departed, expected, status, shipmentId]);

  return (
    <div className="w-full mt-4">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Departed: {new Date(departed).toLocaleString()}</span>
        <span>Expected: {new Date(expected).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ShipmentProgressBar;
