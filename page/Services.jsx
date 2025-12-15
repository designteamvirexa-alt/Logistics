"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import one from "@/asset/service/1.png";
import two from "@/asset/service/2.png";
import three from "@/asset/service/3.png";
import ServicesSection from '@/components/ServiceCard';
import MarqueeLogos from '@/components/MarqueeLogos';
import Link from 'next/link';
import corporate from "@/asset/helpcenter-salient.webp";
import packing from "@/asset/packing.webp";
import TestimonialSliderRight from '@/components/TestimonialSliderRight';
function Services() {
    return (
        <div>

            <div className="-mt-20">
                <motion.section
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[260px] md:h-[360px] rounded-b-3xl overflow-hidden"
                >
                    {/* Background Image */}
                    <Image
                        src="/about-hero.jpg" // your hero image path
                        alt="About Background"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div>

                    {/* CONTENT */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-3xl md:text-4xl font-semibold drop-shadow-lg">
                            Services
                        </h1>

                        <p className="text-white/80 mt-3 text-sm md:text-base">
                            Home <span className="text-blue-200">›</span> Rate  Calculator
                        </p>
                    </div>
                </motion.section>
            </div>


            <section className="w-full py-12 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* LEFT TEXT */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 md:mb-12">
                        Delivering seamless <br /> logistics for your business
                    </h2>

                    {/* IMAGES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

                        {/* IMAGE 1 */}
                        <div className="rounded-2xl overflow-hidden shadow-sm">
                            <Image
                                src={one}
                                alt="Logistics worker"
                                width={500}
                                height={500}
                                className="w-full h-64 md:h-72 object-cover"
                            />
                        </div>

                        {/* IMAGE 2 */}
                        <div className="rounded-2xl overflow-hidden shadow-sm md:translate-y-10">
                            <Image
                                src={two}
                                alt="Warehouse"
                                width={500}
                                height={500}
                                className="w-full h-64 md:h-72 object-cover"
                            />
                        </div>

                        {/* IMAGE 3 */}
                        <div className="rounded-2xl overflow-hidden shadow-sm md:translate-y-20">
                            <Image
                                src={three}
                                alt="Worker with forklift"
                                width={500}
                                height={500}
                                className="w-full h-64 md:h-72 object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-[#F1F2F6]'>
                <div className="lg:py-20 max-w-7xl mx-auto">
                    <MarqueeLogos />
                </div>
                <div>
                    <ServicesSection />
                </div>

                <div className='mt-12'>
                    <section className="bg-[#F1F2F6] pb-30">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid gap-4 grid-cols-1 lg:grid-cols-[60%_40%]">
                                {/* --- Card 1: Corporate, Individual --- */}
                                <div className="relative p-6 md:p-8 lg:p-10 rounded-3xl flex flex-col justify-between bg-white h-[550px] overflow-hidden transition-shadow duration-300">
                                    <div>
                                        <h3>Corporate, Individual</h3>
                                        <p className="mt-3 ">
                                            Seamless Package Delivery, Right at Your Doorstep!
                                        </p>
                                        <a
                                            href="#"
                                            className="mt-4 inline-block font-semibold text-black hover:text-[#013EFE]"
                                        >
                                            Learn more
                                        </a>
                                    </div>

                                    <div className="absolute bottom-[-10%] right-0 left-0 w-full h-[60%] z-0">
                                        <Image
                                            src={corporate}
                                            alt="Two people discussing package delivery options"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>

                                {/* --- Card 2: Package Delivery --- */}
                                <div className="relative p-6 md:p-8 lg:p-10 rounded-3xl flex flex-col justify-between bg-white h-[550px] overflow-hidden transition-shadow duration-300">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                            Package Delivery
                                        </h3>
                                        <p className="mt-2">
                                            Seamless Package Delivery, Right at Your Doorstep!
                                        </p>
                                        <a
                                            href="#"
                                            className="mt-4 inline-block font-semibold text-black hover:text-[#013EFE]"
                                        >
                                            Learn more
                                        </a>
                                    </div>

                                    <div className="absolute bottom-[-10%] right-0 left-0 w-full h-[60%] z-0">
                                        <Image
                                            src={packing}
                                            alt="A delivery man holding a package"
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mt-12 md:mt-16">
                                <Link
                                    href="#"
                                    className="bg-primary text-[16px]  text-white font-semibold py-3 px-12 rounded-full transition duration-300  shadow-xl shadow-blue-500/50"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>



                <section className="w-full py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* LEFT BIG CARD */}
                        <div className="bg-yellow-400 rounded-3xl p-8 relative overflow-hidden">
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Package Delivery</h3>
                            <p className="text-gray-700 mt-2">
                                Seamless Package Delivery, Right at Your Doorstep!
                            </p>

                            <button className="mt-4 font-medium text-gray-900 underline">
                                Learn More
                            </button>

                            {/* IMAGE */}
                            <Image
                                src=""
                                alt="delivery"
                                className="absolute bottom-0 right-0 w-40 md:w-52 lg:w-56"
                            />
                        </div>

                        {/* RIGHT TWO STACKED CARDS */}
                        <div className="flex flex-col gap-6">

                            {/* BLUE CARD */}
                            <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                                <h3 className="text-xl md:text-2xl font-semibold">Excess Baggage</h3>
                                <p className="mt-2 opacity-90">
                                    Skip airline charges—send your extra luggage at a fraction of the cost.
                                </p>

                                <button className="mt-4 font-medium underline">
                                    Learn More
                                </button>

                                <Image
                                    src=""
                                    alt="payment card"
                                    className="absolute right-6 bottom-6 w-28 md:w-32"
                                />
                            </div>

                            {/* WHITE CARD */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                    Excess Baggage
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    Skip airline charges—send your extra luggage at a fraction of the cost.
                                </p>

                                <button className="mt-4 font-medium underline text-gray-900">
                                    Learn More
                                </button>

                                <Image
                                    src=""
                                    alt="lady with phone"
                                    className="absolute right-6 bottom-0 w-32 md:w-40"
                                />
                            </div>

                        </div>
                    </div>
                </section>
            </section>


                  <section className='mb-9 mt-7'>
                    <div className='max-w-7xl mx-auto'>
                      <TestimonialSliderRight />
                    </div>
                  </section>


        </div>
    )
}

export default Services
