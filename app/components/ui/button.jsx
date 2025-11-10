import React from "react";

export default function Button({ title, icon }) {
  return (
    <button className="mt-8 px-6 py-3 bg-black hover:bg-black/50 transition rounded-full font-semibold">
      {title}
    </button>
  );
}
