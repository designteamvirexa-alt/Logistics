"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import { Safety } from "@/components/SafetyIndividual";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import herobg from "@/asset/service/individual.svg";

import FAQSection from "@/components/Accordion";
import ContactSection from "@/components/ContactSection";
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
        <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 md:pt-28 md:pb-0">
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

     

      {/* SECTIONS */}
      <PerfectFor />
      <WhyChoose />
       <Safety />
      <HowItWorks />
    
       <section className="  mx-auto relative px-4 py-12 md:py-16  sm:px-6 lg:px-8">
        <Testimonials />
      </section>
      <section className=" overflow-x-hidden ">
        <div>
          <FAQSection />
        </div>
      </section>
      <section className=" bg-[#F1F2F6] mx-auto overflow-x-hidden ">
        <ContactSection />
      </section>

        <MarqueeLogos />

      <section className="px-4 py-12   md:py-20 md:pt-0 ">
        <div className="relative container mx-auto rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="CTA background"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient overlay */}
          {/* <div className="absolute inset-0 bg-[#003BE3] " /> */}

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center py-16 md:py-20 px-6"
          >
            <h2 className=" text-white mb-4">From Your Door to Their Door.</h2>

            <p className="text-white mb-8 text-sm md:text-base">
              Fast, safe, and affordable – trusted by thousands across India.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-white hover:scale-105 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Individual;
