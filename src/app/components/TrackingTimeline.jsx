'use client';


import React, { useState } from "react";

const TrackingTimeline = () => {
  const [progress, setProgress] = useState(0); // Progress in percentage (0 to 100)

  // Total stages (adjust based on your icons)
  const stages = [
    { icon: "📱", label: "Step 1" },
    { icon: "📅", label: "Step 2" },
    { icon: "🚚", label: "Step 3" },
    { icon: "📦", label: "Step 4" },
  ];

  // SVG path dimensions
  const pathLength = 300; // Adjust based on the rotated U-shape path length

  // Calculate dashoffset based on progress
  const dashOffset = ((100 - progress) / 100) * pathLength;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
     

      {/* SVG Container */}
      <div style={{ position: "relative", width: "320px", height: "200px" }}>
        <svg
          width="1000"
          height="200"
          viewBox="0 0 60 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grey Background Path */}
          <path
            d=" M-550,10  H100 Q200,10 200,160 Q200,310 100,310 H-550"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="8"
          />

          {/* Red Progress Path */}
          {/* <path
            d="M100,10 Q180,10 180,160 Q180,310 100,310"
            fill="none"
            stroke="#ff0000"
            strokeWidth="15"
            strokeDasharray={pathLength}
            strokeDashoffset={dashOffset}
            style={{
              transition: "stroke-dashoffset 0.5s ease-in-out",
            }}
          /> */}
        </svg>

        {/* Icons Positioned Along the Path */}
        <div
          style={{
            position: "absolute",
            top: "5px",
            left: "5px",
            color: progress >= 25 ? "#ff0000" : "#b0b0b0",
          }}
        >
          
        </div>
        <div
          style={{
            position: "absolute",
            top: "5px",
            left: "150px",
            color: progress >= 50 ? "#ff0000" : "#b0b0b0",
          }}
        >
          
        </div>
        <div
          style={{
            position: "absolute",
            top: "150px",
            left: "170px",
            color: progress >= 75 ? "#ff0000" : "#b0b0b0",
          }}
        >
          
        </div>
        <div
          style={{
            position: "absolute",
            top: "305px",
            left: "5px",
            color: progress >= 100 ? "#ff0000" : "#b0b0b0",
          }}
        >
          
        </div>
      </div>

      {/* Progress Controls */}
      {/* <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setProgress((prev) => Math.max(prev - 25, 0))}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={() => setProgress((prev) => Math.min(prev + 25, 100))}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default TrackingTimeline;
