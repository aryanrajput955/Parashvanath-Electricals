import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LogoScroller = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

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
 
  ];

  // Split logos into two rows (9 in first row, 8 in second row)
  const row1Logos = logos.slice(0, 9);
  const row2Logos = logos.slice(9, 17);

  // Create duplicated arrays for seamless scrolling
  const duplicatedRow1 = [...row1Logos, ...row1Logos];
  const duplicatedRow2 = [...row2Logos, ...row2Logos];

  // Animation settings for first row (left to right)
  const animationSettings1 = {
    x: [0, '-50%'], // Move 50% since we have 2x copies (shows all original logos)
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20, // Longer duration to see all logos properly
        ease: 'linear',
      },
    },
  };

  // Animation settings for second row (right to left)
  const animationSettings2 = {
    x: ['-50%', 0], // Move in opposite direction, 50% since we have 2x copies
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20, // Same duration for consistency
        ease: 'linear',
      },
    },
  };

  // Start animations on mount
  useEffect(() => {
    controls1.start(animationSettings1);
    controls2.start(animationSettings2);
  }, [controls1, controls2]);

  return (
    <div className="relative overflow-hidden py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Trusted Brands We Offer
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="space-y-8">
        {/* First Row - Left to Right */}
        <div className="relative overflow-hidden">
          {/* Fade effects */}
          <div className="absolute top-0 left-0 w-[100px] sm:w-[150px] md:w-[200px] h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-[100px] sm:w-[150px] md:w-[200px] h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            className="flex whitespace-nowrap"
            animate={controls1}
            initial={{ x: 0 }}
          >
            <div className="flex flex-nowrap">
              {duplicatedRow1.map((logo, index) => (
                <div key={`row1-logo-${index}`} className="flex-shrink-0 w-32 h-12 md:w-48 md:h-20 mx-4 sm:mx-6 md:mx-8">
                  <img
                    src={logo}
                    alt={`Logo ${(index % row1Logos.length) + 1}`}
                    className="h-full w-full object-contain  transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative overflow-hidden">
          {/* Fade effects */}
          <div className="absolute top-0 left-0 w-[100px] sm:w-[150px] md:w-[200px] h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-[100px] sm:w-[150px] md:w-[200px] h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            className="flex whitespace-nowrap"
            animate={controls2}
            initial={{ x: '-50%' }}
          >
            <div className="flex flex-nowrap">
              {duplicatedRow2.map((logo, index) => (
                <div key={`row2-logo-${index}`} className="flex-shrink-0 w-32 h-12 md:w-48 md:h-20 mx-4 sm:mx-6 md:mx-8">
                  <img
                    src={logo}
                    alt={`Logo ${(index % row2Logos.length) + 10}`}
                    className="h-full w-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;