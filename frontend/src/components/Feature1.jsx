import React from 'react';

const Feature1 = ({ openModal }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-126">
        <img
          src="unnamed.png" // Replace with the actual path to your image
          alt="Four Seasons staff outside the residence"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8  md:pr-16 md:pl-16  pb-16">
 <h2 className="text-2xl md:text-3xl lg:text-3xl text-[rgb(82,82,82)] font-jeles mb-8 text-center md:text-left">
  An Exquisite Legacy
</h2>
<p className="text-[#c96c4a] leading-loose text-justify font-sans mb-[0.8em]">
In the same way an heirloom gemstone is cut and polished for a lifetime of brilliance, true luxury is crafted with a sense of permanence. It is a masterpiece to be cherished, a rare find meant to be a part of your family's story. The Modern Heights is designed to be just that—an enduring landmark, a timeless possession for those who will make this prestigious Worli address their own.</p>

  {/* Buttons */}
  <div className="flex md:pt-6 space-x-4">
    
    
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

export default Feature1;