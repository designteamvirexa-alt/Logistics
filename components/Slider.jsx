"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import c1 from "@/asset/c1.webp";
import valuesdiff from "@/asset/values-diff.webp";
import courierimg from "@/asset/courierimg.webp";

const data = [
  {
    title: "Safe & Secure Luggage Handling",
    desc: "Your bags are handled by trained professionals with secure sealing and verified partners, ensuring protection throughout the journey.",
    img: c1,
  },
  {
    title: "Reliable Door-to-Door Baggage Pickup & Drop",
    desc: "Skip the hassle of heavy luggage—book online, and we’ll pick up from your home and deliver anywhere in India.",
    img: valuesdiff,
  },
  {
    title: "On-Time Delivery Guarantee",
    desc: "Avoid baggage delays—our scheduled deliveries and real-time updates keep you informed until your luggage arrives.",
    img: courierimg,
  },
   {
    title: "Live Luggage Tracking Across India",
    desc: "Get real-time tracking and SMS/WhatsApp alerts, so you always know exactly where your baggage is in transit.",
    img: courierimg,
  },
   {
    title: "Corporate & Group Travel Luggage Management",
    desc: "We provide specialised support for corporate travel, events, and group trips, ensuring seamless coordination across multiple bags and destinations.",
    img: courierimg,
  },
   {
    title: "Nationwide Luggage Delivery Network",
    desc: "We deliver luggage across major, tier-2, and tier-3 cities, supporting seamless travel, relocation, and baggage movement nationwide.",
    img: courierimg,
  },
  
];

export default function Slider() {
  const swiperRef = useRef(null);

  return (
    <section className="py-24   ">
      <div className="container  mx-auto  px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-white text-xl text-center md:text-left">
            Why Choose Us — India’s Trusted Luggage Delivery
          </h2>

          {/* DESKTOP ARROWS */}
          <div className="hidden lg:flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 bg-white rounded"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 bg-white rounded"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-3xl p-8 h-[500px] relative overflow-hidden">
                <h4 className=" font-semibold">{item.title}</h4>
                <p className="text-sm mt-2 text-second">{item.desc}</p>

                <div className="absolute bottom-0 left-0 right-0 h-[60%]">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MOBILE ARROWS — BOTTOM CENTER */}
        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 bg-white rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 bg-white rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}
