"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import bone from "@/asset/1.png";
import btwo from "@/asset/2.png";
import bthree from "@/asset/3.png";
import bannerone from "@/asset/banner.png";
import Image from "next/image";

const slides = [
  {
    title: "Seamless Ship Freight for Global Trade",
    desc: "We partner with leading international shipping lines to move your cargo across major trade routes. From full containers to consolidated loads, we provide dependable schedules and cost-efficient solutions worldwide.",
    img: bannerone,
  },
  {
    title: "Seamless Ship Freight for Global Trade",
    desc: "We partner with leading international shipping lines to move your cargo across major trade routes. From full containers to consolidated loads, we provide dependable schedules and cost-efficient solutions worldwide.",
    img: bannerone,
  },
];

const features = [
  {
    title: "Advanced Real Time Tracking System",
    img: bone,
  },
  {
    title: "From India to the World, Hassle-Free",
    img: btwo,
  },
  {
    title: "Comprehensive Customs and Compliance",
    img: bthree,
  },
];

export default function HeroSlider() {
  return (
    <div className="ml-1 mr-1 rounded-2xl">
      <section className="relative w-full h-[100vh] md:h-[100vh] -mt-20 overflow-hidden rounded-2xl ">
        <Swiper
          navigation
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay]}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.img.src})` }}
              >
                <div className="h-full max-w-7xl mx-auto px-4 flex items-center relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white max-w-2xl "
                  >
                    <h1 className="font-semibold text-3xl md:text-5xl mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-xl mb-6">{slide.desc}</p>
                    <button className="bg-primary text-[16px] text-white font-semibold py-3 px-12 rounded-full transition duration-300">
                      Book Shipment
                    </button>
                  </motion.div>

                  {/* Booking Form */}
                  <div className="absolute md:right-6 md:top-1/2 md:-translate-y-1/2 w-[100%] md:w-[440px] left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 bottom-10 md:bottom-auto bg-white shadow-xl p-10 rounded-3xl z-30">
                    <h3 className="text-lg font-semibold mb-5 text-center md:text-left">
                      Your Booking is a Step Away!
                    </h3>

                    <div className="space-y-8 mt-2">
                      <input
                        type="text"
                        placeholder="Enter your pickup location"
                        className="w-full  p-3 rounded-lg bg-[#f5f5f5] focus:outline-none focus:border-[#013EFE]"
                      />

                      <input
                        type="text"
                        placeholder="Enter your dropping location"
                        className="w-full  p-3 rounded-lg bg-[#f5f5f5] focus:outline-none focus:border-[#013EFE]"
                      />

                      <button className=" w-full bg-primary text-[16px]  text-white font-semibold py-3 px-12 rounded-full transition duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-10 px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[460px] md:h-[460px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg drop-shadow-md">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
