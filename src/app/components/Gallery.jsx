"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Gallery = ({ activeSection }) => {
  // Define images for Premium and Villa sections
  const images = {
    premium: [
      "./gallerysliderimg1.jpg",
      "./gallerysliderimg2.jpg",
      "./gallerysliderimg3.jpg",
      "./gallerysliderimg4.jpg",
    ],
    villa: [
      "./villa1.jpg",
      "./villa2.jpg",
      "./villa3.jpg",
      "./villa4.jpg",
    ],
  };

  // Determine which images to display based on activeSection
  const galleryImages = activeSection === "villa" ? images.villa : images.premium;

  return (
    <div className="md:pt-16 pt-10 md:pb-32 pb-14 relative">
      {/* Conditional title based on activeSection */}
      <h2 className="max-w-[1250px] md:mx-auto md:px-2 px-4 text-primary font-playfairDisplay text-2xl md:w-full w-4/5">
        {activeSection === "villa" ? "Villa Gallery" : "Premium Gallery"}
      </h2>

      <div className="max-w-[1250px] mx-auto md:px-2 px-4 mt-12 relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next",
          }}
          slidesPerView={1}
          loop={true}
          spaceBetween={32}
          speed={500}
        >
          {/* Render images based on activeSection */}
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-[390px] relative overflow-hidden rounded-[30px]">
                <img
                  src={image}
                  alt={`Gallery Image ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="">
          <img
            src="./prevarrow.svg"
            alt="Previous"
            className="gallery-prev absolute md:top-1/2 top-[calc(50%-50px)] cursor-pointer transform -translate-y-1/2 md:-left-[45px] left-2 z-[100] md:size-10 size-8"
          />
          <img
            src="./nextarrow.svg"
            alt="Next"
            className="gallery-next absolute md:top-1/2 top-[calc(50%-50px)] cursor-pointer transform -translate-y-1/2 md:-right-[45px] right-2 z-[100] md:size-10 size-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;