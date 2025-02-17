"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ProgressBar = ({
  trackColor = "#C2202B",
  trackBgColor = "#F8F2F2",
  borderWidth = 8,
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [totalLength, setTotalLength] = useState(0);

  const stopPercentages = [4, 20, 35, 65, 82, 100]; // Stopping percentages for each SVG
  const stopContent = [
    {
      svg: "/sixth.svg",
      text: "Check the Prices and Book your Shipments with AAJ Swift",
      position: "top",
      stopPercentage: 4, // Specific stopping percentage for this SVG
    },
    {
      svg: "/first.svg",
      text: "Know Your Promise Delivery Date before Booking",
      position: "top",
      stopPercentage: 20, // Specific stopping percentage for this SVG
    },
    {
      svg: "/second.svg",
      text: "Shipment Pickup by AAJ Team",
      position: "top",
      stopPercentage: 35, // Specific stopping percentage for this SVG
    },
    {
      svg: "/fifth.svg",
      text: "Real-time Shipment Tracking",
      position: "bottom",
      stopPercentage: 100, // Specific stopping percentage for this SVG
    },
    {
      svg: "/fourth.svg",
      text: "On-time Delivery as Promised",
      position: "bottom",
      stopPercentage: 82, // Specific stopping percentage for this SVG
    },
   
    {
      svg: "/third.svg",
      text: "Access PODs Online",
      position: "bottom",
      stopPercentage: 65, // Specific stopping percentage for this SVG
    },
    
  ];

  const hardcodedPath = "M-550,10 H100 Q200,10 200,160 Q200,310 100,300 H-550";

  // Calculate the total length of the hardcoded path
  useEffect(() => {
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("d", hardcodedPath);
    setTotalLength(pathElement.getTotalLength());
  }, []);

  useEffect(() => {
    const calculateProgress = () => {
      const section = document.getElementById("progress-section");
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrollPosition = window.pageYOffset - sectionTop;

      if (scrollPosition < 0) return setCurrentProgress(0);
      if (scrollPosition > sectionHeight) return setCurrentProgress(100);

      const progress = ((scrollPosition * 1.1) / sectionHeight) * 100;
      setCurrentProgress(progress);
    };

    window.addEventListener("scroll", calculateProgress);
    calculateProgress();

    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <div id="progress-section" className="relative z-50 h-[200vh]">
      <div className="flex justify-center">
        <p className="text-[40px]">Our Process</p>
      </div>
      <div className="sticky top-10">
        <div className="relative">
          {/* Top Content */}
          <div className="absolute top-2 -left-[25px] w-full">
            {stopContent
              .filter((content) => content.position === "top")
              .map((content, index) => {
                const isActive = currentProgress >= content.stopPercentage;
                return (
                  <div
                    key={`content-top-${index}`}
                    className="absolute transform -translate-x-1/2 flex flex-col items-center"
                    style={{
                      left: `${(index + 1) * 25}%`, // Adjust positioning as needed
                      color: isActive ? trackColor : "#6B7280",
                      transition: "color 0.3s ease-in-out",
                    }}
                  >
                    {/* SVG Icon */}
                    <div className="-top-12 absolute">
                      <img
                        src={content.svg}
                        alt={content.text}
                        width="36"
                        height="36"
                        className="w-auto h-[36px]"
                        style={{
                          filter: isActive
                            ? "brightness(0) saturate(100%) invert(18%) sepia(70%) saturate(3000%) hue-rotate(340deg) brightness(90%) contrast(90%)" // Apply the specific filter
                            : "grayscale(100%) brightness(80%)", // Default gray
                        }}
                      />
                    </div>
                    {/* Text */}
                    <div className=" w-[170px] mt-6 text-[16px] font-medium text-center">
                      {content.text}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 -left-[25px] w-full">
            {stopContent
              .filter((content) => content.position === "bottom")
              .map((content, index) => {
                const isActive = currentProgress >= content.stopPercentage;
                return (
                  <div
                    key={`content-bottom-${index}`}
                    className="absolute transform -translate-x-1/2 flex flex-col items-center"
                    style={{
                      left: `${(index + 1) * 25}%`, // Adjust positioning as needed
                      color: isActive ? trackColor : "#6B7280",
                      transition: "color 0.3s ease-in-out",
                    }}
                  >
                    {/* SVG Icon */}
                    <div className="-top-20 absolute">
                      <img
                        src={content.svg}
                        alt={content.text}
                        width="36"
                        height="36"
                        className="w-auto h-10 transition-all duration-300"
                        style={{
                          filter: isActive
                            ? "brightness(0) saturate(100%) invert(18%) sepia(70%) saturate(3000%) hue-rotate(340deg) brightness(90%) contrast(90%)" // Apply the specific filter
                            : "grayscale(100%) brightness(80%)", // Default gray
                        }}
                      />
                    </div>
                    {/* Text */}
                    <div className="top-4  mb-6 w-[170px] text-center text-[16px] font-medium">
                      {content.text}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* SVG Progress Bar */}
          <svg
            className="mt-20"
            viewBox="-800 0 1200 320"
            width="100%"
            height="350"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background Track */}
            <path
              d={hardcodedPath}
              fill="none"
              stroke={trackBgColor}
              strokeWidth={borderWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Progress Track */}
            <path
              d={hardcodedPath}
              fill="none"
              stroke={trackColor}
              strokeWidth={borderWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={totalLength}
              strokeDashoffset={Math.max(
                totalLength - (totalLength * currentProgress) / 100,
                0
              )}
              style={{ transition: "stroke-dashoffset 0.3s ease-in-out" }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;