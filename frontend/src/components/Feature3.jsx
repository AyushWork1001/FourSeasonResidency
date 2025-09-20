import React from 'react';

const Feature3 = ({openModal}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Image Section - Fixed height on all screens */}
      <div className="w-full md:w-1/2 h-64 md:h-126">
        <img
          src="garden.jpg"
          alt="An Urban Garden"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:pr-16 md:pl-16 pb-16">
 <h2 className="text-2xl md:text-3xl lg:text-3xl text-[rgb(82,82,82)] font-jeles mb-8 text-center md:text-left">
Connectivity        </h2>
        <p className="text-[#c96c4a] leading-loose text-justify font-sans mb-[0.8em]">
          
 Metro Station (400m)<br/>
Schools & Colleges (within 2km)<br/>
Hospitals (within 1.5km)<br/>
Shopping Malls & Supermarkets (1km)<br/>
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 md:pt-6">
   <button 
  onClick={openModal} 
  className="bg-black text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-[#333333] cursor-pointer">
  Get Cost Sheet
</button>
   <button 
  onClick={openModal} 
  className="bg-black text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-[#333333] cursor-pointer">
 Get Brochure
</button>
        </div>
      </div>
    </div>
  );
};

export default Feature3;