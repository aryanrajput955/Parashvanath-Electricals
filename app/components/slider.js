import React from 'react';

const LogoGrid = () => {
  // List of logos
  const logos = [
    '/1.png',
    '/2.png',
    '/3.webp',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.svg',
    '/8.jpg',
    '/9.png',
    '/10.png',
    '/11.jpg',
    '/12.svg',
    '/13.png',
    '/kundan-cables-logo.png',
    '/15.webp',  
    '/16.png',
    '/17.webp',
  ];

  return (
    <div className="py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Trusted Brands We Offer
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Logo Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={`logo-${index}`} 
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:shadow-md"
            >
              <img
                src={logo}
                alt={`Brand logo ${index + 1}`}
                className="max-h-12 md:max-h-16 lg:max-h-20 w-auto object-contain  transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;