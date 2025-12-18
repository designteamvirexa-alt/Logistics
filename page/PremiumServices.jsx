"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import herobg from "@/asset/service/standard-services.png";
import one from "@/asset/service/2.png";
import location from "@/asset/location.png";

// Components
import ContactSection from "@/components/ContactSection";
import ServiceFAQSection from "@/components/ServiceAccordionPremium";
import CallToAction from "@/components/CallToActionPremium";
import Comparison from "@/components/ComparisonPremium";
import PricingStructure from "@/components/PricingStructurePremium";
import Keyfuture from "@/components/KeyfutureexpressPremium";
import HowItWorks from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import TransformingCities from "@/components/Locations";

export default function PremiumServices() {
  /* ----------------------------------------
     ✅ CLIENT-ONLY RENDER FIX
  ---------------------------------------- */
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  /* ---------------------------------------- */

  const idealFor = [
    "High-value electronics",
    "Confidential documents",
    "Corporate & enterprise shipments",
    "Jewelry & luxury items",
    "Medical & lab equipment",
    "Fragile & sensitive goods",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const [open, setOpen] = useState<number | null>(1);

  const faqData = [
    {
      id: 1,
      title: "1. Maximum Security",
      content: "Tamper-proof seals & minimal handling points.",
    },
    {
      id: 2,
      title: "2. Best for High-Value Goods",
      content: "Perfect for expensive & sensitive shipments.",
    },
    {
      id: 3,
      title: "3. Guaranteed Priority",
      content: "No delays. No compromise.",
    },
    {
      id: 4,
      title: "4. Complete Transparency",
      content: "Live updates, call support & delivery proof.",
    },
    {
      id: 5,
      title: "5. Peace of Mind",
      content: "Handled by trained professionals only.",
    },
  ];

  return (
    <div className="-mt-20">
      {/* HERO */}
      <section className="relative h-[550px] md:h-[560px] rounded-3xl p-2">
        <Image
          src={herobg}
          alt="Premium Delivery"
          fill
          priority
          className="object-cover rounded-3xl"
        />

        <div className="container relative z-10 mx-auto px-4 py-28">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur border border-white/20 px-6 py-2 rounded-full mb-6"
          >
            <p className="text-white">✨ Because some deliveries deserve more</p>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-black mb-6"
          >
            Premium Delivery
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 max-w-2xl mb-6"
          >
            White-glove logistics for your most valuable shipments.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4"
          >
            <button className="bg-white px-8 py-3 rounded-full font-semibold">
              Book Now
            </button>
            <button className="bg-white/10 border border-white/20 px-8 py-3 rounded-full text-white">
              View Pricing
            </button>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          <Image
            src={one}
            alt="Overview"
            className="rounded-3xl object-cover w-full h-[480px]"
          />

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">
              Frisbi Premium Overview
            </h2>

            <p className="text-second mb-6">
              Premium Delivery is designed for shipments that require
              absolute care, security, and priority handling.
            </p>

            <div className="bg-blue-50 rounded-3xl p-6 border max-w-lg">
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
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[#F1F2F6]">
        <PricingStructure />
        <Keyfuture />
      </section>

      <Comparison />
      <HowItWorks />
      <TransformingCities />

      {/* WHY PREMIUM */}
      <section
        className="px-4 py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/asset/background.png')" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <Image src={location} alt="Locations" />

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Premium Delivery?
            </h2>

            {faqData.map((item) => (
              <div key={item.id} className="border-b py-4">
                <button
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  className="flex justify-between w-full font-semibold"
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
