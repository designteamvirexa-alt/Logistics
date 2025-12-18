"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import bannerone from "@/asset/banner.png";

const slides = [
  {
    title: "Seamless Ship Freight for Global Trade",
    desc: "We partner with leading international shipping lines to move your cargo across major trade routes. From full containers to consolidated loads, we provide dependable schedules and cost-efficient solutions worldwide.",
    img: bannerone,
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-screen p-3 -mt-16 overflow-hidden -mt-24">
      <Swiper
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                className="object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-3xl" />
            </div>

            {/* CONTENT */}
            <div className="relative z-30 h-full">
              <div
                className="
                  container mx-auto px-4 md:px-10
                  h-full
                  flex
                  items-start md:items-center
                  pt-24 md:pt-0
                "
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  
                  {/* LEFT CONTENT */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white max-w-xl"
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-100">
                      {slide.desc}
                    </p>

                    <Link
                      href="#"
                      className="inline-block px-6 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 transition"
                    >
                      Book Shipment
                    </Link>
                  </motion.div>

                  {/* RIGHT BOOKING FORM */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="
                      w-full max-w-md
                      mx-auto lg:mx-0
                      bg-white
                      rounded-3xl
                      shadow-2xl
                      p-6 sm:p-8
                    "
                  >
                    <h3 className="text-lg font-semibold mb-6 text-center lg:text-left">
                      Your Booking is a Step Away!
                    </h3>

                    <div className="space-y-5">
                      {/* Pickup */}
                      <div className="relative">
                        <input
                          type="text"
                          placeholder=" "
                          className="peer w-full p-3 rounded-lg bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-primary placeholder-transparent"
                        />
                        <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1">
                          Pickup Location
                        </label>
                      </div>

                      {/* Drop */}
                      <div className="relative">
                        <input
                          type="text"
                          placeholder=" "
                          className="peer w-full p-3 rounded-lg bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-primary placeholder-transparent"
                        />
                        <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1">
                          Drop Location
                        </label>
                      </div>

                      <button className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:opacity-90 transition">
                        Book Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
