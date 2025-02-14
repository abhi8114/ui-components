"use client";

import { useState, useEffect } from "react";
import Image from "next/image";



const ProgressBar = ({
    trackColor = "#c2212e",
    trackBgColor = "#F8F2F2",
    borderWidth = 8,
}) => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const [activeStops, setActiveStops] = useState([false, false, false, false, false, false]);

    const stopPercentages = [4, 20, 35, 65, 82, 100];
    const stopContent = [
        {
            svg: "/sixth.svg",
            text: "Check the Prices and Book your Shipments with AAJ Swift",
            position: "top",
        },
        {
            svg: "/first.svg",
            text: "Know Your Promise Delivery Date before Booking",
            position: "top",
        },
        {
            svg: "/second.svg",
            text: "Shipment Pickup by AAJ Team",
            position: "top",
        },
        {
            svg: "/third.svg",
            text: "Access PODs Online",
            position: "bottom",
        },
        {
            svg: "/fourth.svg",
            text: "On-time Delivery as Promised",
            position: "bottom",
        },
        {
            svg: "/fifth.svg",
            text: "Real-time Shipment Tracking",
            position: "bottom",
        },
    ];

    // Hardcoded SVG path
    const hardcodedPath = "M-550,10 H100 Q200,10 200,160 Q200,310 100,310 H-550";

    // Calculate total length of the hardcoded path
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", hardcodedPath);
    const totalLength = pathElement.getTotalLength();

    // Calculate progress length
    const progressLength = (totalLength * currentProgress) / 100;

    useEffect(() => {
        const calculateProgress = ()=> {
            const section = document.getElementById("progress-section");
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight - window.innerHeight;
            const scrollPosition = window.pageYOffset - sectionTop;

            if (scrollPosition < 0) return setCurrentProgress(0);
            if (scrollPosition > sectionHeight) return setCurrentProgress(100);

            const progress = ((scrollPosition * 1.1) / sectionHeight) * 100;

            const newStops = stopPercentages.map((stopPercent) => progress >= stopPercent);
            setActiveStops(newStops);

            const lastTriggeredStop = stopPercentages.filter((stopPercent) => progress >= stopPercent).pop() || 0;
            setCurrentProgress(lastTriggeredStop);
        };

        window.addEventListener("scroll", calculateProgress);
        calculateProgress();

        return () => window.removeEventListener("scroll", calculateProgress);
    }, []);

    return (
        <div id="progress-section" className="relative z-50 h-[200vh]">
            <div className="sticky top-10">
                <div className="relative">
                    {/* Top Content */}
                    <div className="absolute top-0 -left-[25px] w-full">
                        {stopContent
                            .filter((content) => content.position === "top")
                            .map((content, index) => (
                                <div
                                    key={`content-top-${index}`}
                                    className="absolute transform -translate-x-1/2 flex flex-col items-center"
                                    style={{
                                        left: `${(index + 1) * 15}%`, // Adjust positioning as needed
                                        color: activeStops[index] ? trackColor : "#6B7280",
                                        transition: "color 0.3s ease-in-out",
                                    }}
                                >
                                    <div className="-top-12 absolute">
                                        <img
                                            src={content.svg}
                                            alt={content.text}
                                            width="36"
                                            height="36"
                                            className="w-auto h-[36px]"
                                            style={{
                                                filter: activeStops[index]
                                                    ? "invert(0%) sepia(95%) saturate(10000%) hue-rotate(343deg) brightness(87%) contrast(93%)"
                                                    : "invert(42%) sepia(9%) saturate(13%) hue-rotate(201deg) brightness(97%) contrast(87%)",
                                            }}
                                        />
                                    </div>
                                    <div className="-bottom-10 w-[160px] mt-4 text-sm font-medium text-center">
                                        {content.text}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* SVG Progress Bar */}
                    <svg
                        viewBox="-600 0 1200 320" // Adjust viewBox to fit the hardcoded path
                        width="100%"
                        height="350"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d={hardcodedPath}
                            fill="none"
                            stroke={trackBgColor}
                            strokeWidth={borderWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d={hardcodedPath}
                            fill="none"
                            stroke={trackColor}
                            strokeWidth={borderWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={totalLength}
                            strokeDashoffset={totalLength - progressLength}
                            style={{
                                transition: "stroke-dashoffset 0.5s ease-in-out",
                            }}
                        />
                    </svg>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 -left-[25px] w-full">
                        {stopContent
                            .filter((content) => content.position === "bottom")
                            .map((content, index) => (
                                <div
                                    key={`content-bottom-${index}`}
                                    className="absolute transform -translate-x-1/2 flex flex-col items-center"
                                    style={{
                                        left: `${(index + 1) * 15}%`, // Adjust positioning as needed
                                        color: activeStops[index + 3] ? trackColor : "#6B7280",
                                        transition: "color 0.3s ease-in-out",
                                    }}
                                >
                                    <div className="bottom-20 absolute">
                                        <img
                                            src={content.svg}
                                            alt={content.text}
                                            width="36"
                                            height="36"
                                            className="w-auto h-10 transition-all duration-300"
                                            style={{
                                                filter: activeStops[index + 3]
                                                    ? "invert(0%) sepia(95%) saturate(10000%) hue-rotate(343deg) brightness(87%) contrast(93%)"
                                                    : "invert(42%) sepia(9%) saturate(13%) hue-rotate(201deg) brightness(97%) contrast(87%)",
                                            }}
                                        />
                                    </div>
                                    <div className="top-4 mt-3 w-[120px] text-center text-sm font-medium">
                                        {content.text}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;