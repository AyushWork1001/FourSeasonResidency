import React from 'react';

const Feature2 = ({openModal}) => {
  return (
    // Use flex-col-reverse on mobile to put the image on top, 
    // and md:flex-row to put the text on the left on PC.
    <div className="flex flex-col-reverse md:flex-row bg-white">
      {/* Content Section (now on the right for PC, top for mobile) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:pr-16 md:pl-16 pb-16">
 <h2 className="text-2xl md:text-3xl lg:text-3xl text-[rgb(82,82,82)] font-jeles mb-8 text-center md:text-left">
Floor Plans 
</h2>
<p className="text-[#c96c4a] leading-loose text-justify font-sans mb-[0.8em]">
1 BHK - 650 sq.ft. <br/>
2 BHK - 950 sq.ft.<br/>
3 BHK - 1300 sq.ft.<br/>
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

      {/* Image Section (now on the left for PC, bottom for mobile) */}
      <div className="w-full md:w-1/2 h-64 md:h-126 ">
        <img
          src="Picture2.jpg" // Replace with the actual path to your image
          alt="Four Seasons staff outside the residence"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Feature2;