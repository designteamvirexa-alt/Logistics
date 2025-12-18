"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Check, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// Assets
import herobg from "@/asset/service/standard-services.png";
import one from "@/asset/service/2.png";
import location from "@/asset/location.png";

// 🔥 SSR-SAFE DYNAMIC IMPORTS
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});
const ServiceFAQSection = dynamic(
  () => import("@/components/ServiceAccordion"),
  { ssr: false }
);
const CallToAction = dynamic(() => import("@/components/CallToAction"), {
  ssr: false,
});

const PricingStructure = dynamic(
  () => import("@/components/PricingStructure"),
  { ssr: false }
);
const Keyfuture = dynamic(() => import("@/components/Keyfuture"), {
  ssr: false,
});
const PackageGuidelines = dynamic(
  () => import("@/components/PackageGuidelines"),
  { ssr: false }
);
const HowItWorks = dynamic(() => import("@/components/OurProcess"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
const TransformingCities = dynamic(() => import("@/components/Locations"), {
  ssr: false,
});

export default function Services() {
  const [open, setOpen] = useState(1);

  const idealFor = [
    "Small businesses",
    "E-commerce sellers",
    "Students & families",
    "Regular parcel senders",
    "Document & lightweight package shipping",
  ];

  const ensures = [
    "Secure handling",
    "Professional pickup",
    "Cost-efficient delivery",
    "Full tracking visibility",
  ];

  const faqData = [
    {
      id: 1,
      title: "1. Low-Cost Shipping",
      content: "Designed for cost-conscious customers and SMEs.",
    },
    {
      id: 2,
      title: "2. Safe & Secure Transport",
      content: "Barcode tracking, sealed bags, professional handlers.",
    },
    {
      id: 3,
      title: "3. Wide Delivery Network",
      content: "Fast-growing logistics chain covering India.",
    },
    {
      id: 4,
      title: "4. Shipment Updates",
      content: "Every movement is recorded & notified.",
    },
    {
      id: 5,
      title: "5. No Hidden Charges",
      content: "Upfront pricing before booking.",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="-mt-24 -mt-16">
      {/* HERO */}
      <section className="relative md:h-[550px] h-[700px] p-3">
        <Image
          src={herobg}
          alt="Hero"
          fill
          priority
          className="object-cover rounded-3xl p-3"
        />

        <div className="container relative z-10 mx-auto px-4 py-28">
          <motion.div
            {...fadeUp}
            className="bg-white/10 px-6 py-2 rounded-full mb-6 inline-block"
          >
            <p className="text-white">✨ Safe. Affordable. Reliable.</p>
          </motion.div>

          <motion.h1
            {...fadeUp}
            className="text-white text-4xl md:text-6xl font-black mb-6"
          >
            Standard Delivery
          </motion.h1>

          <motion.p {...fadeUp} className="text-white max-w-2xl mb-8">
            India’s most affordable and reliable parcel delivery solution.
          </motion.p>
          <motion.p {...fadeUp} className="text-white max-w-2xl mb-8">
            Perfect for: Documents, parcels, business shipments, e-commerce
            orders, and personal packages.
          </motion.p>

          <motion.div {...fadeUp} className="flex gap-4">
            <Link
              href="#contact"
              className="bg-white px-8 py-3 font-semibold rounded-full"
            >
              Book Now
            </Link>
            <Link
              href="/rate-calculator"
              className="bg-white/10 border text-white px-8 py-3 font-semibold rounded-full"
            >
              Rate Calculator
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-10 order-2">
          <Image
            src={one}
            alt="Overview"
            className="rounded-3xl h-[400px] object-cover "
          />

          <div className="md:col-span-2 order-1">
            <h2 className="text-4xl font-bold mb-4">Frisbi Overview</h2>
            <p className="text-second mb-8">
              Budget-friendly shipping without compromising safety.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 ">
              <div className="bg-blue-50 p-6 rounded-3xl border">
                <h4 className="font-semibold mb-4">Ideal for:</h4>
                <ul className="space-y-3 font-semibold">
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
                <ul className="space-y-3 font-semibold">
                  {ensures.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingStructure />
      <Keyfuture />
      <PackageGuidelines />
      <HowItWorks />
      <TransformingCities />

      {/* FAQ */}
      <section className="bg-[#F1F2F6] py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <Image src={location} alt="Location" />

          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>

            {faqData.map((item) => (
              <div key={item.id} className="border-b py-4">
                <button
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  className="flex w-full justify-between font-semibold"
                >
                  {item.title}
                  {open === item.id ? <Minus /> : <Plus />}
                </button>

                <AnimatePresence>
                  {open === item.id && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
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

      <section className="py-24">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

      <section className="pt-24">
        <ServiceFAQSection />
      </section>

      <CallToAction />
    </div>
  );
}
