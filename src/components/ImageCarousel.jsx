import React, { useState, useEffect, useRef } from "react";

// Array of image URLs
const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
];

const ImageCarousel = () => {
  const isMobile = window.innerWidth <= 768;
  const itemsPerSlide = isMobile ? 1 : 3;

  const firstClone = images.slice(0, itemsPerSlide);
  const lastClone = images.slice(-itemsPerSlide);
  const displayImages = [...lastClone, ...images, ...firstClone];

  const totalSlides = images.length;
  const [currentSlide, setCurrentSlide] = useState(itemsPerSlide);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const containerRef = useRef(null);

  const handleNext = () => setCurrentSlide((prev) => prev + 1);
  const handlePrev = () => setCurrentSlide((prev) => prev - 1);

  // Seamless looping logic
  useEffect(() => {
    const handleTransitionEnd = () => {
      // Check if the transition has reached the end clone
      if (currentSlide === 0) {
        // Instantly jump to the actual last slide
        setTransitionEnabled(false);
        setCurrentSlide(totalSlides);
      } else if (currentSlide === displayImages.length - itemsPerSlide) {
        // Instantly jump to the actual first slide
        setTransitionEnabled(false);
        setCurrentSlide(itemsPerSlide);
      }
    };
    
    // Attach and clean up the event listener
    const containerNode = containerRef.current;
    containerNode.addEventListener("transitionend", handleTransitionEnd);
    return () => containerNode.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentSlide, displayImages.length, itemsPerSlide, totalSlides]);

  // Use requestAnimationFrame to re-enable transitions after a state update
  useEffect(() => {
    if (!transitionEnabled) {
      const timeoutId = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50); // Small delay to allow the state update to settle
      return () => clearTimeout(timeoutId);
    }
  }, [transitionEnabled]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the transform value for the container
  const transformValue = `translateX(-${(100 / itemsPerSlide) * currentSlide}%)`;

  return (
    <div id="gallery" className="bg-white">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl text-black md:text-4xl font-jeles text-center mb-4">
            Gallery
          </h2>
<p className="font-segoe text-[14px] sm:text-[18px] md:text-[15px] text-[#c96c4a] leading-relaxed text-justify md:text-center md:px-0 px-2 pb-7">
  Our priority is to create the perfect environment for our valued luxury residents who may wish to meet, connect and engage in various 
  <span className="hidden md:inline"><br /></span>
  occasions and enjoy the discretion of an exclusive members only club.
</p>


          <div className="overflow-hidden relative">
            <div
              ref={containerRef}
              className="flex"
              style={{
                transform: transformValue,
                transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
              }}
            >
              {displayImages.map((img, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-1/3 p-2">
                  <div className="w-full h-[250px] md:h-[300px]">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="pointer-events-none">
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-lg pointer-events-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-lg pointer-events-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageCarousel;