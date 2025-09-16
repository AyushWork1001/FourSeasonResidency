import React from 'react';

const Feature3 = ({openModal}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Image Section - Fixed height on all screens */}
      <div className="w-full md:w-1/2 h-64 md:h-126">
        <img
          src="t3.jpg"
          alt="An Urban Garden"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:pr-16 md:pl-16 pb-16">
        <h2 className="text-3xl md:text-4xl text-[rgb(82,82,82)] font-jeles mb-8">
          An Urban Garden
        </h2>
        <p className="text-[#636363] leading-loose text-justify font-sans mb-[0.8em]">
          A delightful series of lush green outdoor spaces will surround the tower in the tradition of Persian walled gardens.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
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