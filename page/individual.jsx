"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import herobg from "@/asset/service/standard-services.png";

import { PerfectFor } from "@/components/PerfectFor";
import { WhyChoose } from "@/components/Whychoose";
import { WhenToUse } from "@/components/WhenToUse";

import CallToAction from "@/components/CallToActioncorporate";

function Individual() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="-mt-20">
      {/* HERO SECTION */}
      <section className="relative h-[650px] md:h-[660px] rounded-3xl p-2">
        <Image
          src={herobg}
          alt="Corporate Luggage Delivery"
          fill
          priority
          className="object-cover rounded-3xl p-2"
        />

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          {/* Badge */}
          <motion.div
            {...fadeUp}
            className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-2 rounded-full mb-6"
          >
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">✨</span>
              Individual Luggage Delivery
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-white font-black mb-6"
          >
            Travel Light. We Deliver Your Luggage.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mb-6"
          >
            Frisbi makes personal travel easier by taking the weight off your
            shoulders—literally.
          </motion.p>

          {/* Description */}
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="text-purple-100 max-w-2xl mb-4"
          >
            Whether you're moving between cities, heading to a hotel, or
            planning a long stay, we pick up your luggage from your doorstep and
            deliver it safely to your destination, so you can travel hands-free
            and stress-free.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white px-8 py-3 text-sm sm:text-base font-semibold rounded-full hover:scale-105 transition-all">
              Book Your Delivery Now
            </button>
          </motion.div>
        </div>
      </section>

      <PerfectFor />
      <WhyChoose />
      <WhenToUse />
       {/* <HowItWorks /> */}
    </div>
  );
}

export default Individual;
