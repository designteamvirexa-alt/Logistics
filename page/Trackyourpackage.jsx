"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";

import MarqueeLogos from "@/components/MarqueeLogos";
import FAQ from "@/components/Accordion";
import ContactSection from "@/components/ContactSection";
import TestimonialSliderRight from "@/components/TestimonialSliderRight";

import trackbg from "@/asset/track-your-package.png";
import tracking from "@/asset/shippment/tracking-point.webp";

function Trackyourpackage() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="-mt-24 -mt-16">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden"
        >
          <Image
            src={trackbg}
            alt="Track Package Background"
            fill
            priority
            className="md:object-contain object-cover bg-center"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black text-3xl md:text-4xl">
              Track your package
            </h1>
          </div>
        </motion.section>
      </div>

      {/* LOGO MARQUEE */}
      <section className="container mx-auto px-4 py-24 ">
        <MarqueeLogos />
      </section>

      {/* TRACKING SECTION */}
      <section className="w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10">
          {/* IMAGE */}
          <div className="w-full rounded-3xl overflow-hidden shadow-md">
            <Image
              src={tracking}
              alt="Shipment"
              width={700}
              height={600}
              className="w-full h-[560px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">
            <h2>Track Shipments, With Ease</h2>
            <p className="text-second mt-3">
              Check your parcel’s latest updates and delivery status right here.
            </p>

            {/* FORM CARD */}
            <div className="mt-8 bg-white rounded-3xl drop-shadow-[0_4px_100px_rgba(0,0,0,0.08)] p-10">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Track your orders easily
              </h3>

              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Enter your tracking code"
                  className="w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none focus:ring-2 focus:ring-[#013EFE] transition"
                />
                <p className="text-second text-[15px] mt-2">
                  Eg: FrisbI_0987578ABC01
                </p>
              </div>

              <div className="mt-5">
                <Link
                  href="#"
                  className="w-full block bg-primary text-[16px] text-center text-white font-semibold py-3 px-12 rounded-full transition duration-300"
                >
                  Track Now
                </Link>
              </div>

              <div className="mt-6">
                <h4 className="text-gray-900 font-semibold text-base">
                  Can’t Find Your Order Details?
                </h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Your AWB number was sent to you via Email and SMS at the time
                  of order confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-16">
        <FAQ />
      </section>

      {/* TESTIMONIALS */}
      <section className="pb-24">
        <Testimonials />
      </section>
    </div>
  );
}

export default Trackyourpackage;
