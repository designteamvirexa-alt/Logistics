"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const services = [
    "Standard Delivery",
    "Express Delivery",
    "Premium Delivery",
    "Corporate",
    "Individual",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams(form).toString();

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.result === "success") {
        toast.success("Form submitted successfully!");
        setForm({
          name: "",
          email: "",
          service: "",
          phone: "",
          message: "",
        });
        router.push("/thank-you");
      } else {
        toast.error("Error submitting form");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <section className="relative text-black">
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black space-y-6 flex flex-col items-center md:items-start"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
              We're here to answer <br /> your questions.
            </h2>

            <p className="text-second max-w-md text-center md:text-left">
              Have a question or need help? Feel free to reach out.
            </p>

            <div className="space-y-8 mt-8 w-full">
              <Info
                icon={MapPin}
                title="Office Location"
                value="100 S Main St, New York, NY"
              />
              <Info
                icon={Mail}
                title="Send a Message"
                value="info@frisbi.in"
              />
              <Info
                icon={Phone}
                title="Call Us Directly"
                value="+91 987-879-8298"
              />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-black mb-6">
              Get In Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium text-black outline-none placeholder:text-second"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium text-black outline-none placeholder:text-second"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium outline-none text-second"
                >
                  <option value="" disabled hidden>
                    Select Service
                  </option>
                  {services.map((s, i) => (
                    <option key={i} value={s} className="bg-black text-white">
                      {s}
                    </option>
                  ))}
                </select>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium text-black outline-none placeholder:text-second"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium text-black outline-none placeholder:text-second"
              />

              <button
                type="submit"
                className="w-full btn-primary hover:scale-105 transition-all"
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

/* INFO COMPONENT */
function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-center md:text-left">
      <div className="p-3 bg-white rounded-xl">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <span className="text-second text-sm font-medium">{value}</span>
      </div>
    </div>
  );
}
