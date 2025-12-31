"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import { Mail, Phone, MapPin } from "lucide-react";
import CustomSlider from "@/components/LocationSlider";
import ContactSection from "@/components/Contactmain";
import Testimonials from "@/components/Testimonials";
import TransformingCities from "@/components/Locations";

import TestimonialSliderRight from "@/components/TestimonialSliderRight";
import ContactUs from "@/asset/contact-us.png";

function Haveanyqueries() {
  return (
    <div>
      <div className="-mt-24 -mt-16">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src={ContactUs} // your hero image path
            alt="About Background"
            fill
            priority
            className="md:object-contain object-cover bg-center"
          />

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black ">Have any queries? We’re all ears!</h1>
          </div>
        </motion.section>
      </div>

      <section className="container mx-auto px-4 py-24 ">
        <MarqueeLogos />
      </section>

      <section className="">
        <ContactSection />
      </section>
      <section className="">
        <TransformingCities />
      </section>

      <section className="pt-24 px-4 overflow-x-hidden">
        <div className=" mx-auto  ">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

export default Haveanyqueries;
