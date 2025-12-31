"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutone from "@/asset/about/aboutone.png";


import aboutUs from "@/asset/about/about-bg.png";

import vision from "@/asset/about/vision.png";
import mission from "@/asset/about/mission.jpeg";
import CallToAction from "@/components/CallToAction";
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
        className="relative w-full h-[460px] md:h-[460px] overflow-hidden "
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

      <section className="container mx-auto px-4 pt-24 ">
        <MarqueeLogos />
      </section>

      <section className="container mx-auto px-4 py-24 pb-0">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* LEFT IMAGE (Always first on mobile) */}
          <div className="w-full order-2">
            <Image
              src={aboutone}
              alt="Logistics"
              className="rounded-3xl  w-full  object-cover"
            />
          </div>

          {/* RIGHT CONTENT (2nd on mobile) */}
          <div className="flex flex-col space-y-3 md:space-y-3 order-1 md:text-start text-center">
            <p className=" font-medium">
              Smart Luggage Delivery Services in India
            </p>

            <h2 className=" ">About Frisbi</h2>

            <p className="font-medium text-second">
              Frisbi is a modern door-to-door luggage delivery service in India,
              created to make travel lighter, easier, and stress-free. We help
              individuals, families, and businesses move their luggage safely
              across cities, so they can focus on their journey instead of
              carrying heavy bags.
            </p>

            <p className="font-medium text-second mb-6">
              Built with a customer-first mindset and powered by smart
              logistics, Frisbi is redefining how India travels.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/about"
                className="btn-primary transition-transform hover:scale-105"
              >
                Explore more
              </Link>
            </div>

            {/* SECOND IMAGE – stays inside right column but stacks on mobile */}
            {/* <Image
              src={abouttwo}
              alt="Logistics Team"
              className="
          rounded-3xl 
          w-full 
          h-[500px] 
          sm:h-[200px] 
          md:h-[260px] 
          lg:h-[540px]
          object-cover 
          mt-5
        "
            /> */}
          </div>
        </div>
      </section>

      

      <section className="py-24">
        <Stats
          data={[
            { start: 0, end: 22, label: "Loads delivered" },
            { start: 0, end: 15, label: "Client Served" },
            { start: 0, end: 5, label: "Year of Experience" },
            { start: 0, end: 30, label: "Order Completed" },
          ]}
        />
      </section>

      <section className="pb-24">
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
            <p className="text-xs tracking-wide  uppercase">
              Business forward with trust
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Frisbi Values
            </h2>

            <p className="text-second mt-4 leading-relaxed max-w-lg">
              Our values align to our mission, support our culture, and serve as
              a declaration of how we treat each other, our customers, and our
              partners.
            </p>

            {/* VALUES LIST */}
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Respect</h3>
                <p className="text-second text-sm mt-1 max-w-md">
                  We recognize that the thoughts, feelings, and backgrounds of
                  others are as important as our own.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Integrity</h3>
                <p className="text-second text-sm mt-1 max-w-md">
                  We are honest, ethical, and trustworthy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Accountability</h3>
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

      
      <section className="px-4 py-24">
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
