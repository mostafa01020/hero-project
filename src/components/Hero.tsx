"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type HeroImage = {
  image: string;
  alt?: string;
};

type HeroProps = {
  title: string;
  content: string;
  images: HeroImage[];
};

export default function Hero({
  title,
  content,
  images,
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        
        <div>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            {content}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          className="w-full overflow-hidden rounded-2xl"
        >
          {images && images.map((item, index) => {
            if (!item.image) return null; 

            return (
              <SwiperSlide key={index}>
                <div className="relative aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.alt || ""}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}