// src/components/Residences.jsx
export default function Residences() {
  return (
    <section id="residences" className="bg-[#fcefeb]  py-12 md:py-25 pb-15 md:pb-24 px-4 md:px-6">
      <div className="w-full text-center md:text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-jeles tracking-wide text-[rgb(82,82,82)] mb-8">
          Luxury Living in the Heart of the City
        </h2>

        {/* Paragraph */}
        <p className="font-segoe text-[16px] sm:text-[18px] md:text-[20px] text-[#c96c4a] leading-relaxed text-justify md:text-center md:px-0 px-2">
          Modern Heights is a premier residential tower offering state-of-the-art amenities and smart homes for a modern lifestyle.
          
          {/* Only show break on medium+ screens */}
          <span className="hidden md:inline"><br /></span> 

          Located in the prime city center, it's where comfort meets convenience.
        </p>
      </div>
    </section>
  );
}
