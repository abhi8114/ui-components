"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ModalSectionTwo from "./ModalSectionTwo";

const Sec2Slider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      image: "./story.png",
      heading: "Pre Openings",
      content:
        "We ensure a seamless hotel launch with services like SOP implementation, unique F&B concepts, budgeting, guest technology, and sustainability certifications. From talent acquisition to operational oversight and sales strategies, we align every aspect of your property for exceptional guest experiences and long-term success.",
      background: "blue",
      learnMoreLinkImage: "./arrow.svg",
      learnMoreLinkText: "Learn More",
    },
    {
      image: "https://example.com/image2.jpg",
      heading: "White-labelled full-spectrum third party operations",
      content:
        "We manage daily operations, guest services, sales, marketing, reservations, revenue management, staff training, and cost control under your brand, ensuring quality, profitability, and guest satisfaction",
      background: "url('https://example.com/bg.jpg') center/cover no-repeat",
      learnMoreLinkImage: "./arrow.svg",
      learnMoreLinkText: "Learn More",
    },
    {
      image: "https://example.com/image3.jpg",
      heading: "Technology Integration",
      content:
        "Streamline your hotel operations with advanced Property Management System (PMS) solutions, enabling seamless reservations, inventory management, and efficient day-to-day operations.",
      background: "#4CAF50",
      learnMoreLinkImage: "./arrow.svg",
      learnMoreLinkText: "Learn More",
    },
    {
      image: "https://example.com/image4.jpg",
      heading: "Technical Audits & Quality Control",
      content:
        "Keep your property performing at its best with audits and quality checks.From building systems and energy efficiency to guest rooms and F&B services, we identify improvements and ensure compliance with brand standards.",
      background: "linear-gradient(to bottom, #2b5876, #4e4376)",
      learnMoreLinkImage: "./arrow.svg",
      learnMoreLinkText: "Learn More",
    },
    {
      image: "https://example.com/image4.jpg",
      heading: "Financial Management & Reporting",
      content:
        "Take control of your finances with transparent reports, data insights, and P&L management. Our services optimize profitability, track KPIs, and provide analytics to guide informed decisions across operation .",
      background: "linear-gradient(to bottom, #2b5876, #4e4376)",
      learnMoreLinkImage: "./arrow.svg",
      learnMoreLinkText: "Learn More",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="h-[110vh] w-full bg-[#CDE2CA] py-10 relative">
      {!selectedItem ? (
        // Slider Section
        <div className="ml-[128px] max-w-[1200px] mx-auto ">
          {/* Section Heading */}

          <h2 className="font-cormorant font-normal md:text-[40px] text-[28px] leading-9 md:leading-[40px] mt-5 text-[#2D2D2D] tracking-[-1.2px]">
            Hotel Operation Management
          </h2>

          {/* Swiper Slider */}
          <div className="mt-8  relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={170}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="gap-x-20">
                  <div
                    className="p-8 w-[400px] h-[500px] text-white shadow-lg"
                    style={{ background: item.background }}
                  >
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="mt-8 w-14 h-16 mb-2 "
                    />
                    <h2 className="text-[32px] font-cormorant mb-2 leading-[32px] pr-28">
                      {item.heading}
                    </h2>
                    <p className="mt-4 text-[16px] leading-[24px] mb-4 font-montserrat pr-16">
                      {item.content}
                    </p>
                    <button
                      className="mt-8 flex items-center text-white font-medium hover:underline"
                      onClick={() => setSelectedItem(item)}
                    >
                      <img src={item.learnMoreLinkImage} />
                      <span className="ml-4 text-[14px] leading-[24px] font-montserrat uppercase">
                        {item.learnMoreLinkText}
                      </span>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Dots */}
            <div className="flex w-auto mt-8 space-x-3">
              {data.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer border border-[#447365] transition ${
                    index === activeIndex
                      ? "bg-[#447365] scale-110"
                      : "bg-[#CDE2CA]"
                  }`}
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                ></span>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute bottom-[-30px] right-[110px] transform -translate-y-1/2 z-10 bg-[#2E413B] text-black p-2 rounded-full hover:bg-[#1d2c27] transition"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft />
            </button>
            <button
              className="absolute bottom-[-40px] right-[40px] transform -translate-y-1/2 z-10 bg-[#2E413B] text-white p-3 rounded-full hover:bg-[#1d2c27] transition"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      ) : (
        // Modal Section
        <ModalSectionTwo
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      )}
    </div>
  );
};

export default Sec2Slider;
