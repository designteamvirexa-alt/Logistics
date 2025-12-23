"use client";
import React, { useState } from "react";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE
import About from "@/asset/home/about-frisbi.png";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";
import CustomSlider from "@/components/Slider";
import MarqueeLogos from "@/components/MarqueeLogos";
import ServicesSection from "@/components/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";
import Packing from "@/asset/icon/express.svg";
// Swiper styles are mandatory to import!
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import FAQSection from "@/components/Accordion";
import ContactSection from "@/components/ContactSection";
import HowToShip from "@/components/HowToShip";
import Testimonials from "@/components/Testimonials";

function Home() {
  const tabs = ["Our Mission", "Our Vision", "Why Choose Us"];

  const faqData = [
    {
      id: 1,
      title: "1. Get an Instant Quote",
      content:
        "Enter your pickup city, destination city, and number of bags to get a clear, upfront price—no hidden charges",
    },
    {
      id: 2,
      title: "2. Schedule Your Pickup",
      content:
        "Choose a convenient pickup date, time, and location (home, hotel, office, hostel, PG or Airbnb). We’ll confirm everything and assign a coordinator.",
    },
    {
      id: 3,
      title: "3. Handover Your Luggage",
      content:
        "Our executive arrives at your location, scans and secures your bags, applies seals, and shares digital proof of pickup. Optional premium packaging is available.",
    },
    {
      id: 4,
      title: "4. Track & Receive Delivery",
      content:
        "Track your shipment through our website with live status updates. Your luggage is delivered safely at your destination with digital proof of delivery.",
    },
    {
      id: 5,
      title: "5. Support & Rewards",
      content:
        "Benefit from 24/7 dedicated customer support and real-time shipment tracking to ensure a seamless service experience.",
    },
  ];

  const [open, setOpen] = useState(1);

  return (
    <div>
      <HeroSlider />

      <MarqueeLogos />

      <section className="container mx-auto relative px-4 py-24 sm:px-6 lg:px-8">
         
        <div className="">
         
          <div className="relative z-10">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          About Us
        </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-relaxed text-center md:text-left max-w-xl">
                 Frisbi Luggage Delivery Service
                </h2>

                <p className="text-gray-600 mb-8 text-center md:text-left max-w-xl leading-relaxed">
                  At Frisbi, we are on a mission to make travel lighter,
                  stress-free, and smarter. As India’s most reliable luggage
                  delivery service, we pick up your bags from your doorstep and
                  deliver them safely to your destination—whether it’s the
                  airport, hotel, home, or office—so you can travel hands-free
                  and hassle-free.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 shrink-0">
                      <Image
                        src={Packing}
                        alt="Professional Packing"
                        width={28}
                        height={28}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-1">
                        Professional Packing
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Expert packing to protect your luggage throughout the
                        journey.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 shrink-0">
                      <Image
                        src={Packing}
                        alt="Pre-Move Planning"
                        width={28}
                        height={28}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-1">
                        Pre-Move Planning
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Easy scheduling and planning for pickups & on-time
                        delivery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center md:justify-start">
                  <Link
                    href="/about"
                    className="btn-primary transition-transform hover:scale-105"
                  >
                    Explore more
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xl h-[280px] md:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={About}
                    alt="Frisbi luggage delivery illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F2F6]  overflow-x-hidden">
        <div className="container mx-auto">
          <ServicesSection />
        </div>
      </section>

      <HowToShip />

      {/* <section
        className="w-full bg-cover bg-center bg-no-repeat overflow-x-hidden py-24"
        style={{ backgroundImage: "url(/asset/background.png)" }}
      >
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
            
            <div className="flex justify-center md:justify-start">
              <Image
                src={location}
                alt="location"
                className="w-full h-auto"
                priority
              />
            </div>

            
            <div>
              <h2 className="mb-6">
                How to Ship with <span className="text-primary">Frisbi</span>
              </h2>

              <p className="mb-6">
                Sending packages with Frisbi is effortless. Simply pack your
                items securely, and we’ll take care of everything else
              </p>

              
              <div>
                {faqData.map((step) => (
                  <div key={step.id} className="border-b py-4">
                    <button
                      onClick={() => setOpen(open === step.id ? null : step.id)}
                      className="flex w-full justify-between items-center text-left"
                    >
                      <h4 className="font-bold text-[20px]">{step.title}</h4>
                      {open === step.id ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </button>

                    <AnimatePresence>
                      {open === step.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="text-second mt-3 pr-4">
                            {step.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative bg-primary overflow-x-hidden">
        <CustomSlider />
      </section>

      <section className=" px-4 overflow-x-hidden">
        <div className=" mx-auto  pt-16">
          <Testimonials />
        </div>
      </section>

      <section className=" overflow-x-hidden ">
        <div>
          <FAQSection />
        </div>
      </section>
      <section className=" bg-[#F1F2F6] mx-auto overflow-x-hidden ">
        <ContactSection />
      </section>

      <section className="w-full px-4 md:px-10 my-24 ">
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
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              From Your Door to Their Door.
            </h2>

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

export default Home;
