"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import faqbg from "@/asset/faqs.png";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

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
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden"
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
            <h1 className="text-black">Frequently Asked Questions</h1>
          </div>
        </motion.section>
      </div>

      <section className="container mx-auto px-4 py-24 ">
        <MarqueeLogos />
      </section>

      <section className="w-full px-5 md:px-10 pt-0 py-24">
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

      <Testimonials />

      <CallToAction />
    </div>
  );
}

export default Faq;
