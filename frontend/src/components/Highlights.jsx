// src/components/Residences.jsx
import React from 'react';

const HighlightItem = ({ text }) => (
  // This item is a simple flexbox for icon and text
  <div className="flex items-center space-x-2 md:space-x-4 text-sm sm:text-base md:text-lg  font-semibold font-sans">
    {/* Tick Icon SVG */}
    <div className="flex-shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-[#c96c4a]"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    {/* Text container */}
    <div className="text-left flex-grow">
      <span>{text}</span>
    </div>
  </div>
);

export default function Highlights() {
  return (
    <section id="residences" className="bg-[#fcefeb]  py-12 md:py-18 pb-24 px-4 md:px-6">
      <div className="w-full text-center md:text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-jeles tracking-wide text-[rgb(82,82,82)] mb-8">
          Key Highlights
        </h2>

        {/* This container has the responsive layout logic */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0 text-[#c96c4a]">
          <HighlightItem text="RERA Approved Project" />
          <HighlightItem text="Developed by Modern Heights Developers" />
          <HighlightItem text="Completion: March 2026" />
          <HighlightItem text="Smart homes with app-based control" />
        </div>
      </div>
    </section>
  );
}