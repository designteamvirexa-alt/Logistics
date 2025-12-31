"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import { Safety } from "@/components/SafetyIndividual";

import herobg from "@/asset/service/individual.svg";


import { PerfectFor } from "@/components/PerfectFor";
import { WhyChoose } from "@/components/Whychoose";
import { WhenToUse } from "@/components/WhenToUse";
import { HowItWorks } from "@/components/HowItWorksindividual";
import CallToAction from "@/components/CallToActioncorporate";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Individual() {
  return (
    <div className="-mt-24 -mt-16">
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT — CONTENT (UNCHANGED) */}
            <div className="relative z-10">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-black font-extrabold text-4xl md:text-6xl max-w-xl mb-6"
              >
                Travel Light. 
                We Deliver Your Luggage.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-black text-lg md:text-xl max-w-xl mb-6"
              >
                Frisbi makes personal travel easier by taking the weight off
                your shoulders—literally.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-black max-w-xl mb-8"
              >
                Whether you're moving between cities, heading to a hotel, or
                planning a long stay, we pick up your luggage from your doorstep
                and deliver it safely to your destination—so you can travel
                hands-free and stress-free.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button className="btn-primary hover:scale-105 transition-all">
                  Book Your Delivery Now
                </button>
              </motion.div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative w-full h-[320px] md:h-[520px]">
              <Image
                src={herobg}
                alt="Individual Luggage Delivery"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <MarqueeLogos />
      </section>

      {/* SECTIONS */}
      <PerfectFor />
      <WhyChoose />
       <Safety />
      <HowItWorks />
    
      <CallToAction />
    </div>
  );
}

export default Individual;
