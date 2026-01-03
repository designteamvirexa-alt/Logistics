"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

/* ---------------- FLOATING INPUT ---------------- */

function FloatingInput({ label, type = "text", name, value, onChange }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        className="peer w-full bg-[#f5f5f5] text-black px-4 py-3 rounded-xl outline-none
        focus:ring-1 focus:ring-primary transition placeholder-transparent"
      />
      <label
        className="absolute left-4 text-gray-600 text-sm transition-all
        peer-placeholder-shown:top-3
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-white peer-focus:px-1
        peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-white peer-valid:px-1"
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------- FLOATING SELECT ---------------- */

function FloatingSelect({ label, name, value, onChange, options = [] }) {
  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className="peer w-full bg-[#f5f5f5] text-black px-4 py-3 rounded-xl outline-none
        focus:ring-1 focus:ring-primary transition appearance-none"
      >
        <option value="" disabled hidden></option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <label
        className="absolute left-4 top-4 text-gray-500 text-sm transition-all
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-white peer-focus:px-1
        peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-white peer-valid:px-1"
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------- FLOATING TEXTAREA ---------------- */

function FloatingTextarea({ label, name, value, onChange }) {
  return (
    <div className="relative w-full">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={5}
        required
        className="peer w-full bg-[#f5f5f5] text-black px-4 py-4 rounded-xl outline-none
        focus:ring-1 focus:ring-primary transition placeholder-transparent"
      />
      <label
        className="absolute left-4 top-4 text-gray-500 text-sm transition-all
        peer-placeholder-shown:top-4
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-white peer-focus:px-1
        peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-white peer-valid:px-1"
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------- RADIO GROUP ---------------- */

function RadioGroup({ value, onChange }) {
  return (
    <div className="flex gap-4">
      {["Corporate", "Individual"].map((type) => (
        <label
          key={type}
          className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl border transition
          ${
            value === type
              ? "border-primary bg-primary/10 text-primary font-medium"
              : "border-gray-300 text-second font-medium"
          }`}
        >
          <input
            type="radio"
            name="userType"
            value={type}
            checked={value === type}
            onChange={onChange}
            className="hidden"
          />
          <span className="w-3 h-3 rounded-full border flex items-center justify-center">
            {value === type && (
              <span className="w-2 h-2 bg-primary font-semibold rounded-full"></span>
            )}
          </span>
          {type}
        </label>
      ))}
    </div>
  );
}

/* ---------------- INFO ITEM ---------------- */

function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gray-100 rounded-xl">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h5 className="font-medium">{title}</h5>
        <p className="text-gray-600 mt-1">{value}</p>
      </div>
    </div>
  );
}

/* ---------------- MAIN CONTACT SECTION ---------------- */

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
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">
              Heavy baggage? Not your problem anymore.
            </h2>

            <p className="text-gray-600 max-w-md">
             Send it with Frisbi and enjoy traveling hands-free while we take care of your luggage.

            </p>

            <div className="space-y-8 mt-8">
              <Info icon={MapPin} title="Where to Find Us" value="India" />
              <Info icon={Mail} title="Drop us a line" value="contact@frisbi.in" />
              <Info icon={Phone} title="Drop us a line" value="+91 98787 98298" />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl drop-shadow-[0_4px_100px_rgba(0,0,0,0.08)]"
          >
            {/* Heading + Radio */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h4 className="text-xl font-semibold">Plan Your Delivery</h4>
              <RadioGroup value={form.userType} onChange={handleChange} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingInput
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <FloatingInput
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingSelect
                  label="Select Service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  options={services}
                />
                <FloatingInput
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <FloatingTextarea
                label="Write your message"
                name="message"
                value={form.message}
                onChange={handleChange}
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
