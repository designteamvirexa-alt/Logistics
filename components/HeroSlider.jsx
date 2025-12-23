"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import bannerone from "@/asset/banner-1-1.jpg";
import bannertwo from "@/asset/premium-luggage.jpg";
import bannerthree from "@/asset/luggage-person.jpg";

const slides = [
  {
    title: "Door-to-Door Luggage Delivery for Stress-Free Travel",
    desc: "Skip the heavy bags and travel hands-free. Frisbi picks up your luggage from your doorstep and delivers it safely to your destination. Book in minutes, track in real time, and enjoy a smoother, lighter journey.",
    img: bannerone,
  },
  {
    title: "Safe, Fast & Reliable Luggage Delivery Across Cities",
    desc: "Frisbi provides safe, fast, and reliable intercity luggage delivery across India. Enjoy secure handling, transparent pricing, and real-time tracking for a hassle-free travel experience.",
    img: bannertwo,
  },
  {
    title: "India’s Smart Luggage Delivery Solution",
    desc: "Smart logistics meets seamless travel. Book online, track in real time, and get your luggage delivered safely to your destination.",
    img: bannerthree,
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-screen p-3 -mt-24 overflow-hidden">
      <Swiper
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* BACKGROUND */}
            <div className="absolute inset-0">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
            </div>

            {/* CONTENT */}
            <div className="relative z-30 h-full">
              <div className="container mx-auto px-4 md:px-8 h-full flex items-start md:items-center pt-24 md:pt-0">
                <div className="w-full flex flex-col lg:flex-row items-center">
                  
                  {/* LEFT CONTENT */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white max-w-xl w-full text-center lg:text-left"
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-100">
                      {slide.desc}
                    </p>

                    <div className="flex justify-center lg:justify-start">
                      <Link
                        href="#"
                        className="inline-block px-6 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 transition"
                      >
                        Book Shipment
                      </Link>
                    </div>
                  </motion.div>

                  {/* RIGHT FORM */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md mt-10 lg:mt-0 lg:ml-auto bg-white rounded-3xl  p-8 sm:p-8"
                  >
                    <h3 className="text-lg font-semibold mb-6 text-center lg:text-left">
                      Send your luggage now!
                    </h3>

                    <div className="space-y-5">
                      <FloatingInput label="Pickup Location" />
                      <FloatingInput label="Drop Location" />

                      <button className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:opacity-90 transition">
                        Get Quote
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MOBILE ARROW POSITION FIX */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-swiper .swiper-button-prev,
          .hero-swiper .swiper-button-next {
            top: auto;
            bottom: 20px;
            transform: none;
          }

          .hero-swiper .swiper-button-prev {
            left: 35%;
          }

          .hero-swiper .swiper-button-next {
            right: 35%;
          }
        }
      `}</style>
    </section>
  );
}

/* FLOATING INPUT */
function FloatingInput({ label }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder=" "
        className="peer w-full p-3 rounded-lg bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-primary placeholder-transparent"
      />
      <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-3 
        peer-focus:-top-2 peer-focus:text-xs 
        peer-focus:bg-white peer-focus:px-1">
        {label}
      </label>
    </div>
  );
}
