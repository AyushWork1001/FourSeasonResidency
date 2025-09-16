import React, { useState, useEffect } from 'react';

const amenitiesData = [
  { id: 1, image: '/1.png', title: 'An acre of lush landscaping' },
  { id: 3, image: '/3.png', title: 'Party Lawn' },
  { id: 4, image: '/4.png', title: '70 feet lap pool' },
  { id: 5, image: '/5.png', title: 'An Urban Garden' },
  { id: 6, image: '/6.png', title: 'Squash Court' },
  { id: 8, image: '/8.png', title: 'Spa' },
  { id: 9, image: '/9.png', title: 'Rooftop Lounge & Outdoor Cinema' },
  { id: 10, image: '/10.png', title: 'Fitness Centre' },
  { id: 11, image: '/11.png', title: 'Yoga Room' },
  { id: 12, image: '/12.png', title: 'Indoor Games Room' },
  { id: 13, image: '/13.png', title: 'Pool Pavillion' },
  { id: 14, image: '/14.png', title: 'Private Theatre' },
];

const AmenitiesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = amenitiesData.length;
  const visibleSlidesPc = 4;
  const visibleSlidesMobile = 2; // Updated to 2 for mobile

  // Handles automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const getVisibleSlides = () => {
    const isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint
    const numVisible = isMobile ? visibleSlidesMobile : visibleSlidesPc;
    
    let slides = [];
    for (let i = 0; i < numVisible; i++) {
      const slideIndex = (currentSlide + i) % totalSlides;
      slides.push(amenitiesData[slideIndex]);
    }
    return slides;
  };

  return (
    <div id="amenities"className="bg-[#f8f0eb] py-16  font-serif">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-black sm:text-4xl font-jeles md:text-4xl mb-6">
          Amenities for the uber luxury lifestyle
        </h2>
        <p className="max-w-6xl mx-auto font-sans mb-4 mt-10 text-base text-[#c96c4a] leading-relaxed">
          The wood panelled and finely detailed Resident’s Club has been designed as an extension of the Private Residences, a home away from home. The luxury yacht inspired rooftop lounge is the crowning glory of this slender tower, with spectacular views of the city.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Previous Arrow */}
          <button onClick={prevSlide} className="z-10 absolute left-0 md:-left-8 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Carousel Items */}
          <div className="flex justify-center md:space-x-8 overflow-hidden w-[80%] mx-auto">
            {getVisibleSlides().map((amenity) => (
              <div key={amenity.id} className="p-4 md:w-1/4 w-full">
                <div className="flex justify-center p-2 rounded-lg">
                  <img src={amenity.image} alt={amenity.title} className="w-full object-cover" style={{ width: '90px', height: '90px' }} />
                </div>
                <p className="text-[#c96c4a] font-sans text-sm">{amenity.title}</p>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button onClick={nextSlide} className="z-10 absolute right-0 md:-right-8 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesCarousel;