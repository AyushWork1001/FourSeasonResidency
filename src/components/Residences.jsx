// src/components/Residences.jsx
export default function Residences() {
  return (
    <section id="residences" className="bg-[#fcefeb] py-25 pb-24 px-4 md:px-6">
      <div className="w-full text-center md:text-center">
        {/* Heading (24pt ≈ 32px) */}
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-jeles tracking-wide text-[#c96c4a] mb-8">
          LIMITED EDITION RESIDENCES
        </h2>

        {/* Paragraph (mobile: justified, tighter margins) */}
        <p className="font-segoe text-[16px] sm:text-[18px] md:text-[20px] text-[#c96c4a] leading-relaxed text-justify md:text-center md:px-0 px-2">
          Designed by award-winning architecture firm Gensler, the exemplary tower will
          contain a limited number of residences.
          <span className="hidden md:inline">
            {" "}
            At a minimum, homes will occupy an <br />
            entire floor.
          </span>
          <span className="inline md:hidden">
            {" "}
            At a minimum, homes will occupy an entire floor.
          </span>{" "}
          The Residences are being modelled to offer maximum space on the
          inside and minimum intrusion from the outside.
        </p>
      </div>
    </section>
  );
}
