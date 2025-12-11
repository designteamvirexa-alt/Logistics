"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import herobg from "@/asset/service/standard-services.png";
import one from "@/asset/service/2.png";

import PricingStructure from "@/components/PricingStructure";
import Keyfurture from "@/components/Keyfuture";
import PackageGuidelines from "@/components/PackageGuidelines";
import HowItWorks from "@/components/OurProcess";
import MarqueeLogos from "@/components/MarqueeLogos";

function Services() {
  const idealFor = [
    "Small businesses",
    "E-commerce sellers",
    "Students & families",
    "Regular parcel senders",
    "Document & lightweight package shipping",
  ];

  const ensures = [
    "Secure handling",
    "Professional pickup",
    "Cost-efficient delivery",
    "Full tracking visibility",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="-mt-20">
      {/* HERO SECTION */}
      <section className=" relative h-[650px] md:h-[660px] rounded-3xl p-2">
        <Image
          src={herobg}
          alt="Hero Background"
          fill
          priority
          className="object-cover rounded-3xl p-2"
        />

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 
                        px-8 py-2 rounded-full mb-6"
          >
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">✨</span>
              Safe. Affordable. Trustworthy. Delivered on time, every time.
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-black mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Standard Delivery
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mb-6"
          >
            India’s most affordable and reliable parcel delivery solution for
            non-urgent shipments.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-purple-100 max-w-2xl mb-10"
          >
            <span className="font-semibold text-white">Perfect for:</span> 
            Documents, parcels, business shipments, e-commerce orders, and personal packages.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white px-8 py-3 text-sm sm:text-base font-semibold 
                               rounded-full hover:scale-105 transition-all">
              Book Standard Delivery
            </button>

            <button className="bg-white/10 border border-white/20 text-white 
                               px-8 py-3 rounded-full text-sm sm:text-base
                               hover:bg-white/20 transition-all">
              View Pricing
            </button>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full py-12 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <Image
            src={one}
            alt="Overview"
            width={500}
            height={500}
            className="rounded-3xl w-full h-56 sm:h-72 md:h-80 lg:h-[450px] object-cover"
          />

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frisbi Overview</h2>

            <p className="text-second text-base leading-relaxed mb-6">
              Standard Delivery is designed for customers who prefer 
              budget-friendly shipping without compromising safety. Whether 
              you're sending personal packages or business documents, our 
              Standard service delivers consistent performance, transparent 
              pricing, and nationwide coverage.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 
                              rounded-3xl p-6 border border-blue-100">
                <h4 className="text-lg font-semibold mb-4">Ideal for:</h4>
                <ul className="space-y-3">
                  {idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-black">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 
                              rounded-3xl p-6 border border-green-100">
                <h4 className="text-lg font-semibold mb-4">This service ensures:</h4>
                <ul className="space-y-3">
                  {ensures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-black">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS + PRICING */}
      <section className="bg-[#F1F2F6]">
    
        <PricingStructure />
        <Keyfurture/>
        <PackageGuidelines/>
        <HowItWorks/>
      </section>
    </div>
  );
}

export default Services;
