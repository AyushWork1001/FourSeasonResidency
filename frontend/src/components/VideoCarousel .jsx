import React, { useState, useEffect, useRef } from 'react';

const FullPageLayout = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/4jnzf1yj48M?si=xQPfCEY_3ucRf2As",
    "https://www.youtube.com/embed/aO_kPW39um8?si=HonOrKi2xUPp9lJj",
    "https://www.youtube.com/embed/VKAKbueezMk?si=yCdT0I9T_m6ZZ0Xn",
    "https://www.youtube.com/embed/3H6Evu2hPpE?si=H20Y_M11rtTQ7L32",
    "https://www.youtube.com/embed/lpzEd8gpWVM?si=eF8D7BKw4TVz2IW_",
  ];

  const isMobile = window.innerWidth <= 768;
  const itemsPerSlide = isMobile ? 1 : 3;

  const firstClone = videoUrls.slice(0, itemsPerSlide);
  const lastClone = videoUrls.slice(-itemsPerSlide);
  const displayVideos = [...lastClone, ...videoUrls, ...firstClone];

  const totalSlides = videoUrls.length;
  const [currentSlide, setCurrentSlide] = useState(itemsPerSlide);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const containerRef = useRef(null);

  const handleNext = () => setCurrentSlide(prev => prev + 1);
  const handlePrev = () => setCurrentSlide(prev => prev - 1);

  // seamless looping
  useEffect(() => {
    const node = containerRef.current;
    const handleTransitionEnd = () => {
      if (currentSlide === 0) {
        setTransitionEnabled(false);
        setCurrentSlide(totalSlides);
      } else if (currentSlide === displayVideos.length - itemsPerSlide) {
        setTransitionEnabled(false);
        setCurrentSlide(itemsPerSlide);
      }
    };
    node.addEventListener("transitionend", handleTransitionEnd);
    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentSlide, displayVideos.length, itemsPerSlide, totalSlides]);

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  }, [transitionEnabled]);

  // autoplay for all devices
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const transformValue = `translateX(-${(100 / itemsPerSlide) * currentSlide}%)`;

  return (
    <div className="bg-white">
      <section className="py-16 md:py-24 bg-[#fbf5f1]">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl text-black md:text-4xl font-jeles text-center mb-4">
            Virtual Walkthrough
          </h2>
          <p className="text-center text-[#c96c4a] mb-12">
            Would you like to have a glimpse of the most luxurious residences in South Mumbai?
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
              {displayVideos.map((url, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/3 p-4"
                >
                  <div className="w-full h-[175px] md:h-[250px]">
                    <iframe
                      className="w-full h-full rounded-lg shadow-lg"
                      src={url}
                      title={`YouTube video player ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows outside video click area */}
            <div className="pointer-events-none">
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-lg pointer-events-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-lg pointer-events-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default FullPageLayout;
