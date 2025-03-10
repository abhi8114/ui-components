"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ModalSection from "./ModalSection";

const SecSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      image: "./story.png",
      heading: "Brand Story and Narrative",
      content:
        "Your brand defines how guests perceive your property. We craft cohesive identities through engaging websites, stunning visuals, and tailored strategies to ensure your brand tells a story that resonates with guests and meets market demands.",
      background: "linear-gradient(to right, #ff7e5f, #feb47b)",
      learnMoreLinkImage: "./arrow.svg",
      learnMoreLinkText: "Learn More",
    },
    {
      image: "https://example.com/image2.jpg",
      heading: "Land Acquisition",
      content:
        "Identify and secure prime locations for hospitality projects, ensuring alignment with market demand, project concept, and long-term investment goals. Assist in due diligence, negotiations, and compliance to streamline the acquisition process.",
      background: "url('https://example.com/bg.jpg') center/cover no-repeat",
    },
    {
      image: "https://example.com/image3.jpg",
      heading: "Architecture & Interior Concept",
      content:
        "Develop bespoke architectural and interior design concepts that align with the property’s brand identity and guest experience vision. Focus on functionality, aesthetics, and sustainability to create spaces that inspire and engage.",
      background: "#4CAF50",
    },
    {
      image: "https://example.com/image4.jpg",
      heading: "Stand-alone F&B concepts & operations",
      content:
        "Create distinct food and beverage concepts that reflect the target audiences and location. Focus on practical operations, appealing menus, and memorable dining experiences.",
      background: "linear-gradient(to bottom, #2b5876, #4e4376)",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Website Design, Development & Management",
      description:
        "Boost your online presence with custom, user-friendly websites designed to engage visitors, enhance your brand, and elevate your hotel’s reputation.",
      img: "./image.png",
    },
    {
      title: "Professional Photography and Videography",
      description:
        "High-quality visuals to showcase your brand, capture moments, and create a lasting impression.",
      img: "/photography.jpg",
    },
    {
      title: "Brand Positioning & Marketing Strategy",
      description:
        "Strategic branding and marketing solutions tailored to establish and grow your business presence.",
      img: "/brand-strategy.jpg",
    },
    {
      title: "addtional services",
      description:
        "Strategic branding and marketing solutions tailored to establish and grow your business presence.",
      img: "/brand-strategy.jpg",
    },
    {
      title: "additional services 2 ",
      description:
        "Strategic branding and marketing solutions tailored to establish and grow your business presence.",
      img: "/brand-strategy.jpg",
    },
  ];

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="h-auto w-full bg-[#447365] py-10 relative">
      {!selectedItem ? (
        // Slider Section
        <div className="ml-[32px]  md:ml-[128px] max-w-[1200px] mx-auto ">
          {/* Section Heading */}
          <span className="bg-[#2E413B] py-1 px-2 tracking-wide text-white uppercase font-montserrat text-xs rounded-md">
            OUR OFFERINGS
          </span>
          <h2 className="font-cormorant font-normal md:text-[40px] text-[28px] md:leading-[48px] mt-5 text-white leading-[36px] pr-10 md:pr-0">
            Hospitality Concept Creation
          </h2>

          {/* Swiper Slider */}
          <div className="md:mt-8 mt-4  relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={120}
              slidesPerView={1}
              breakpoints={{
  
                375: { slidesPerView: 1.4 },
                425: { slidesPerView: 1.4 },
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
                    className="p-8 w-[300px] h-[480px]  md:w-[400px] md:h-[500px] text-white shadow-lg"
                    style={{ background: item.background }}
                  >
                    <img
                      src={item.image}
                      alt={item.heading}
                      className=" md:mt-11 w-14 h-16 mb-4 "
                    />
                    <h2 className="text-[24px] leading-[28px] md:text-[32px] font-cormorant mb-2 md:leading-[32px] pr-12 md:pr-28 ">
                      {item.heading}
                    </h2>
                    <p className="mt-4 text-[14px]  md:text-[16px] leading-[24px] mb-4 font-montserrat  pr-12 md:pr-16">
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
            <div className="flex w-[80px] mt-8 space-x-3">
              {data.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer border border-[#FFFFFB] transition ${
                    index === activeIndex
                      ? "bg-white scale-110"
                      : "bg-[#447365]"
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
        <ModalSection
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          services={services}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      )}
    </div>
  );
};

export default SecSlider;
