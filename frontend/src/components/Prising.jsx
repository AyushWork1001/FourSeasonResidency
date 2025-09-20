import React from 'react';

const Pricing = () => {
  const pricingData = [
    {
      image: '/img1.jpg',
      title: '1 BHK',
      price: 'Starting at ₹75 Lakhs',
    },
    {
      image: '/img2.jpg',
      title: '2 BHK',
      price: 'Starting at ₹1.1 Cr',
    },
    {
      image: '/img3.jpg',
      title: '3 BHK',
      price: 'Starting at ₹1.6 Cr',
    },
  ];

  return (
    <div id="gallery" className="bg-white">
      <section className="py-7 md:py-14 bg-white">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-2xl md:text-3xl lg:text-3xl text-[rgb(82,82,82)] font-jeles text-center mb-8">
            Pricing & Availability
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="group relative w-full md:w-1/3 md:max-w-md overflow-hidden rounded-lg shadow-lg"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover md:h-[350px] transition-all duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Desktop Hover Overlay */}
                <div className="hidden md:flex absolute inset-0 bg-black/70 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 flex-col justify-center items-center text-white p-4">
                  <h3 className="text-xl font-bold font-jeles text-white text-center">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-jeles text-center">
                    {item.price}
                  </p>
                </div>

                {/* Mobile Static Text */}
                <div className="md:hidden bg-white text-center py-3">
                  <h3 className="text-lg font-bold font-jeles text-black">
                    {item.title}
                  </h3>
                  <p className="text-md font-jeles text-gray-700">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
