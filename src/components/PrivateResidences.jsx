// src/components/PrivateResidences.jsx
export default function PrivateResidences() {
  return (
    <section className="bg-[#fffaf8] py-25 px-6">
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 md:grid-cols-[40%_60%] 
          gap-6 items-start
        "
      >
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[rgb(82,82,82)] font-jeles leading-snug">
            Four Seasons <br /> Private Residences
          </h2>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg md:text-xl font-jeles text-[#c96c4a] mb-4">
            Unique, Limited Edition Contemporary Urban Residences
          </h3>
          <p className="text-base md:text-lg text-[#c96c4a] leading-relaxed">
            Four Seasons Private Residences were created for anyone who has ever experienced
            a Four Seasons Hotel or Resort and said "I wish I could live here." Four Seasons
            today is a brand that people equate with exceptional experiences and the lifelong
            memories that come with them.
          </p>
        </div>
      </div>
    </section>
  );
}
