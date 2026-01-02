"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutone from "@/asset/about/aboutone.png";
import About from "@/asset/home/about-frisbi.png";

import aboutUs from "@/asset/about/about-bg.png";
import aboutmobile from "@/asset/about/about-banner-img.svg";
import { Check, Minus, NetworkIcon, Plus } from "lucide-react";

import vision from "@/asset/about/vision.png";
import mission from "@/asset/about/mission.jpeg";
import CallToAction from "@/components/CallToActionabout";
import Testimonials from "@/components/Testimonials";
import MarqueeLogos from "@/components/MarqueeLogos";

import Stats from "@/components/Stats";
import ContactSection from "@/components/ContactSection";
import TransformingCities from "@/components/Locations";
// import { Link } from "lucide-react";

import Link from "next/link";
function Aboutus() {
  return (
    <div className="-mt-24">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full h-[460px] md:h-[460px] overflow-hidden md:block hidden"
      >
        {/* Background Image */}
        <Image
          src={aboutUs}
          alt="About Background"
          fill
          priority
          className="md:object-contain object-cover bg-center"
        />
        {/* <div className="absolute inset-0 bg-black/30 " /> */}
        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-black text-3xl md:text-4xl font-semibold mb-4">
            Hi! 👋 We are Frisbi
          </h1>

          <p className="text-black mb-8 text-sm md:text-base">
            India’s trusted luggage delivery service, built to make travel
            lighter, smarter, and stress-free.
          </p>

          {/* CTA */}
          <Link
            href="/contact-us"
            className="btn-primary hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>

      {/* mobile section */}
      <section className="relative bg-white overflow-hidden md:hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT — CONTENT */}
            <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
              <h1 className="text-black text-3xl md:text-4xl font-semibold mb-4">
                Hi! 👋 We are Frisbi
              </h1>

              <p className="text-black mb-4 text-sm md:text-base">
                India’s trusted luggage delivery service, built to make travel
                lighter, smarter, and stress-free.
              </p>

              {/* CTA */}
              <Link
                href="/contact-us"
                className="btn-primary hover:scale-105 transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-[420px] flex justify-center">
              <Image
                src={aboutmobile}
                alt="Hero"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <MarqueeLogos />

      <section className="container mx-auto relative px-4 py-12  sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="relative z-10">
          <h2 className="text-center mb-10 md:mb-12 lg:mb-16">
            Built for worry-free luggage delivery across cities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h3 className=" mb-4 text-center md:text-left">About Frisbi</h3>

              <p className="text-second mb-8 text-center md:text-left max-w-xl leading-relaxed">
                We started because dragging 20kg through airports didn’t make
                sense. Neither did paying ₹2,000 in excess baggage fees or
                leaving behind things you actually need. So we built a reliable
                luggage delivery service made for real travel. Your luggage now
                travels just as safely as you do.
              </p>

              <ul className="space-y-3 font-medium text-[15px] mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Professional packing using sturdy boxes
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Live tracking from pickup to delivery
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Service available across 25,000+ pincodes in India
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  24/7 support on phone, email, and WhatsApp
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Dedicated point of contact for every shipment
                </li>
              </ul>

              {/* CTA */}
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/about"
                  className="btn-primary transition-transform hover:scale-105"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl h-[280px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={About}
                  alt="Frisbi luggage delivery illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 ">
        <Stats
          data={[
            { start: 0, end: 22, label: "Loads delivered" },
            { start: 0, end: 15, label: "Client Served" },
            { start: 0, end: 5, label: "Year of Experience" },
            { start: 0, end: 30, label: "Order Completed" },
          ]}
        />
      </section>

      <section className="py-12 md:pt-16 md:pb-24 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
          {/* LEFT GRID IMAGES */}
          <div className="grid grid-cols-2 gap-4 order-2">
            {/* BLUE BOX */}
            <div className="bg-primary rounded-3xl p-6 leading-[1.4] flex items-end justify-end text-white text-3xl font-semibold min-h-[150px] md:min-h-[200px]">
              Our Corporate Values
            </div>

            {/* IMAGE 1 */}
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={vision}
                alt="Truck image"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="col-span-2 rounded-3xl overflow-hidden">
              <Image
                src={mission}
                alt="Cargo image"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1">
            <h2 className="md:text-left text-center">Our Frisbi Values</h2>

            <p className="text-second mt-4 leading-relaxed max-w-lg md:text-left text-center">
              Our values align to our mission, support our culture, and serve as
              a declaration of how we treat each other, our customers, and our
              partners.
            </p>

            {/* VALUES LIST */}
            <div className="mt-6 space-y-8 md:text-left text-center">
              <div>
                <h4 className="text-lg font-semibold">Respect</h4>
                <p className="text-second text-sm mt-1 max-w-md">
                  We recognize that the thoughts, feelings, and backgrounds of
                  others are as important as our own.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Integrity</h4>
                <p className="text-second text-sm mt-1 max-w-md">
                  We are honest, ethical, and trustworthy.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Accountability</h4>
                <p className="text-second text-sm mt-1 max-w-md">
                  We accept full responsibility for our decisions, actions, and
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TransformingCities />

      <section className="  mx-auto relative px-4 py-12 md:py-16 lg:py-24 sm:px-6 lg:px-8">
        <Testimonials />
      </section>
      <section className=" bg-[#F1F2F6] mx-auto overflow-x-hidden ">
        <ContactSection />
      </section>

      <CallToAction />
    </div>
  );
}

export default Aboutus;
