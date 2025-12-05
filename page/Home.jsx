'use client';
import React, { useState } from 'react'
import { BadgeCheck, BookOpen, BrainCircuit, CheckCircle, Globe2, Plane, User2 } from 'lucide-react';

import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from 'next/image';
import background from "@/asset/background.png";
import location from "@/asset/location.png";
import CustomSlider from '@/components/Slider';
import MarqueeLogos from '@/components/MarqueeLogos';
import ServicesSection from '@/components/ServiceCard';
import { MapPin, Mail, Phone } from "lucide-react";

// Swiper styles are mandatory to import!
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialCard from '@/components/TestimonialCard';
import TestimonialSliderRight from '@/components/TestimonialSliderRight';
import FAQSection from '@/components/Accordion';
import ContactSection from '@/components/ContactSection';



function Home() {
    const tabs = ['Our Mission', 'Our Vision', 'Why Choose Us'];

    const faqData = [
        {
            id: 1,
            title: "1. Choose a Service",
            content:
                "Select from Excess Baggage, Package Delivery, or Airport Transfer based on your shipping needs.",
        },
        {
            id: 2,
            title: "2. Book Online",
            content:
                "Book your shipping service online with a simple and fast process.",
        },
        {
            id: 3,
            title: "3. Pickup & Drop",
            content:
                "Schedule pickup from your location or drop at the nearest center.",
        },
        {
            id: 4,
            title: "4. Track Your Shipment",
            content:
                "Track your shipment in real time from pickup to delivery.",
        },
        {
            id: 5,
            title: "5. Support & Rewards",
            content:
                "Get premium support and earn rewards for every shipment.",
        },
    ];





    const [open, setOpen] = useState(1);


    return (
        <div>

            <HeroSlider />
            <section className="px-4 md:px-10 pb-28 py-10 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('@/asset/background.png')" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">

                    {/* LEFT IMAGE + BADGES */}
                    <div>
                        <Image src={location} alt='location' width="60%" />
                    </div>

                    {/* RIGHT CONTENT + ACCORDION */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            How to Ship with <span className="text-blue-600">Frisbi</span>
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Sending packages with Frisbi is simple. Pack your baggage with package
                            securely and we will do the rest.
                        </p>

                        {/* ACCORDION START */}
                        <div>
                            {faqData.map((step) => (
                                <div key={step.id} className="border-b py-4">
                                    <button
                                        onClick={() => setOpen(open === step.id ? null : step.id)}
                                        className="flex w-full justify-between items-center text-left"
                                    >
                                        <span className="font-semibold text-lg">{step.title}</span>
                                        {open === step.id ? <Minus size={20} /> : <Plus size={20} />}
                                    </button>

                                    <AnimatePresence>
                                        {open === step.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <p className="text-gray-600 mt-3 pr-4">{step.content}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                        {/* ACCORDION END */}
                    </div>
                </div>
            </section>

            <section className='bg-[#000] pt-20 pb-35'>
                <CustomSlider />
            </section>

            <section className='max-w-7xl mx-auto'>
                <MarqueeLogos />
            </section>
            <section className='max-w-7xl mx-auto'>
                <ServicesSection />

                <section className=" text-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto">
                        <div
                            className="bg-black rounded-[3rem] p-6 md:p-12 lg:p-12 overflow-hidden shadow-2xl"
                            style={{ boxShadow: '0 0 50px rgba(100, 50, 255, 0.5)' }} // Subtle glow effect
                        >
                            {/* Main content grid: Two columns for desktop/tablet, stacked for mobile */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                                {/* 1. Left Content Area (Text & Features) */}
                                <div className="order-2 lg:order-1">
                                    <h1 className="text-4xl md:text-1xl lg:text-2xl font-extrabold mb-8 leading-tight">
                                        Frisbi About us
                                    </h1>

                                    <p className="text-base md:text-lg text-gray-300 mb-12 max-w-xl">
                                        Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful strategies from end-to-end.
                                    </p>

                                    {/* Feature Grid (2 columns on all sizes) */}
                                    <div className="grid grid-cols-2 gap-8 mb-12">

                                        {/* Feature 1 */}
                                        <div>
                                            <div className="text-xl font-bold text-indigo-400 mb-1">01</div>
                                            <h3 className="text-xl md:text-1xl font-semibold mb-2">Professional Packing</h3>
                                            <p className="text-sm md:text-base text-gray-400">
                                                Could you clarify if you're looking for a guide.
                                            </p>
                                        </div>

                                        {/* Feature 2 */}
                                        <div>
                                            <div className="text-xl font-bold text-indigo-400 mb-1">02</div>
                                            <h3 className="text-xl md:text-xl font-semibold mb-2">Pre-Move Planning</h3>
                                            <p className="text-sm md:text-base text-gray-400">
                                                Could you clarify if you're looking for a guide.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Call-to-Action Button */}
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg shadow-blue-500/50"
                                    >
                                        Explore more
                                    </button>
                                </div>

                                {/* 2. Right Content Area (Illustration/Image) */}
                                {/* The illustration is complex, so we'll use an Image wrapper for responsiveness */}
                                <div className="order-1 lg:order-2 flex justify-center lg:justify-end min-h-[300px] md:min-h-[500px] relative">
                                    {/* This placeholder is where your image will go */}
                                    <div className="relative w-full max-w-2xl h-full">
                                        <Image
                                            src="/images/about_us_illustration.png" // **Replace with the actual path to your combined image**
                                            alt="Global logistics illustration with a map, airplane, and country-wise order data"
                                            layout="fill"
                                            objectFit="contain" // Ensures the image fits within the container responsively
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-gray-50 py-4 md:py-5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                        {/* RESPONSIVE CARD GRID: Mobile/Tablet: 1 column, Desktop: 2 columns */}
                        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">

                            {/* --- Card 1: Corporate, Individual --- */}
                            <div
                                className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full overflow-hidden"
                            >
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                        Corporate, Individual
                                    </h3>
                                    <p className="mt-2 text-base md:text-lg text-gray-600">
                                        Seamless Package Delivery, Right at Your Doorstep!
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block font-semibold text-gray-600 hover:text-indigo-600"
                                    >
                                        Learn More
                                    </a>
                                </div>

                                {/* Illustration Area - Card 1 */}
                                <div className="relative w-full h-48 md:h-64 mt-6">
                                    <Image
                                        src="/images/corporate_individual_illustration.png" // **Replace with your actual path**
                                        alt="Two people discussing package delivery options"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>

                            {/* --- Card 2: Package Delivery --- */}
                            <div
                                className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full overflow-hidden"
                            >
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                        Package Delivery
                                    </h3>
                                    <p className="mt-2 text-base md:text-lg text-gray-600">
                                        Seamless Package Delivery, Right at Your Doorstep!
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block font-semibold text-gray-600 hover:text-indigo-600"
                                    >
                                        Learn More
                                    </a>
                                </div>

                                {/* Illustration Area - Card 2 */}
                                <div className="relative w-full h-48 md:h-64 mt-6">
                                    <Image
                                        src="/images/package_delivery_illustration.png" // **Replace with your actual path**
                                        alt="A delivery man holding a package"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Central Button */}
                        <div className="flex justify-center mt-12 md:mt-16">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full text-lg transition duration-300 shadow-xl shadow-blue-500/50"
                            >
                                View All Services
                            </button>
                        </div>
                    </div>
                </section>
            </section>

            <section>
                <div className='max-w-7xl mx-auto'>
                    <TestimonialSliderRight />
                </div>


                <div>
                    <FAQSection />
                </div>

            </section>

            <section className='mt-7 bg-[#050A1F] mx-auto'>
                <ContactSection />
            </section>



        </div>
    )
}

export default Home
