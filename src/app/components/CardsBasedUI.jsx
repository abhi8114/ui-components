"use client";
import React, { useState } from "react";
import Gallery from "./Gallery";

const premiumFeatures = [
  {
    imgSrc: "./svg1.svg",
    text: "High Wooden Ceilings for warmth and a cosy ambience",
  },
  { imgSrc: "./svg2.svg", text: "Well-appointed rain showers" },
  { imgSrc: "./svg3.svg", text: "Geysers" },
  {
    imgSrc: "./svg4.svg",
    text: "Small Pantry with: Fridge, Microwave, Tea and coffee station",
  },
  {
    imgSrc: "./svg5.svg",
    text: "Private Balcony with stunning mountain views",
  },
];

const villaFeatures = [
  {
    imgSrc: "./svg1.svg",
    text: "Luxury Living Space with Premium Furnishings",
  },
  { imgSrc: "./svg2.svg", text: "Private Pool and Garden Area" },
  { imgSrc: "./svg3.svg", text: "Modern Kitchen Facilities" },
  {
    imgSrc: "./svg4.svg",
    text: "Two Spacious Bedrooms with Ensuite Bathrooms",
  },
  {
    imgSrc: "./svg5.svg",
    text: "Panoramic Mountain Views from Every Room",
  },
  {
    imgSrc: "./svg5.svg",
    text: "Panoramic Mountain Views from Every Room",
  },
];

const CardsBasedUI = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handlePremiumClick = () => {
    setActiveSection(activeSection === "premium" ? null : "premium");
  };

  const handleVillasClick = () => {
    setActiveSection(activeSection === "villa" ? null : "villa");
  };

  const getContent = (type = "premium") => {
    const isVilla = type === "villa";
    return {
      title: isVilla ? "2 Bedroom Villa" : "Premium Room",
      mainImage: isVilla ? "./villa-1.jpg" : "./pr-1.jpg",
      sideImage1: isVilla ? "./villa-living.jpg" : "./livingroom.jpg",
      sideImage2: isVilla ? "./villa-dining.jpg" : "./livingroom-2.jpg",
      description: isVilla
        ? "Set on Dotiyal Nail Deghat Road, Bajkhet, in the heart of the Jorasi Range, Friendship Lane is your luxury villa retreat. Our exclusive villas offer spacious living with panoramic Himalayan views, private gardens, and modern amenities for an unforgettable stay."
        : "Set on Dotiyal Nail Deghat Road, Bajkhet, in the heart of the Jorasi Range, Friendship Lane is your peaceful home away from home. This estate has been operational since 2022 and features seven charming cottages. Each offers two-bedroom apartments with captivating Himalayan views from private balconies and gardens.",
      featuredImage: isVilla ? "./villa-exterior.jpg" : "./premium-room.jpg",
      features: isVilla ? villaFeatures : premiumFeatures,
    };
  };

  const renderContent = (type = "premium") => {
    const content = getContent(type);
    return (
      <div className="px-4 md:px-0">
        {/* Title */}
        <img src="./greenleaf.png" alt="green leaf" className="absolute left-0 md:-mt-12 w-16 h-16" />
        <img src="./left-leaf.png" alt="green leaf" className="absolute left-0 md:-mt-2 -mt-8 w-16 h-16 md:w-32 md:h-32" />
        <p className="mt-10 md:mt-14 text-center md:text-left md:ml-36 text-3xl md:text-[48px] font-semibold">
          {content.title}
        </p>
        <div className="mt-6 mx-auto md:ml-[140px] max-w-[1280px] h-[2px] bg-black"></div>

        {/* Images Grid */}
        <div className="mx-auto md:max-w-[700px] lg:max-w-[1024px]">
          <div className="flex flex-col md:flex-row gap-7 mt-10 md:mt-28">
            <div className="w-full md:w-[60%]">
              <img
                src={content.mainImage}
                alt="room"
                className="w-full h-[300px] md:h-[430px] "
              />
            </div>
            <div className="w-full md:w-[40%] grid grid-cols-2 gap-2">
              <img
                src={content.sideImage1}
                alt="room"
                className="w-full h-[150px] md:h-[304px] "
              />
              <img
                src={content.sideImage2}
                alt="room"
                className="w-full h-[150px] md:h-[304px]"
              />
              <img
                src="./cloud.png"
                alt="cloud"
                className="absolute md:right-2 md:mt-48 w-16 h-16 right-0 mt-28 md:w-40 md:h-40 xl:w-48 xl:h-48 xl:right-32"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-10 md:mt-28">
            <img src="./goldleaf.png" alt=""  className="w-16 md:w-40 absolute left-0 mt-24" />
            <p className="text-lg md:text-[20px] leading-7 md:leading-10 text-center md:text-left md:pr-20">
              {content.description}
            </p>
            
          </div>

          {/* Featured Image and Features */}
          <div className="flex flex-col md:flex-row mt-10 md:mt-28 gap-10">
            <div className="w-full md:w-2/3 h-full relative">
              <img
                src={content.featuredImage}
                alt="room"
                className="w-full h-[400px] md:h-[700px] "
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white border border-white rounded-full text-lg md:text-[24px] h-12 md:h-16 w-36 md:w-48">
                BOOK NOW
              </button>
            </div>
            <div className="w-full md:w-1/3 space-y-8 lg:space-y-16">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className="px-4 lg:px-6 flex items-center gap-4 md:gap-4 lg:gap-6"
                >
                  <img
                    src={feature.imgSrc}
                    alt="icon"
                    className="w-12 h-12 lg:w-16 lg:h-16"
                  />
                  <p className="text-base md:text-lg text-gray-800">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-10 md:mt-20 max-w-[1024px] mx-auto">
          <Gallery />
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full gap-[2px] relative">
        {/* Premium Room */}
        <div
          className={`relative transition-all duration-500 ease-in-out ${
            activeSection === "premium"
              ? "w-full"
              : activeSection === "villa"
              ? "hidden"
              : "w-full md:w-[45%]"
          }`}
        >
          <img
            src="./premiumrooms.jpg"
            alt="premium-rooms"
            className="w-full h-[300px] md:h-[900px] "
          />
          <button
            onClick={handlePremiumClick}
            className="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-12 h-12 md:w-24 md:h-24 border-2 md:border-[3px] border-white rounded-full text-white text-xl md:text-2xl flex items-center justify-center shadow-lg"
          >
            {activeSection === "premium" ? "←" : "➜"}
          </button>
        </div>

        {/* Villas */}
        <div
          className={`relative transition-all duration-500 ease-in-out ${
            activeSection === "villa"
              ? "w-full"
              : activeSection === "premium"
              ? "hidden"
              : "w-full md:w-[55%]"
          }`}
        >
          <img
            src="./villas.jpg"
            alt="villas"
            className="w-full h-[300px] md:h-[900px] "
          />
          <button
            onClick={handleVillasClick}
            className="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-12 h-12 md:w-24 md:h-24 border-2 md:border-[3px] border-white rounded-full text-white text-xl md:text-2xl flex items-center justify-center shadow-lg"
          >
            {activeSection === "villa" ? "←" : "➜"}
          </button>
        </div>
      </div>

      {/* Content Section */}
      {renderContent(activeSection || "premium")}
    </div>
  );
};

export default CardsBasedUI;
