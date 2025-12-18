"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import ShipmentForm from "@/components/ShipmentForm";
import FAQ from "@/components/Accordion";
import bookshipment from "@/asset/shippment/bookshipment.webp";
import Link from "next/link";

function BookShipment() {
  return (
    <div>
      <div className="-mt-24 -mt-16 ">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src={bookshipment} // your hero image path
            alt="About Background"
            fill
            priority
            className="object-cover p-3  rounded-3xl"
          />

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-3xl md:text-4xl ">Book Shipment</h2>

            <p className=" mt-3 text-white">
              Home <span className="text-white">›</span> Book Shipment
            </p>
          </div>
        </motion.section>
      </div>

      <div className="lg:py-16 py-16 max-w-7xl mx-auto">
        <MarqueeLogos />
      </div>

      <div>
        <ShipmentForm />
      </div>

      <section className="py-16">
        <FAQ />
      </section>
    </div>
  );
}

export default BookShipment;
