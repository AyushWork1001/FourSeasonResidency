// src/components/PrivateResidences.jsx
export default function PrivateResidences() {
  return (
    <section className="bg-[#fffaf8] py-10 md:py-25 px-6">
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 md:grid-cols-[40%_60%] 
          gap-6 items-start
        "
      >
        {/* Left Column */}
        <div>
          <h2 className="md:text-left  text-center text-2xl md:text-3xl lg:text-3xl text-[rgb(82,82,82)] font-jeles leading-snug">
            About <br/>Modern Heights
          </h2>
        </div>

        {/* Right Column */}
        <div>
        
          <p className="text-base md:text-lg text-[#c96c4a] leading-relaxed">
            Modern Heights is a newly launched premium residential project located in center of city . Designed with modern architecture and built with sustainable materials, this 20-story tower includes spacious 1, 2, and 3 BHK apartments tailored to urban lifestyles.
          </p>
        </div>
      </div>
    </section>
  );
}
