"use client";

import { useState } from "react";

export default function ToggleMenu() {
  const [toggle, setToggle] = useState<"website" | "mobile" | "dashboard">(
    "website"
  );
  return (
    <div>
      <div className="flex overflow-x-auto bg-white p-2 rounded-full max-w-max mx-auto">
        <div
          onClick={() => setToggle("website")}
          className={`px-6 py-2 cursor-pointer whitespace-nowrap rounded-full ${
            toggle === "website"
              ? "bg-[#0C5E5E] text-[#F5F5F5]"
              : "bg-[#F5F5F5] text-[#0B1414]"
          }`}
        >
          Website design
        </div>
        <div
          onClick={() => setToggle("mobile")}
          className={`px-6 py-2 cursor-pointer whitespace-nowrap rounded-full ${
            toggle === "mobile"
              ? "bg-[#0C5E5E] text-[#F5F5F5]"
              : "bg-[#F5F5F5] text-[#0B1414]"
          }`}
        >
          Mobile app design
        </div>
        <div
          onClick={() => setToggle("dashboard")}
          className={`px-6 py-2 cursor-pointer whitespace-nowrap rounded-full ${
            toggle === "dashboard"
              ? "bg-[#0C5E5E] text-[#F5F5F5]"
              : "bg-[#F5F5F5] text-[#0B1414]"
          }`}
        >
          Dashboard design
        </div>
      </div>
    </div>
  );
}
