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
        desc: "We partner with leading international shipping lines to move your cargo across major trade routes.",
        img: bannerone,
    },
    //   {
    //     title: "Fast Global Shipping You Can Trust",
    //     desc: "From full containers to consolidated loads, we provide dependable schedules worldwide.",
    //     img: bannerone,
    //   },
    //   {
    //     title: "Reliable Cargo Handling & Cost Savings",
    //     desc: "Optimized freight solutions with end-to-end tracking and transparency.",
    //     img: bannerone,
    //   },
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
        <>
            <section className="relative w-full h-[100vh] md:h-[90vh] -mt-20">
                {/* Background Slider */}
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
                                style={{
                                    backgroundImage: `url(${slide.img.src})`,
                                }}
                            >
                                <div className="bg-black/50 h-full w-full flex items-center -pt-10 md:pt-0">
                                    {/* Left Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-white max-w-xl md:pl-20 -pt-15"
                                    >
                                        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 text-center md:text-left">
                                            {slide.title}
                                        </h1>
                                        <p className="text-base md:text-xl mb-6 text-center md:text-left">
                                            {slide.desc}
                                        </p>
                                        <div className="text-center md:text-left">
                                            <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold">
                                                Book Shipment
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Booking Form */}
                <div
                    className="
          absolute md:right-6 md:top-1/2 md:-translate-y-1/2 
          md:w-[330px] w-[90%] 
          left-1/2 md:left-auto 
          -translate-x-1/2 md:translate-x-0 
          bottom-10 md:bottom-auto 
          bg-white shadow-xl p-6 rounded-2xl 
          z-30
        "
                >
                    <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                        Your Booking is a Step Away!
                    </h3>

                    <input
                        type="text"
                        placeholder="Enter your pickup location"
                        className="w-full border p-3 rounded-lg mb-3"
                    />

                    <input
                        type="text"
                        placeholder="Enter your dropping location"
                        className="w-full border p-3 rounded-lg mb-4"
                    />

                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
                        Book Now
                    </button>
                </div>
            </section>


            <section className="py-10 px-4 md:px-10">
                <div
                    className=" grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    gap-6"
                >
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="
              relative 
              rounded-2xl 
              overflow-hidden 
              group 
              shadow-md 
              hover:shadow-xl 
              transition-all 
              duration-300
            "
                        >
                            {/* Background Image */}
                            <div className="relative h-[260px] md:h-[300px]">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Text Overlay */}
                            <div
                                className="
                                                absolute 
                                                bottom-4 
                                                left-4 
                                                right-4 
                                                text-white 
                                                font-semibold 
                                                text-lg 
                                                leading-snug
                                                drop-shadow-md
                                            "
                            >
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>



    );
}
