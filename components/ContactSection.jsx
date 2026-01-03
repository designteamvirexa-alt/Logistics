"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  const [form, setForm] = useState({
    userType: "Corporate", // ✅ default
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
          userType: "Corporate",
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
      <div className="relative z-10 max-w-7xl mx-auto py-12 md:pt-16  md:pb-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="">Heavy baggage? Not your problem anymore.</h2>

            <p className="text-second max-w-md">
              Send it with Frisbi and enjoy traveling hands-free while we take
              care of your luggage.
            </p>

            <div className="space-y-8 mt-8">
              <Info
                icon={MapPin}
                title="Where to Find Us
"
                value="India"
              />
              <Info
                icon={Mail}
                title="Drop us a line
"
                value="info@frisbi.in"
              />
              <Info
                icon={Phone}
                title="Call or WhatsApp"
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
            {/* Heading + Radio */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h4 className="text-xl font-semibold">Plan Your Delivery</h4>

              <div className="flex gap-4">
                {["Corporate", "Individual"].map((type) => (
                  <label
                    key={type}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl border text-sm font-medium transition
                      ${
                        form.userType === type
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-300 text-gray-600"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="userType"
                      value={type}
                      checked={form.userType === type}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="w-3 h-3 rounded-full border flex items-center justify-center">
                      {form.userType === type && (
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      )}
                    </span>
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium outline-none"
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
                    <option key={i} value={s}>
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
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium outline-none"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium outline-none"
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
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white rounded-xl">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h5 className="font-medium">{title}</h5>
        <span className="text-second text-sm font-medium">{value}</span>
      </div>
    </div>
  );
}
