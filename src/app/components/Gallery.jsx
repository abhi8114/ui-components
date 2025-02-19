"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Gallery = () => {
  const images = [
    "./gallerysliderimg1.jpg",
    "./gallerysliderimg2.jpg",
    "./gallerysliderimg3.jpg",
    "./gallerysliderimg4.jpg",
    "./gallerysliderimg4.jpg",
  ];

  const splitImageArrays = [images.slice(0, 4), images.slice(4, 8)];

  return (
    <div className="md:pt-16 pt-10 md:pb-32 pb-14 relative">
      
      
      {/* Motfi end */}

      <h2 className="max-w-[1250px] md:mx-auto md:px-2 px-4 text-primary font-playfairDisplay text-2xl md:w-full w-4/5">
        Friendship Lane Gallery
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
          freeMode={true}
          spaceBetween={32}
          speed={500}
          breakpoints={{
            767: {
              speed: 1000,
            },
          }}
        >
          {window.innerWidth > 1024 &&
            splitImageArrays.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="grid items-center grid-cols-4 gap-8">
                  {/* Frame 1 */}
                  <div className="h-[390px] relative overflow-hidden rounded-[30px]">
                    <img
                      src={image[0]}
                      alt={`Gallery Image ${index}1`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Frame 2 */}
                  <div className="h-[275px] relative overflow-hidden rounded-[30px]">
                    <img
                      src={image[1]}
                      alt={`Gallery Image ${index}2`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Frame 3 */}
                  <div className="h-[390px] relative overflow-hidden rounded-[30px]">
                    <img
                      src={image[2]}
                      alt={`Gallery Image ${index}3`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Frame 4 */}
                  <div className="h-[275px] relative overflow-hidden rounded-[30px]">
                    <img
                      src={image[3]}
                      alt={`Gallery Image ${index}4`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

          {/* Mobile */}
          {window.innerWidth <= 1024 &&
            images.map((image, index) => (
              <SwiperSlide key={index} className="pb-24 px-8 rounded-[30px]">
                <div className="h-[250px] relative overflow-hidden rounded-[30px] shadow-lg">
                  <img
                    src={image}
                    alt={`Gallery Image -${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className=" ">
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
