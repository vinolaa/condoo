"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function CTA() {
  const images = [
    "/financial-dashboard.webp",
    "/condominio.webp",
    "/admin.png",
  ];

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold font-sans mb-4">Pronto para começar?</h2>
        <p className="text-xl mb-8">
          Junte-se a milhares de condomínios que já gerenciam suas propriedades com facilidade e eficiência.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-white text-primary px-8 py-3 shadow-button hover:bg-gray-100 transition duration-300">
            Teste Gratuitamente
          </button>
          <button className="bg-secondary text-white px-8 py-3 shadow-button hover:bg-opacity-90 transition duration-300">
            Saiba Mais
          </button>
        </div>
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000, // 5 segundos
              disableOnInteraction: false, // Continua mesmo após interação
            }}
            className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="max-h-[500px]">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
