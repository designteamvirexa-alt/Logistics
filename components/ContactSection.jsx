"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              We're here to answer <br /> your questions.
            </h2>

            <p className="text-white max-w-md">
              Have a question, suggestion, or just want to say hi? We’re here
              and happy to hear from you!
            </p>

            {/* CONTACT ITEMS */}
            <div className="space-y-10 mt-8">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className=" ">Office Location</h4>
                  <span className="text-white text-[14px]">
                    100 S Main St, New York, NY
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Send a Message</h4>
                  <span className="text-white text-[14px]">
                    contact@frisbi.in
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Call Us Directly</h4>
                  <span className="text-white text-[14px]">
                    +91 987-879-8298
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Get In Touch
            </h3>
            <p className="text-white mb-6">
              Have a question, suggestion, or just want to say hi? Fill out the
              form below and we’ll get back to you soon.
            </p>

            <form className="space-y-5">
              {/* FIRST ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl placeholder:text-sm outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 placeholder:text-sm rounded-xl outline-none"
                />
              </div>

              {/* SECOND ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* SERVICE DROPDOWN */}
                <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 placeholder:text-sm rounded-xl outline-none">
                  <option value="" disabled selected className="bg-gray-900 text-sm">
                    Select Service
                  </option>
                  <option value="web" className="bg-gray-900 text-sm">
                    Web Development
                  </option>
                  <option value="app" className="bg-gray-900 text-sm">
                    App Development
                  </option>
                  <option value="seo" className="bg-gray-900 text-sm">
                    SEO Optimization
                  </option>
                  <option value="design" className="bg-gray-900 text-sm">
                    UI/UX Design
                  </option>
                  <option value="marketing" className="bg-gray-900 text-sm">
                    Digital Marketing
                  </option>
                </select>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 placeholder:text-sm rounded-xl outline-none"
                />
              </div>

              {/* MESSAGE BOX */}
              <textarea
                placeholder="Write a message"
                rows="5"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 placeholder:text-sm rounded-xl outline-none"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-primary text-[16px]  text-white font-semibold py-3 px-12 rounded-full transition duration-300"
              >
                Get a Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
