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
import contactmobile from "@/asset/shippment/contact-banner.svg";


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
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden md:block hidden"
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
            <h1 className="text-black mb-4">
              We'd ❤️ to hear from you Get in touch 👋
            </h1>
            <p className="text-black  text-sm md:text-base">
                  Please send us an email using the form provided. Phone calls
                  are also effective.
                </p>
          </div>
        </motion.section>

        {/* mobile section */}
        <section className="relative bg-white overflow-hidden md:hidden">
          <div className="container mx-auto px-4 py-20 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT — CONTENT */}
              <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-black mb-4">
                  We'd ❤️ to hear from you Get in touch 👋
                </h1>
                <p className="text-black mb-4 text-sm md:text-base">
                  Please send us an email using the form provided. Phone calls
                  are also effective.
                </p>

                {/* CTA */}
              </div>

              {/* RIGHT — IMAGE */}
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[420px] flex justify-center">
                <Image
                  src={contactmobile}
                  alt="Hero"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <MarqueeLogos />

      <section className="py-12 md:py-16 md:pb-24">
        <ContactSection />
      </section>
      <section className="">
        <TransformingCities />
      </section>

      <section className="  mx-auto relative px-4 py-12 md:py-16 lg:py-24 sm:px-6 lg:px-8">
        <Testimonials />
      </section>
    </div>
  );
}

export default Haveanyqueries;
