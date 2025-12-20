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
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              We're here to answer <br /> your questions.
            </h2>

            <p className="text-second max-w-md">
              Have a question or need help? Feel free to reach out.
            </p>

            <div className="space-y-8 mt-8">
              <Info
                icon={MapPin}
                title="Office Location"
                value="100 S Main St, New York, NY"
                iconColor="text-blue-600" // Icon color
                iconBg="bg-blue-100" // Icon background
                valueColor="text-purple-600" // Value text color (custom)
              />
              <Info
                icon={Mail}
                title="Send a Message"
                value="info@frisbi.in"
                iconColor="text-blue-600"
                iconBg="bg-blue-100"
                valueColor="text-purple-600"
              />
              <Info
                icon={Phone}
                title="Call Us Directly"
                value="+91 987-879-8298"
                iconColor="text-blue-600"
                iconBg="bg-blue-100"
                valueColor="text-purple-600"
              />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white  p-8 rounded-2xl"
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
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium  text-black outline-none placeholder:text-second
             placeholder:text-sm placeholder:font-medium"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium  text-black outline-none placeholder:text-second
             placeholder:text-sm placeholder:font-medium"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl 
    text-sm font-medium bg-[#f5f5f5]
    outline-none 
    ${form.service ? "text-second" : "text-second"}
    text-sm`}
                >
                  {/* Placeholder option */}
                  <option value="" disabled hidden className="text-second ">
                    Select Service
                  </option>

                  {services.map((s, i) => (
                    <option
                      key={i}
                      value={s}
                      className="bg-black text-white text-sm font-medium"
                    >
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
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium  text-black outline-none placeholder:text-second
             placeholder:text-sm placeholder:font-medium"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] text-sm font-medium  text-black outline-none placeholder:text-second
             placeholder:text-sm placeholder:font-medium"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-full"
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

function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white rounded-xl">
        <Icon className="w-6 h-6 text-primary " />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <span className="text-second text-sm font-medium">{value}</span>
      </div>
    </div>
  );
}
