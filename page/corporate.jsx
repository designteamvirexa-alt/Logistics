"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";

import herobg from "@/asset/service/corporate.svg";

import { TrustedBy } from "@/components/TrustedBy";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/CorporateComparison";
import { Scale } from "@/components/Scale";
import { Safety } from "@/components/Safety";
import CallToAction from "@/components/CallToActioncorporate";

function Corporate() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="-mt-24 ">
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 pt-28 pb-12 md:pt-28 md:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT — CONTENT */}
            <div className="relative z-10 text-center md:text-left">
              <motion.h1
                {...fadeUp}
                transition={{ delay: 0.1 }}
                className="text-black font-black mb-6 max-w-xl"
              >
                Corporate Luggage Delivery Solutions
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ delay: 0.2 }}
                className="text-black text-lg max-w-xl mb-6"
              >
                Hassle-Free Luggage Logistics for Businesses, Events & Travel
                Partners
              </motion.p>

              <motion.p
                {...fadeUp}
                transition={{ delay: 0.3 }}
                className="text-black max-w-xl mb-4"
              >
                Frisbi helps organizations move luggage securely, on time, and
                at scale—so employees, guests, and clients can travel light.
              </motion.p>

              <motion.p
                {...fadeUp}
                transition={{ delay: 0.4 }}
                className="text-black max-w-xl mb-8"
              >
                From corporate travel to events and hotels, we manage luggage
                end-to-end with real-time visibility.
              </motion.p>

              <motion.div {...fadeUp} transition={{ delay: 0.5 }}>
                <button className="btn-primary hover:scale-105 transition-all">
                  Get a Custom Corporate Quote
                </button>
              </motion.div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative w-full h-[320px] md:h-[520px]">
              <Image
                src={herobg}
                alt="Corporate Luggage Delivery"
                fill
                priority
                className="object-contain"
              />

              {/* Optional gradient on image */}
              {/* <div className="absolute inset-0 bg-gradient-to-l from-white/70 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </section>

      <MarqueeLogos />

      <TrustedBy />

      <UseCases />
      <Features />
      <HowItWorks />

      <Comparison />
      <Scale />
      <Safety />
      <CallToAction />
    </div>
  );
}

export default Corporate;
