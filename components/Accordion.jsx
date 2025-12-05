"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "Porter is a leading logistics service provider offering a wide range of transportation solutions. With Porter, you can deliver goods reliably. With its vast operations in 22 Indian cities, including cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad, Pune, Surat, Jaipur and Kolkata, Porter makes deliveries easy.",
  },
  {
    question: "How fast is the delivery?",
    answer:
      "We ensure quick turnarounds with reliable logistics and minimal delays.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes, we provide 24/7 support across all locations to ensure smooth operations.",
  },
  {
    question: "Do you offer bulk shipment services?",
    answer:
      "Yes, bulk and corporate shipment services are available with custom pricing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Frequently asked questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, i) => (
          <div key={i}>
            {/* Active Card */}
            {openIndex === i ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-xl"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <Minus className="w-6 h-6 text-gray-600" />
                </div>

                {/* Slide Down Animation */}
                <AnimatePresence>
                  <motion.p
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            ) : (
              // Inactive Row
              <div
                className="flex justify-between items-center py-5 cursor-pointer border-b"
                onClick={() => toggle(i)}
              >
                <h3 className="font-medium text-lg text-gray-900">
                  {faq.question}
                </h3>
                <Plus className="w-6 h-6 text-gray-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full shadow-xl hover:bg-blue-700 transition">
          View More
        </button>
      </div>
    </div>
  );
}
