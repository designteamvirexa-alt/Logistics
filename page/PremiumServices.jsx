"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  MessageSquare,
  FileText,
  Calendar,
  Radar,
  CheckCircle,
} from "lucide-react";

import Maximum from "@/asset/icon/security-lock.svg";
import goods from "@/asset/icon/goods.svg";
import Transparency from "@/asset/icon/transparency.svg";
import Priority from "@/asset/icon/safe.svg";
import Peace from "@/asset/icon/delivery.svg";
import MarqueeLogos from "@/components/MarqueeLogos";

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
     ✅ SSR FIX (IMPORTANT)
  ---------------------------------------- */
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Prevent server-side crash (HTMLDivElement error)
  if (!mounted) return null;

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

  const steps = [
    {
      number: "1",
      icon: Maximum,
      title: "Maximum Security",
      description: "Tamper-proof seals & minimal handling points.",
    },
    {
      number: "2",
      icon: goods,
      title: "Best for High-Value Goods",
      description: "Perfect for expensive & sensitive shipments.",
    },
    {
      number: "3",
      icon: Priority,
      title: "Guaranteed Priority",
      description: "No delays. No compromise.",
    },
    {
      number: "4",
      icon: Transparency,
      title: "Complete Transparency",
      description: "Live updates, call support & delivery proof.",
    },
    {
      number: "5",
      icon: Peace,
      title: "Peace of Mind",
      description: "Handled by trained professionals only.",
    },
  ];

  return (
    <div className="-mt-24 -mt-16">
      {/* ================= HERO ================= */}
      <section className="relative md:h-[560px] rounded-3xl p-2">
        <Image
          src={herobg}
          alt="Premium Delivery"
          fill
          priority
          className="object-cover rounded-3xl p-3"
        />

        <div className="container relative z-10 mx-auto px-4 py-28">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur border border-white/20 px-6 py-2 rounded-full mb-6"
          >
            <p className="text-white">
              ✨ Because some deliveries deserve more
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl md:text-5xl font-bold mb-6"
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
            <Link
              href="#contact"
              className="btn-white hover:scale-105 transition-all"
            >
              Book Now
            </Link>
            <Link
              href="#pricing"
              className="btn-white-outline hover:scale-105 transition-all"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      <MarqueeLogos />

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          <Image
            src={one}
            alt="Overview"
            className="rounded-3xl object-cover w-full h-[400px]"
          />

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Frisbi Premium Overview</h2>

            <p className="text-second mb-6">
              Premium Delivery is designed for shipments that require absolute
              care, security, and priority handling.
            </p>

            <div className="bg-blue-50 rounded-3xl p-6 border max-w-lg">
              <h4 className="font-semibold mb-4">Ideal for:</h4>
              <ul className="space-y-3">
                {idealFor.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="bg-[#F1F2F6]">
        <PricingStructure />
        <Keyfuture />
      </section>

      <Comparison />
      <HowItWorks />
      <TransformingCities />

      {/* ================= WHY PREMIUM ================= */}
      <section className=" ">
        <div className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-4">Why Choose Premium Delivery?</h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Image src={step.icon} alt="" width={28} height={28} />
                      </div>
                      {/* <div className="absolute -top-3 -right-1 w-7 h-7 bg-white text-black rounded-full shadow-xl flex items-center justify-center text-xs font-semibold">
                        {step.number}
                      </div> */}
                    </div>
                    <h4 className="mb-2">{step.title}</h4>
                    <p className="text-second">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <Testimonials />
      </section>

      <section
        className=" bg-[#F1F2F6] mx-auto overflow-x-hidden "
        id="contact"
      >
        <ContactSection />
      </section>

      <ServiceFAQSection />
      <CallToAction />
    </div>
  );
}
