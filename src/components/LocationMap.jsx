import React from "react";

const LocationMap = () => {
  return (
    <div  className="bg-[#ffece6]"> {/* 🔹 Full section background green */}
      <section className="pt-8 ">
        <div className="container mx-auto px-4 relative">
          <h2 id="location" className="text-4xl text-black md:text-4xl font-jeles text-center mb-4">
            Location
          </h2>
        <p className="font-segoe text-[14px] sm:text-[18px] md:text-[15px] text-[#c96c4a] leading-relaxed text-justify md:text-center md:px-0 px-2 pb-7">
            Centrally located Worli is emerging as Mumbai’s most exciting
            district. With the Mahalaxmi Race Course and Willingdon Golf Course,
            two of the city’s few ‘green lungs’, at its fringes and the Arabian
            Sea lapping at its western edge, this much sought after location is
            further elevated by its proximity to the nearby Bandra-Worli Sea
            Link.
          </p>
        </div>

        {/* Responsive Map */}
        <div className="w-full h-[450px] md:h-[500px] lg:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5783989494066!2d72.81785157466324!3d18.994218054535924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8e92720323%3A0x4511d131acf7fdf9!2sFour%20Seasons%20Private%20Residences!5e0!3m2!1sen!2sin!4v1757336524185!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default LocationMap;
