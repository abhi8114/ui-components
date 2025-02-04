const MasonryGallery = () => {
    // Cards with responsive height classes
    const cards = [
      { id: 1, height: 'h-[200px] sm:h-[250px] md:h-[400px] lg:h-[600px]', width: ' w-full md:w-[400px] xl:w-[600px]', title: 'Friendship Lane ' },
      { id: 2, height: 'h-[333px] sm:h-[380px] md:h-[700px] lg:h-[995px]', width: ' w-full md:w-[300px] xl:w-[506px] ',title: 'Friendship Lane Gallery' },
      { id: 3, height: 'h-[125px] sm:h-[200px] md:h-[326px] lg:h-[426px]  ', width: ' w-full md:w-[400px] xl:w-[600px]',title: 'Friendship Lane Gallery' },
      { id: 4, height: 'h-[130px] sm:h-[180px] md:h-[425px] xl:h-[552px] ', width: 'w-full md:w-[300px] xl:w-[506px]',title: 'Friendship Lane Gallery' },
      { id: 5, height: 'h-[300px] sm:h-[350px] md:h-[780px] xl:h-[900px]', width: 'w-full md:w-[400px] xl:w-[600px]',title: 'Friendship Lane Gallery' },
      { id: 6, height: 'h-[230px] sm:h-[280px] md:h-[590px] xl:h-[690px]', width: 'w-full md:w-[300px] xl:w-[500px]',title: 'Friendship Lane Gallery' },
      { id: 7, height: 'h-[120px] sm:h-[170px] md:h-[260px] lg:h-[360px]', width: 'w-full md:w-[400px] xl:w-[600px]',title: 'Friendship Lane Gallery' },
      { id: 8, height: 'h-[220px] sm:h-[270px] md:h-[510px] lg:h-[610px]', width: 'w-full md:w-[300px] xl:w-[506px]',title: 'Friendship Lane Gallery' },
      { id: 9, height: 'h-[125px] sm:h-[175px] md:h-[420px] lg:h-[525px]', width: 'w-full md:w-[400px] xl:w-[600px]',title: 'Friendship Lane Gallery' },
    ];
  
    return (
      <div className="max-w-[1280px] xl:max-w-[1280px] md:max-w-[900px] lg:max-w-[900px] mx-auto px-4 sm:px-12 lg:px-8 py-6 md:py-8">
        {/* Responsive Header */}
        <div className="flex items-center justify-center pb-4 w-full gap-10">
          {/* Left Button */}
          <button className="border-2 border-green-900 px-8 py-3 rounded-full text-green-900 font-semibold text-lg">
            Spaces
          </button>
          {/* Center Text */}
          <h2 className="text-4xl font-bold text-green-900 tracking-wide">GALLERY</h2>
          {/* Right Button */}
          <button className="border-2 border-green-900 px-8 py-3 rounded-full text-green-900 font-semibold text-lg">
            View All Villas
          </button>
        </div>
  
        <div className="w-full mt-14 border-b-2 border-green-900"></div>
  
        {/* Responsive Masonry Grid */}
        <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-14 mb-10 md:mb-16">
    {/* First Column */}
    <div className="space-y-4 sm:space-y-6 md:space-y-6 lg:space-y-8">
      {cards.filter((_, i) => i % 2 === 0).map((card) => (
        <div key={card.id} className="flex flex-col items-center">
          {/* Card */}
          <div className={`${card.width} ${card.height} bg-gray-500 p-4 md:p-6 rounded-[5%] md:rounded-[7%] transition-all hover:shadow-lg`} />
          {/* Card Label */}
          <p className="mt-4  self-start text-lg font-semibold  text-green-900">{card.title}</p>
        </div>
      ))}
    </div>
  
    {/* Second Column */}
    <div className="space-y-4 md:space-y-6 lg:space-y-8 mt-4 md:mt-0">
      {cards.filter((_, i) => i % 2 !== 0).map((card) => (
        <div key={card.id} className="flex flex-col items-center">
          {/* Card */}
          <div className={`${card.width} ${card.height} bg-gray-800 p-4 md:p-6 rounded-[5%] md:rounded-[10%] transition-all hover:shadow-lg`} />
          {/* Card Label */}
          <p className="mt-4 text-lg font-semibold text-green-900">Friendship Lane Gallery</p>
        </div>
      ))}
    </div>
  </div>
  
        </div>
  
      </div>
    );
  };
  
  export default MasonryGallery;