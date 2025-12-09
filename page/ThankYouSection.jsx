"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import thankyou from "@/asset/thankyou.svg";
import TestimonialSliderRight from "@/components/TestimonialSliderRight";

export default function ThankYouSection() {
  return (
    <section className="w-full py-16 px-4">
      {/* TOP SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <Image
          src={thankyou} // replace icon
          alt="Success icon"
          width={60}
          height={60}
          className="mx-auto"
        />

        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          <span className="text-blue-600">Thank you</span> for booking with us!
        </h2>

        <p className="text-gray-600 mt-2 text-sm md:text-base">
          We have successfully received your booking.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Back to Home
        </button>
      </motion.div>


            <section className='mb-9 mt-7'>
              <div className='max-w-7xl mx-auto'>
                <TestimonialSliderRight />
              </div>
            </section>

     
    </section>
  );
}
