"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import thankyou from "@/asset/thankyou.svg";
import Link from "next/link";

import TestimonialSliderRight from "@/components/TestimonialSliderRight";

export default function ThankYouSection() {
  return (
    <section className="w-full py-24 px-4">
      {/* TOP SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto pb-36"
      >
        <Image
          src={thankyou} // replace icon
          alt="Success icon"
          width={160}
          height={160}
          className="mx-auto"
        />

        <h2 className=" mt-4">
          <span className="text-blue-600">Thank you</span> for booking with us!
        </h2>

        <p className="text-second mt-4 ">
          We have successfully received your booking.
        </p>
        <div className="mt-7">
          <Link
            href="/"
            className="bg-primary text-lg text-white text-[16px] font-semibold py-3 px-10 rounded-full transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>

      <section className="mb-9 mt-7">
        <div className="max-w-7xl mx-auto">
          <TestimonialSliderRight />
        </div>
      </section>
    </section>
  );
}
