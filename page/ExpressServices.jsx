"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Check, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import herobg from "@/asset/service/standard-services.png";
import one from "@/asset/service/2.png";
import location from "@/asset/location.png";

// 🔥 CLIENT-ONLY COMPONENTS (SSR SAFE)
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
const ServiceFAQSection = dynamic(() => import("@/components/ServiceAccordionExpress"), { ssr: false });
const CallToAction = dynamic(() => import("@/components/CallToActionExpress"), { ssr: false });
const Comparison = dynamic(() => import("@/components/Comparison"), { ssr: false });
const PricingStructure = dynamic(() => import("@/components/PricingStructureExpress"), { ssr: false });
const Keyfuture = dynamic(() => import("@/components/Keyfutureexpress"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/OurProcessexpress"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const TransformingCities = dynamic(() => import("@/components/Locations"), { ssr: false });

export default function ExpressServices() {
  // ✅ FIX: removed <number | null>
  const [open, setOpen] = useState(1);

  const idealFor = [
    "Urgent documents",
    "Business contracts",
    "Medical & pharmacy shipments",
    "E-commerce priority orders",
    "Time-sensitive parcels",
  ];

  const ensures = [
    "Faster transit times",
    "Priority pickup & delivery",
    "Higher handling care",
    "Minimal transit delays",
  ];

  const faqData = [
    { id: 1, title: "1. Save Time", content: "Perfect for deadlines and emergencies." },
    { id: 2, title: "2. Safe Priority Handling", content: "Less handling points = lower risk." },
    { id: 3, title: "3. Faster Business Operations", content: "Ideal for B2B & enterprise clients." },
    { id: 4, title: "4. Complete Visibility", content: "Live tracking and proof of delivery." },
    { id: 5, title: "5. Peace of Mind", content: "Guaranteed delivery timelines." },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="-mt-20">
      {/* HERO */}
      <section className="relative h-[550px] md:h-[560px] rounded-3xl p-2">
        <Image
          src={herobg}
          alt="Express Delivery"
          fill
          priority
          className="object-cover rounded-3xl p-2"
        />

        <div className="container relative z-10 mx-auto px-4 py-28">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-2 rounded-full mb-6"
          >
            <p className="text-white">✨ When time matters, choose Express</p>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-black mb-6"
          >
            Express Delivery
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mb-6"
          >
            Fast, priority parcel delivery for urgent shipments across India.
          </motion.p>

          <motion.p   className="text-blue-100 text-lg max-w-2xl mb-6">Best for: Urgent documents, business-critical packages, medical supplies & time-sensitive deliveries.</motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4"
          >
            <button className="bg-white px-8 py-3 font-semibold rounded-full">
              Book Now
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full">
              Rate Calculator
            </button>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          <Image
            src={one}
            alt="Overview"
            className="rounded-3xl h-[450px] object-cover"
          />

          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-4">Frisbi Express Overview</h2>
            <p className="text-second mb-8">
              Express Delivery is our high-speed logistics service built for customers
              who need guaranteed and priority delivery.
            </p>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-3xl border">
                <h4 className="font-semibold mb-4">Ideal for:</h4>
                <ul className="space-y-3">
                  {idealFor.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-3xl border">
                <h4 className="font-semibold mb-4">This service ensures:</h4>
                <ul className="space-y-3">
                  {ensures.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="text-green-600 w-5 h-5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT ONLY SECTIONS */}
      <PricingStructure />
      <Keyfuture />
      <Comparison />
      <HowItWorks />
      <TransformingCities />

      {/* WHY EXPRESS */}
      <section className="px-4 py-24 bg-[#F1F2F6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <Image src={location} alt="Locations" />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Express Delivery?
            </h2>

            {faqData.map((item) => (
              <div key={item.id} className="border-b py-4">
                <button
                  onClick={() =>
                    setOpen(open === item.id ? null : item.id)
                  }
                  className="flex w-full justify-between font-semibold"
                >
                  {item.title}
                  {open === item.id ? <Minus /> : <Plus />}
                </button>

                <AnimatePresence>
                  {open === item.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-second"
                    >
                      {item.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection />
      <ServiceFAQSection />
      <CallToAction />
    </div>
  );
}
