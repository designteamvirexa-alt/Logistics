"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import ShipmentCostCalculator from "@/components/ShipmentCostCalculator";
import FAQ from "@/components/Accordion";
import ratecalculator from "@/asset/rate-calculator.png";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

function RateCalculator() {
  return (
    <div>
      <div className="-mt-24 -mt-16 ">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src={ratecalculator} // your hero image path
            alt="About Background"
            fill
            priority
            className="md:object-contain object-cover bg-center"
          />

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black">Rate Calculator</h1>
          </div>
        </motion.section>
      </div>

      <section className="container mx-auto px-4 py-24 ">
        <MarqueeLogos />
      </section>

      <section className="py-24 pb-0">
        <ShipmentCostCalculator />
      </section>

      <section>
        <FAQ />
      </section>

      <Testimonials />

      <CallToAction />
    </div>
  );
}

export default RateCalculator;
