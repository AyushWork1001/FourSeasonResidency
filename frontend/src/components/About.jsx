import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-blue px-3 sm:px-4 bg-black md:px-0 py-8 md:py-12">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-jeles text-white text-center mb-6">
          About Four Seasons Residences
        </h2>

        {/* First paragraph */}
        <p className="w-full md:w-[70%] mx-auto font-segoe text-[14px] sm:text-[16px] md:text-[15px] leading-relaxed text-justify text-white md:text-center px-2 sm:px-4 md:px-0 mb-5">
          Provenance Land (formerly known as Magus Estates and Hotels) is a joint
          venture between the R.K. Jatia group and GIC, Singapore’s sovereign
          wealth fund. Owners of the Four Seasons Hotel Mumbai, one of India’s
          oldest hospitality development group, and the first to bring
          international five-star hospitality (Four Seasons Hotel and the Hyatt
          Regency) to the country.
        </p>

        {/* Second paragraph */}
        <p className="w-full md:w-[70%] mx-auto font-segoe text-[14px] sm:text-[16px] text-white md:text-[15px] leading-relaxed text-justify md:text-center px-2 sm:px-4 md:px-0 mb-8">
          For over 30 years, the group has gained a stellar reputation for the
          successful designing and development of five Greenfield projects in
          India that have stood the test of time and have come to be known as
          landmarks in their own right. Provenance Land in conjunction with Four
          Seasons Hotels and Resorts, has selected a team of internationally
          recognized consultants who have an astounding track record of creating
          inspiring projects the world over, to bring Four Seasons Private
          Residences Mumbai to life.
        </p>

        {/* Centered logo */}
        <div className="flex justify-center">
          <img
            src="/logo.png" // replace with your actual logo path
            alt="Logo"
            className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
