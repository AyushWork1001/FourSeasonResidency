import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of objects, each containing an image and a title
const images = [
  { url: "/img1.jpg", title: "Exterior View of Modern Heights" },
  { url: "/img2.jpg", title: "Sample Living Room" },
  { url: "/img3.jpg", title: "Modular Kitchen Design" },
  { url: "/img4.jpg", title: "Rooftop Pool" },
  { url: "/img5.jpg", title: "Lobby Area" },
  { url: "/img6.jpg", title: "Clubhouse Interior" },
];

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true, // Enable arrows for desktop
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div id="gallery" className="bg-white">
      <section className="py-7 md:py-14 bg-white">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-2xl md:text-3xl lg:text-3xl text-[rgb(82,82,82)] font-jeles text-center mb-8">
            Gallery
          </h2>
          {/* <p className="font-segoe text-[14px] sm:text-[18px] md:text-[15px] text-[#c96c4a] leading-relaxed text-justify md:text-center md:px-0 px-2 pb-7">
            Our priority is to create the perfect environment for our valued luxury residents who may wish to meet, connect and engage in various 
            <span className="hidden md:inline"><br /></span>
            occasions and enjoy the discretion of an exclusive members only club.
          </p> */}
          
          <div className="overflow-hidden relative">
            <Slider {...settings}>
              {images.map((item, index) => (
                <div key={index} className="p-2">
                  <div className="w-full h-[250px] md:h-[300px] pb-4">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  {/* Title that slides with the image */}
                  <h3 className="mt-4 text-center text-md md:text-xl font-jeles text-black">
                    {item.title}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageCarousel;