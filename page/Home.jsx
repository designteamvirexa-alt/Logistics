"use client";
import React, { useState } from "react";
import {
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  CheckCircle,
  Globe2,
  Plane,
  User2,
} from "lucide-react";


import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import background from "@/asset/background.png";
import location from "@/asset/location.png";
import CustomSlider from "@/components/Slider";
import MarqueeLogos from "@/components/MarqueeLogos";
import ServicesSection from "@/components/ServiceCard";
import { MapPin, Mail, Phone } from "lucide-react";
import about from "@/asset/about-us.webp";
import corporate from "@/asset/helpcenter-salient.webp";
import packing from "@/asset/packing.webp";

// Swiper styles are mandatory to import!
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialSliderRight from "@/components/TestimonialSliderRight";
import FAQSection from "@/components/Accordion";
import ContactSection from "@/components/ContactSection";
import StrengthSlider from "@/components/Slider";

function Home() {
  const tabs = ["Our Mission", "Our Vision", "Why Choose Us"];

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
      content: "Track your shipment in real time from pickup to delivery.",
    },
    {
      id: 5,
      title: "5. Support & Rewards",
      content: "Get premium support and earn rewards for every shipment.",
    },
  ];

  const [open, setOpen] = useState(1);

  return (
    <div>
      <HeroSlider />
      <section
        className="px-4 md:px-10 pb-28 py-10 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('@/asset/background.png')" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
          {/* LEFT IMAGE + BADGES */}
          <div>
            <Image src={location} alt="location" width="60%" />
          </div>

          {/* RIGHT CONTENT + ACCORDION */}
          <div>
            <h2 className="mb-7">
              How to Ship with <span className="text-primary">Frisbi</span>
            </h2>

            <p className=" mb-6">
              Sending packages with Frisbi is simple. Pack your baggage with
              package securely and we will do the rest.
            </p>

            {/* ACCORDION START */}
            <div>
              {faqData.map((step) => (
                <div key={step.id} className="border-b py-4">
                  <button
                    onClick={() => setOpen(open === step.id ? null : step.id)}
                    className="flex w-full justify-between items-center text-left"
                  >
                    <span className="font-bold text-[22px]">{step.title}</span>
                    {open === step.id ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>

                  <AnimatePresence>
                    {open === step.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="text-[#7B7881] mt-3 pr-4">
                          {step.content}
                        </p>
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

      <section className="relative py-36  bg-black">
        <CustomSlider />
      </section>

      <section className="max-w-7xl mx-auto  "></section>
      <section className="bg-[#F1F2F6] ">
        <div className="lg:py-20 max-w-7xl mx-auto">
          <MarqueeLogos />
        </div>

        <div className="max-w-7xl mx-auto">
          <ServicesSection />
        </div>

        {/* <section className=" text-white max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div
              className="bg-black rounded-3xl p-6 md:p-12 lg:p-12  overflow-hidden "
             
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 ">
               
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4">Frisbi About us</h3>

                  <p className="text-[#ffffff]">
                    Our global logistics expertise, advanced supply chain
                    technology & customized logistics solutions will help you
                    analyze, develop and implement successful strategies from
                    end-to-end.
                  </p>

             
                  <div className="grid grid-cols-2 gap-8 mb-12">
                  
                    <div className="pt-10">
                      <div className="text-xl font-bold text-white mb-4">
                        01
                      </div>
                      <h3 className="text-[24px]  mb-2">
                        Professional Packing
                      </h3>
                      <p className="text-sm md:text-base text-white">
                        Could you clarify if you're looking for a guide.
                      </p>
                    </div>

                  
                    <div className="pt-10">
                      <div className="text-xl font-bold text-white mb-4">
                        02
                      </div>
                      <h3 className="text-xl md:text-xl font-semibold mb-2">
                        Pre-Move Planning
                      </h3>
                      <p className="text-sm md:text-base text-white">
                        Could you clarify if you're looking for a guide.
                      </p>
                    </div>
                  </div>

                 
                  <button className="bg-primary text-[18px]  text-white font-semibold py-3 px-12 rounded-full transition duration-300 ">
                    Explore more
                  </button>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end min-h-[300px] md:min-h-[500px] relative">
                  
                  <div className="relative w-full max-w-2xl h-full">
                    <Image
                      src={about} 
                      alt="Global logistics illustration with a map, airplane, and country-wise order data"
                      layout="fill"
                      objectFit="contain" 
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="relative text-white max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          {/* 🔹 Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
          >
            <source src="https://themenectar.com/demo-media/visual-hooks-bg-3.mp4" type="video/mp4" />
          </video>

          {/* Optional: Dark Overlay */}
          <div className="absolute inset-0 bg-black -z-10"></div>

          <div className="container mx-auto relative z-10">
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-12 lg:p-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                {/* Left Text Section */}
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4">Frisbi About us</h3>

                  <p className="text-[#ffffff]">
                    Our global logistics expertise, advanced supply chain
                    technology & customized logistics solutions will help you
                    analyze, develop and implement successful strategies from
                    end-to-end.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="pt-10">
                      <div className="text-xl font-bold text-white mb-4">
                        01
                      </div>
                      <h3 className="text-[24px] mb-2">Professional Packing</h3>
                      <p className="text-sm md:text-base text-white">
                        Could you clarify if you're looking for a guide.
                      </p>
                    </div>

                    <div className="pt-10">
                      <div className="text-xl font-bold text-white mb-4">
                        02
                      </div>
                      <h3 className="text-xl md:text-xl font-semibold mb-2">
                        Pre-Move Planning
                      </h3>
                      <p className="text-sm md:text-base text-white">
                        Could you clarify if you're looking for a guide.
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="bg-primary text-[18px] text-white font-semibold py-3 px-12 rounded-full transition duration-300">
                    Explore more
                  </button>
                </div>

                {/* Right Image */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end min-h-[300px] md:min-h-[500px] relative">
                  <div className="relative w-full max-w-2xl h-full">
                    <Image
                      src={about}
                      alt="Global logistics illustration"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      </section>

      <section className="py-30 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSliderRight />
        </div>
      </section>

      <section className="pb-30">
        <div>
          <FAQSection />
        </div>
      </section>

      <section className=" bg-[#000] mx-auto ">
        <ContactSection />
      </section>
    </div>
  );
}

export default Home;
