import React from 'react';

const Feature1 = ({ openModal }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-126">
        <img
          src="t1.jpg" // Replace with the actual path to your image
          alt="Four Seasons staff outside the residence"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8  md:pr-16 md:pl-16  pb-16">
  <h2 className="text-3xl md:text-4xl text-[rgb(82,82,82)] font-jeles mb-8">
    An Heirloom
  </h2>
<p className="text-[#636363] leading-loose text-justify font-sans mb-[0.8em]">
    Like an heirloom gemstone, true luxury is timeless, extraordinary, rare and treasured by generations. Four Seasons Private Residences Mumbai is set to become a cherished heirloom for the select circle of Residents who will call this prestigious Worli address their home.
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

export default Feature1;