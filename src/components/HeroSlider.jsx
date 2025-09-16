// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const slides = [
  
    "/slide1.jpg",
    "/slide2.jpg"
  ];

  return (
    <section id="home" className="h-screen w-full">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-screen w-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

