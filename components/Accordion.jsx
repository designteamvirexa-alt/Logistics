"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "How safe is my luggage during delivery?",
    answer:
      "Every pickup is scanned, sealed, and tracked in real time. Your luggage is accounted for from pickup to delivery, with digital confirmation at each step and careful handling throughout.",
  },
  {
    question: "Can I choose when my luggage is picked up and delivered?",
    answer:
      "Yes. Express and Premium Delivery services allow you to select a pickup date, time slot, and location that works for you. Delivery timelines are shared clearly at the time of booking.",
  },
  {
    question: "What happens if my plans change after booking?",
    answer:
      "Our support team can help you reschedule pickups or update delivery details before transit begins. No chatbots. You can speak directly to a dedicated point of contact who can assist with your booking.",
  },
  {
    question: "How much luggage can I send at once?",
    answer:
      "You can send one or multiple bags in a single shipment. Pricing is shared upfront so you know the cost before booking.",
  },
  {
    question: "Which cities and locations does Frisbi cover?",
    answer:
      "Frisbi delivers luggage across 25,000+ pincodes in India, including major cities and smaller towns. You can check coverage while getting your quote.",
  },
  {
    question: "Is packing included or do I need to pack myself?",
    answer:
      "We offer professional packing free with Premium Delivery. For other services, you can add packing as a paid add-on or pack the luggage yourself.",
  },
  {
    question: "Can someone else hand over or receive the luggage on my behalf?",
    answer:
      "Yes. As long as someone is available at pickup and delivery, the luggage can be handed over or received by them.",
  },
  {
    question: "How do you calculate the delivery price?",
    answer:
      "The price depends on your pickup city, destination city, number of bags, and service speed. You get a clear quote before booking so you know exactly what you pay.",
  },

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:pt-16  md:pb-24 px-4">
      <h2 className="text-center mb-10 md:mb-12 lg:mb-16">Frequently asked questions</h2>

      <div className="space-y-6">
        {visibleFaqs.map((faq, i) => (
          <div key={i}>
            {openIndex === i ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-2xl shadow-2xl"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <h4 className="font-semibold text-lg">{faq.question}</h4>
                  <ChevronUp className="w-6 h-6 text-black" />
                </div>

                <AnimatePresence>
                  <motion.p
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-4 text-second leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            ) : (
              <div
                className="flex justify-between items-center py-5 cursor-pointer border-b"
                onClick={() => toggle(i)}
              >
                <h4 className="">
                  {faq.question}
                </h4>
                <ChevronDown className="w-6 h-6 text-black" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="btn-primary hover:scale-105 transition-all"
          >
            View More
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="btn-primary hover:scale-105 transition-all"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
}
