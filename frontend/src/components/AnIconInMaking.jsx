import React from 'react';

const AnIconInMaking = () => {
  return (
    <div
      className="relative py-16 md:py-24 bg-cover bg-center bg-fixed" // Added bg-fixed here
      style={{ backgroundImage: "url(/IconMaking.jpg)" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-jeles mb-6 sm:mb-8">
          An Icon in Making
        </h2>
        <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-normal md:tracking-wide mb-4 sm:mb-6 max-w-full sm:max-w-xl md:max-w-4xl mx-auto">
          Gensler is an award-winning architecture, design and planning firm operating in 46 cities around the world.
        </p>
        <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-normal md:tracking-wide mb-4 sm:mb-6 max-w-full sm:max-w-xl md:max-w-4xl mx-auto">
          Award-winning international design firm, Yabu Pushelberg, is world renowned for its timeless and artistic environments within the specialised retail, luxury hospitality and restaurant sectors.
        </p>
        <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-normal md:tracking-wide max-w-full sm:max-w-xl md:max-w-4xl mx-auto">
          P Landscape, founded by Principal Wannaporn 'Pui' Phornprapha, is a Bangkok-based boutique landscape studio with diverse, creative and talented individuals including landscape architects, designers, horticulturalists and artists.
        </p>
      </div>
    </div>
  );
};

export default AnIconInMaking;