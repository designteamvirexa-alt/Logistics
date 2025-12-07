"use client";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import MarqueeLogos from '@/components/MarqueeLogos';
import Image from 'next/image';
import { ChevronRight, ChevronDown } from "lucide-react";
import TestimonialSliderRight from '@/components/TestimonialSliderRight';
import faqbg from "@/asset/shippment/faqs.webp";


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
  { q: "Why is my shipment delayed?", a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt." },
  { q: "What should I do if my shipment status hasn’t updated?", a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt." },
  { q: "Can I change my delivery address after dispatch?", a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt." },
  { q: "How do I raise a complaint or report an issue?", a: "Your tracking number was shared via SMS and email when your order was booked. You can also get it from the sender or your order confirmation receipt." },
];
function Faq() {


  const [activeMenu, setActiveMenu] = useState("General FAQs");
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div>

      <div className="-mt-20">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src={faqbg} // your hero image path
            alt="About Background"
            fill
            priority
            className="object-cover p-2 rounded-3xl"
          />

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="">
              Have any queries? We’re all ears!
            </h2>

            <p className=" mt-3 text-sm md:text-base">
              Home <span className="text-blue-200">›</span> <FAQS></FAQS>
            </p>
          </div>
        </motion.section>
      </div>

      <section className='max-w-7xl mx-auto'>
        <MarqueeLogos />
      </section>


      <section className="w-full px-5 md:px-10 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT MENU (Fixed on Desktop) */}
          <div className="md:col-span-1">
            <div className="
            bg-white rounded-xl border shadow-sm p-4 
            md:sticky md:top-24 md:h-fit
          ">
              {menuItems.map((item) => (
                <div
                  key={item}
                  onClick={() => setActiveMenu(item)}
                  className={`flex items-center justify-between p-3 cursor-pointer rounded-lg mb-2 
                ${activeMenu === item ? "bg-blue-50 border border-blue-500" : "hover:bg-gray-100"}
              `}
                >
                  <span
                    className={`text-sm font-medium ${activeMenu === item ? "text-blue-600" : "text-gray-800"}`}
                  >
                    {item}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 ${activeMenu === item ? "text-blue-600" : "text-gray-500"}`}
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
            <h2 className="text-2xl font-semibold mb-5">{activeMenu}</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border shadow-sm"
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="flex w-full justify-between text-left"
                  >
                    <span className="font-medium text-gray-900 text-sm md:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Answer */}
                  {openIndex === index && faq.a && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-600 mt-3 text-sm"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border shadow-sm"
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="flex w-full justify-between text-left"
                  >
                    <span className="font-medium text-gray-900 text-sm md:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Answer */}
                  {openIndex === index && faq.a && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-600 mt-3 text-sm"
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

      <section className='mb-9 mt-7'>
        <div className='max-w-7xl mx-auto'>
          <TestimonialSliderRight />
        </div>
      </section>

    </div>
  )
}

export default Faq
