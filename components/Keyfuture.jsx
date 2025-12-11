"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";


export default function StickyStepsOverlap() {
  const steps = [
    {
      step: "STEP 1",
      title: "From pickup to delivery",
      desc: "Moving your freight with clear care and focus.",
      icon: "📦",
    },
    {
      step: "STEP 2",
      title: "Tracking & monitoring",
      desc: "We monitor your goods at every stage of the journey.",
      icon: "📡",
    },
    {
      step: "STEP 3",
      title: "Turning freight needs into action",
      desc: "We provide custom shipping and storage options for you.",
      icon: "🚢",
    },
  ];

  const scrollRef = (useRef < HTMLDivElement) | (null > null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollY(scrollRef.current.scrollTop);
    }
  };

  return (
    <section className="py-20 bg-[#F4F2F7]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT SECTION */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 font-semibold mb-4">
            DRIVING SUPPLY CHAIN SUCCESS
          </p>

          <h2 className="font-bold leading-tight mb-6">
            Key Features
          </h2>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Supply delivers tailored logistics and freight solutions, empowering
            businesses with fast, safe, and efficient transport across North
            America.
          </p>

          <button className="px-6 py-3 bg-[#613BFF] text-white rounded-full">
            Our Services
          </button>
        </div>

        {/* RIGHT SECTION – STICKY SCROLL */}
        <motion.div
          ref={scrollRef}
          onScroll={handleScroll}
          className="lg:sticky lg:top-24 overflow-y-auto pr-3"
        >
          <div className="flex flex-col relative">
            {steps.map((item, i) => {
              // dynamically calculate overlap based on scroll
              const overlap = Math.min(scrollY / 30, i * 40); // adjust for effect
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 shadow-sm p-10 rounded-3xl transition-all duration-300"
                  style={{
                    marginTop: i === 0 ? 0 : -overlap,
                    zIndex: steps.length - i,
                  }}
                >
                  <p className="text-xs tracking-widest text-gray-400 font-semibold mb-6">
                    {item.step}
                  </p>

                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-500 mb-6">{item.desc}</p>

                  <div className="text-5xl text-purple-500">{item.icon}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
