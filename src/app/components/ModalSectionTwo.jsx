import React, { useEffect } from "react";
const serviceImages = [
  {
    category: "Pre Openings",
    images: [
      {
        src: "pre-openings1.jpg",
        description: "Initial site evaluation and planning.",
      },
      {
        src: "pre-openings2.jpg",
        description: "Concept development for new openings.",
      },
      {
        src: "pre-openings3.jpg",
        description: "Interior design and layout discussions.",
      },
      {
        src: "pre-openings4.jpg",
        description: "Vendor selection and partnerships.",
      },
      {
        src: "pre-openings5.jpg",
        description: "Staff training and pre-launch preparations.",
      },
      {
        src: "pre-openings6.jpg",
        description: "Marketing strategies and brand positioning.",
      },
    ],
  },
  {
    category: "White-labelled full-spectrum third party operations",
    images: [
      {
        src: "third-party1.jpg",
        description: "End-to-end hotel management solutions.",
      },
      {
        src: "third-party2.jpg",
        description: "Customized guest experience strategies.",
      },
      {
        src: "third-party3.jpg",
        description: "Operational efficiency audits.",
      },
      {
        src: "third-party4.jpg",
        description: "Staff hiring and training programs.",
      },
      {
        src: "third-party5.jpg",
        description: "Brand-aligned service delivery models.",
      },
      {
        src: "third-party6.jpg",
        description: "Performance tracking and optimization.",
      },
    ],
  },
  {
    category: "Technology Integration",
    images: [
      {
        src: "tech-integration1.jpg",
        description: "Smart hotel automation and IoT solutions.",
      },
      {
        src: "tech-integration2.jpg",
        description: "Seamless PMS and CRM integration.",
      },
      {
        src: "tech-integration3.jpg",
        description: "AI-driven customer service enhancements.",
      },
      {
        src: "tech-integration4.jpg",
        description: "Contactless check-in/check-out solutions.",
      },
      {
        src: "tech-integration5.jpg",
        description: "Cybersecurity measures for hospitality data.",
      },
      {
        src: "tech-integration6.jpg",
        description: "Mobile app development for guest engagement.",
      },
    ],
  },
  {
    category: "Technical Audits & Quality Control",
    images: [
      {
        src: "technical-audits1.jpg",
        description: "On-site inspections for compliance.",
      },
      {
        src: "technical-audits2.jpg",
        description: "Quality assessment of facilities.",
      },
      {
        src: "technical-audits3.jpg",
        description: "Equipment and infrastructure evaluation.",
      },
      {
        src: "technical-audits4.jpg",
        description: "Service quality benchmarking.",
      },
      {
        src: "technical-audits5.jpg",
        description: "Hygiene and safety standard checks.",
      },
      {
        src: "technical-audits6.jpg",
        description: "Operational risk analysis and reporting.",
      },
    ],
  },
  {
    category: "Financial Management & Reporting",
    images: [
      {
        src: "financial-management1.jpg",
        description: "Comprehensive revenue tracking.",
      },
      {
        src: "financial-management2.jpg",
        description: "Expense optimization and budgeting.",
      },
      {
        src: "financial-management3.jpg",
        description: "Profitability analysis and forecasting.",
      },
      {
        src: "financial-management4.jpg",
        description: "Investor reports and performance insights.",
      },
      {
        src: "financial-management5.jpg",
        description: "Financial risk assessment.",
      },
      {
        src: "financial-management6.jpg",
        description: "Automated accounting and reconciliation.",
      },
    ],
  },
];

const ModalSectionTwo = ({
  selectedItem,
  setSelectedItem,
  
  hoveredIndex,
  setHoveredIndex,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable background scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable background scrolling when modal is closed
    };
  }, []);

  console.log(selectedItem);
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

          <div className="flex">
            {/* Left Section */}
            <div className="w-1/3">
              <img
                src={selectedItem?.image}
                alt={selectedItem?.heading}
                className="mt-11 w-14 h-16 mb-4"
              />
              <p className="text-[32px] font-cormorant mb-2 leading-[32px]">
                {selectedItem?.heading}
              </p>
            </div>

            {/* Right Section - Show filtered images */}
            <div className="w-2/3 grid grid-cols-3 gap-x-52 mt-11 gap-y-6">
              {serviceImages
                .find((service) => service.category === selectedItem?.heading)
                ?.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative bg-white text-black shadow-lg transition-all duration-500 w-[250px] h-[400px] overflow-hidden`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={image.src}
                      alt={image.description}
                      className="w-full h-[250px] object-cover transition-all duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-[#3E6F58] text-white p-6 transition-all duration-500 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h3 className="text-[24px] leading-[28px] font-cormorant">
                        {selectedItem?.heading}
                      </h3>
                      <p className="mt-6 font-montserrat text-[16px] leading-[24px]">
                        {image.description}
                      </p>
                    </div>
                    <p className="p-6 text-[24px] font-cormorant leading-[28px]">
                      {image.description}
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

export default ModalSectionTwo;
