import React, { useEffect } from "react";
const ModalSection = ({
  selectedItem,
  setSelectedItem,
  services,
  hoveredIndex,
  setHoveredIndex,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable background scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable background scrolling when modal is closed
    };
  }, []);
  return (
    <div>
      <div className="fixed inset-0  h-full overflow-y-auto bg-[#223630] z-50">
        <div className="bg-[#223630] mt-[100px] ml-32 max-w-4xl relative text-white">
          <button
            className="absolute top-[-20px] right-[-20%]  text-white text-[50px]"
            onClick={() => setSelectedItem(null)}
          >
            &times;
          </button>
          <button
            className="absolute top-[40px] left-[-40px] text-white text-2xl"
            onClick={() => setSelectedItem(null)}
          >
            &times;
          </button>

          <span className="bg-[#2E413B] py-1 px-2 tracking-wide text-white uppercase font-montserrat text-xs rounded-md">
            OUR OFFERINGS
          </span>
          <p className="font-cormorant font-normal md:text-[40px] md:leading-[40px] text-[28px] leading-9  mt-4 text-white">
            Hospitality Concept Creation
          </p>

          <div className="flex  ">
            <div className="w-1/3">
              <img
                src={selectedItem?.image}
                alt={selectedItem?.heading}
                className="mt-11 w-14 h-16 mb-4 "
              />
              <p className="text-[32px] font-cormorant mb-2 leading-[32px]">
                {" "}
                Hospitality Concept Creation
              </p>
            </div>

            <div className="w-2/3 grid grid-cols-3 gap-52 mt-11">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative bg-white text-black shadow-lg transition-all duration-500 w-[250px] h-[400px] overflow-hidden`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[250px] object-cover transition-all duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-[#3E6F58] text-white p-6 transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-[24px] leading-[28px] font-cormorant">
                      {service.title}
                    </h3>
                    <p className="mt-6 font-montserrat text-[16px] leading-[24px]">
                      {service.description}
                    </p>
                  </div>
                  <p className=" p-6 text-[24px] font-cormorant leading-[28px]">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSection;
