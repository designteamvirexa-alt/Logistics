"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import MarqueeLogos from '@/components/MarqueeLogos';
import FAQ from '@/components/Accordion';
import ContactSection from '@/components/ContactSection';
import TestimonialSliderRight from '@/components/TestimonialSliderRight';

function Trackyourpackage() {
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
                            Track your package
                        </h1>

                        <p className="text-white/80 mt-3 text-sm md:text-base">
                            Home <span className="text-blue-200">›</span> Track your package
                        </p>
                    </div>
                </motion.section>
            </div>

            <section className='max-w-7xl mx-auto'>
                <MarqueeLogos />
            </section>

            <section className="w-full py-16 md:py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10">

                    {/* LEFT IMAGE */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/track-image.jpg" // change to your image
                            alt="Shipment"
                            width={700}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            Track Shipments, With Ease
                        </h2>

                        <p className="text-gray-600 mt-3 text-sm md:text-base">
                            Check your parcel’s latest updates and delivery status right here.
                        </p>

                        {/* FORM CARD */}
                        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                Track your orders easily
                            </h3>

                            <div className="mt-5">
                                <input
                                    type="text"
                                    placeholder="Enter your tracking code"
                                    className="w-full p-3 rounded-lg border border-gray-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <p className="text-gray-400 text-xs mt-2">
                                    Eg: FrisbI_0987578ABC01
                                </p>
                            </div>

                            <button className="w-full mt-5 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition">
                                Track Now
                            </button>

                            <div className="mt-6">
                                <h4 className="text-gray-900 font-semibold text-base">
                                    Can’t Find Your Order Details?
                                </h4>
                                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                    Your AWB number was sent to you via Email and SMS at the time of order confirmation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <FAQ />
            </section>

            <section className='mb-9'>
                <div className='max-w-7xl mx-auto'>
                    <TestimonialSliderRight />
                </div>
            </section>
        </div>
    )
}

export default Trackyourpackage
