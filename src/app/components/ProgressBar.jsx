"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ProgressBar = ({
  trackColor = "#C2202B",
  trackBgColor = "#F8F2F2",
  borderWidth = 8,
  mobBorderWidth = 12,
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
      svg: "/third.svg",
      text: "Access PODs Online",
      position: "bottom",
      stopPercentage: 65, // Specific stopping percentage for this SVG
    },
    {
      svg: "/fourth.svg",
      text: "On-time Delivery as Promised",
      position: "bottom",
      stopPercentage: 82, // Specific stopping percentage for this SVG
    },
    {
      svg: "/fifth.svg",
      text: "Real-time Shipment Tracking",
      position: "bottom",
      stopPercentage: 100, // Specific stopping percentage for this SVG
    },
  ];

  const hardcodedPath = "M-550,10 H100 Q200,10 200,160 Q200,310 100,310 H-550";
  const mobhardCodedPath = "M10,0 L10,600";
  // Calculate the total length of the hardcoded path
  useEffect(() => {
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("d", hardcodedPath);
    setTotalLength(pathElement.getTotalLength());
  }, []);

  const [mobileTotalLength, setMobileTotalLength] = useState(0);
  useEffect(() => {
    // Calculate total length for desktop path
    const desktopPathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    desktopPathElement.setAttribute("d", hardcodedPath);
    setTotalLength(desktopPathElement.getTotalLength());

    // Calculate total length for mobile path
    const mobilePathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    mobilePathElement.setAttribute("d", mobhardCodedPath);
    setMobileTotalLength(mobilePathElement.getTotalLength());
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
      <div className="sm:flex justify-center hidden ">
        <p className="text-[40px]">Our Process</p>
      </div>
      <div className="sticky top-10 hidden sm:block">
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
                      color: "#000000",
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
                    <div className=" w-[170px] mt-6 text-sm text-center">
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
                      color: "#000000",
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
                    <div className="-mt-1   w-[170px] text-center text-sm ">
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
      {/* Progress Indicator for mobile */}
      <div className="block sm:hidden sticky top-10 ">
        <p className="text-[24px] font-semibold flex justify-center ">Our Process</p>
        <div className="block sm:hidden">
      {/* This container will remain fixed until unpinned */}
      
        <div className=" mt-4 flex relative gap-2">
          <div className="">
            <svg
              viewBox="-30 0 100 620"
              width="100%"
              
              preserveAspectRatio="xMidYMid meet"
              className="mt-6 w-[90px] h-[580px] "
            >
              {/* Background Track */}
              <path
                d={mobhardCodedPath}
                fill="none"
                stroke={trackBgColor}
                strokeWidth={mobBorderWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Progress Track */}
              <path
                d={mobhardCodedPath}
                fill="none"
                stroke={trackColor}
                strokeWidth={mobBorderWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={mobileTotalLength}
                strokeDashoffset={Math.max(
                  mobileTotalLength - (mobileTotalLength * currentProgress) / 100,
                  0
                )}
                style={{ transition: "stroke-dashoffset 0.3s ease-in-out" }}
              />
            </svg>
          </div>

          {/* Content section */}
          <div className="w-2/3 px-4 py-4 flex flex-col space-y-10">
            {stopContent.map((step, index) => {
              const isActive = currentProgress >= step.stopPercentage;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={step.svg}
                    alt="Step Icon"
                    className="w-14 h-14 transition-all duration-300"
                    style={{
                      filter: isActive
                        ? "brightness(0) saturate(100%) invert(18%) sepia(70%) saturate(3000%) hue-rotate(340deg) brightness(90%) contrast(90%)"
                        : "grayscale(100%) brightness(80%)",
                    }}
                  />
                  <p className="text-[16px]">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ProgressBar;
