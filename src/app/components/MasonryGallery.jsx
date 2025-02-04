const MasonryGallery = () => {
  // Cards with responsive height classes and images
  const cards = [
    {
      id: 1,
      height: "h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]",
      width: " w-full  md:w-[400px] lg:w-[450px] xl:w-[600px]",
      title: "Friendship Lane ",
      image: "/first.jpg",
    },
    {
      id: 2,
      height: "h-[200px] sm:h-[350px] md:h-[700px] lg:h-[860px] xl:h-[995px]",
      width: " w-full md:w-[300px] lg:w-[380px] xl:w-[506px] ",
      title: "Friendship Lane Gallery",
      image: "/second.jpg",
    },
    {
      id: 3,
      height: "h-[200px] sm:h-[350px] md:h-[326px] lg:h-[350px] xl:h-[426px] ",
      width: " w-full md:w-[400px] lg:w-[450px] xl:w-[600px]",
      title: "Friendship Lane Gallery",
      image: "/third.jpg",
    },
    {
      id: 4,
      height:
        "h-[200px] sm:h-[350px] md:h-[425px] lg:h-[500px]   xl:h-[552px] ",
      width: "w-full md:w-[300px] lg:w-[380px] xl:w-[506px]",
      title: "Friendship Lane Gallery",
      image: "/fourth.png",
    },
    {
      id: 5,
      height: "h-[200px] sm:h-[350px] md:h-[780px] lg:h-[800px] xl:h-[900px]",
      width: "w-full md:w-[400px] lg:w-[450px] xl:w-[600px]",
      title: "Friendship Lane Gallery",
      image: "/fifth.jpg",
    },
    {
      id: 6,
      height: "h-[200px] sm:h-[350px] md:h-[590px] xl:h-[690px]",
      width: "w-full md:w-[300px] lg:w-[380px] xl:w-[500px]",
      title: "Friendship Lane Gallery",
      image: "/sixth.jpg",
    },
    {
      id: 7,
      height: "h-[200px] sm:h-[350px] md:h-[260px] lg:h-[320px] xl:h-[360px] ",
      width: "w-full md:w-[400px] lg:w-[450px] xl:w-[600px]",
      title: "Friendship Lane Gallery",
      image: "/seventh.jpg",
    },
    {
      id: 8,
      height: "h-[200px] sm:h-[350px] md:h-[510px] lg:h-[560px] xl:h-[610px]",
      width: "w-full md:w-[300px]  lg:w-[380px] xl:w-[506px]",
      title: "Friendship Lane Gallery",
      image: "/eighth.jpg",
    },
    {
      id: 9,
      height: "h-[200px] sm:h-[350px] md:h-[420px] lg:h-[525px]",
      width: "w-full md:w-[400px] xl:w-[600px]",
      title: "Friendship Lane Gallery",
      image: "/ninth.jpg",
    },
  ];

  return (
    <div className="max-w-[1280px] xl:max-w-[1280px] md:max-w-[900px] lg:max-w-[900px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Responsive Header */}
      <div className="absolute left-0 ">
        <img
          src="/left-leaf.png"
          alt="Leaf Decoration"
          className="h-[0px] sm:h-[80px] md:h-[130px]"
        />
      </div>
      <div className="absolute left-0  top-[1400px]">
        <img
          src="/gold-leaf-left.png"
          alt="Leaf Decoration"
          className="h-[0px] sm:h-[80px] md:h-[10`0px]"
        />
      </div>
      <div className="flex items-center justify-center  w-full gap-2  sm:gap-10">
        {/* Left Button */}
        <button className="border-2 border-green-900 px-2 py-1 sm:px-8 sm:py-3 rounded-full text-green-900 font-semibold text-[15px]  sm:text-lg">
          Spaces
        </button>
        {/* Center Text */}
        <p className="text-[30px] font-bold text-green-900 tracking-wide">
          GALLERY
        </p>
        {/* Right Button */}
        <button className="border-2 border-green-900 px-2 py-1 sm:px-8 sm:py-3 rounded-full text-green-900 font-semibold text-[10px] sm:text-lg">
          View All Villas
        </button>
      </div>

      <div className="absolute md:left-0 w-full mt-5 sm:mt-14 border-b-2 border-green-900"></div>

      {/* Responsive Masonry Grid */}
      <div className="mt-10 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:pl-8 lg:pl-0 md:gap-24 lg:gap-20 xl:gap-10  ">
          {/* First Column */}
          <div className="space-y-4 sm:space-y-6 md:space-y-6 lg:space-y-8">
            {cards
              .filter((_, i) => i % 2 === 0)
              .map((card) => (
                <div key={card.id} className="flex flex-col items-center">
                  {/* Card */}
                  <div
                    className={`${card.width} ${card.height} rounded-[5%] md:rounded-[10%] overflow-hidden  hover:scale-105 duration-300`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Card Label */}
                  <p className="mt-2 self-start text-lg font-semibold text-green-900">
                    {card.title}
                  </p>
                </div>
              ))}
          </div>

          {/* Second Column */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 mt-4 md:mt-0">
            {cards
              .filter((_, i) => i % 2 !== 0)
              .map((card) => (
                <div key={card.id} className="flex flex-col items-center hover:scale-105 duration-500  ">
                  {/* Card */}
                  <div
                    className={`${card.width} ${card.height} rounded-[5%] md:rounded-[10%] overflow-hidden  `}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Card Label */}
                  <p className="mt-2 self-start text-lg font-semibold text-green-900 hover:font-bold duration-500">
                    {card.title} 
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;
