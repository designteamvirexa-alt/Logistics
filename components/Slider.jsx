"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider4.jpg",
  "/images/slider4.jpg",
  "/images/slider4.jpg",
  "/images/slider4.jpg",
  "/images/slider4.jpg",
];

export default function Slider({title}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative">
      {/* Custom Top-Right Arrows */}
<div className="
  absolute 
  -top-20
  w-full
  flex 
  flex-col 
  sm:flex-row 
  sm:items-center 
  sm:justify-between
  gap-3
">
  {/* Title */}
  <h3 className="text-white text-lg sm:text-xl font-semibold">
    {title}
  </h3>

  {/* Arrows */}
  <div className="flex space-x-2 z-20 self-start sm:self-auto">
    <button
      ref={prevRef}
      className="p-2 bg-white rounded-sm shadow-md hover:bg-gray-200"
    >
      <ChevronLeft size={20} />
    </button>
    <button
      ref={nextRef}
      className="p-2 bg-white rounded-sm shadow-md hover:bg-gray-200"
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>


      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Assign navigation refs before initialization
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-60 md:h-72 lg:h-80 rounded-xl overflow-hidden bg-white shadow-lg">
              <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
