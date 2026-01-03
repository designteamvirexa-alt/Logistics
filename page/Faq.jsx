"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import faqbg from "@/asset/faqs.png";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE

import faqmobile from "@/asset/shippment/faq-banner.svg";

const menuItems = [
  "General FAQs",
  "Shippings",
  "Delivery",
  "Tracking & Support",
  "Billing & Documentation",
];

const faqs = [
  {
    q: "Where can I find my tracking (AWB) number?",
    a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt.",
  },
  {
    q: "Why is my shipment delayed?",
    a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt.",
  },
  {
    q: "What should I do if my shipment status hasn’t updated?",
    a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt.",
  },
  {
    q: "Can I change my delivery address after dispatch?",
    a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt.",
  },
  {
    q: "How do I raise a complaint or report an issue?",
    a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt.",
  },
];
function Faq() {
  const [activeMenu, setActiveMenu] = useState("General FAQs");
  const [openIndex, setOpenIndex] = useState(0);
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
            src={faqbg} // your hero image path
            alt="About Background"
            fill
            priority
            className="md:object-contain object-cover bg-center"
          />

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black mb-4">Frequently Asked Questions</h1>
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
        </motion.section>
        {/* mobile section */}
        <section className="relative bg-white overflow-hidden md:hidden">
          <div className="container mx-auto px-4 py-20 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT — CONTENT */}
              <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-black mb-4">Frequently Asked Questions</h1>
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
                  src={faqmobile}
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

      <section className="w-full px-5 md:px-10 py-12 md:py-24 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT MENU (Fixed on Desktop) */}
          <div className="md:col-span-1">
            <div
              className="
            bg-white rounded-3xl  drop-shadow-[0_4px_100px_rgba(0,0,0,0.08)] p-4 
            md:sticky md:top-24 md:h-fit
          "
            >
              {menuItems.map((item) => (
                <div
                  key={item}
                  onClick={() => setActiveMenu(item)}
                  className={`flex items-center justify-between p-3 cursor-pointer rounded-lg mb-2 
                ${
                  activeMenu === item
                    ? "bg-blue-50 border border-blue-500"
                    : "hover:bg-gray-100"
                }
              `}
                >
                  <span
                    className={`text-sm font-semibold ${
                      activeMenu === item ? "text-primary" : "text-black"
                    }`}
                  >
                    {item}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 ${
                      activeMenu === item ? "text-primary" : "text-gray-500"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FAQ SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="font-semibold mb-5">{activeMenu}</h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl  border border-[#F5F5F5]"
                >
                  {/* Question */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="flex w-full justify-between text-left"
                  >
                    <span className="font-semibold  text-[18px] text-black">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  {openIndex === index && faq.a && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-second mt-3 text-sm"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-4 mt-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl  border border-[#F5F5F5]"
                >
                  {/* Question */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="flex w-full justify-between text-left"
                  >
                    <span className="font-semibold  text-black">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  {openIndex === index && faq.a && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-second mt-3 text-sm"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="  mx-auto relative px-4 py-12 md:py-0 sm:px-6 lg:px-8">
        <Testimonials />
      </section>


      <MarqueeLogos />


       <section className="w-full px-4 py-12   md:py-20 md:pt-0 ">
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

export default Faq;
