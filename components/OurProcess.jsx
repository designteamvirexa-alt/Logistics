"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Truck,
  Package,
  CreditCard,
  Hash,
  Home,
  CheckCircle,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Enter Pickup & Delivery Address",
      description: "Use our smart location picker.",
      color: "blue",
    },
    {
      icon: Truck,
      title: "Choose Standard Delivery",
      description: "System auto-calculates the best pricing.",
      color: "purple",
    },
    {
      icon: Package,
      title: "Add Parcel Details",
      description: "Weight, dimensions, value, item type.",
      color: "green",
    },
    {
      icon: CreditCard,
      title: "Make Payment",
      description: "Online / UPI / Wallet / Card / COD (selected cities).",
      color: "orange",
    },
    {
      icon: Hash,
      title: "Get Instant Tracking ID",
      description: "Start tracking immediately.",
      color: "pink",
    },
    {
      icon: Home,
      title: "Doorstep Pickup",
      description: "Our delivery agent arrives at your preferred time slot.",
      color: "indigo",
    },
    {
      icon: CheckCircle,
      title: "Delivery to Destination",
      description: "Safe, secured, and on time.",
      color: "teal",
    },
  ];

  const colorClasses = {
    blue: "text-blue-600 bg-blue-500/10 border-blue-200",
    purple: "text-purple-600 bg-purple-500/10 border-purple-200",
    green: "text-green-600 bg-green-500/10 border-green-200",
    orange: "text-orange-600 bg-orange-500/10 border-orange-200",
    pink: "text-pink-600 bg-pink-500/10 border-pink-200",
    indigo: "text-indigo-600 bg-indigo-500/10 border-indigo-200",
    teal: "text-teal-600 bg-teal-500/10 border-teal-200",
  };

  return (
    <section className=" pb-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         

          <h2 className="text-3xl md:text-4xl font-bold ">
            How Standard Delivery Works
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center 
      mx-auto">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              const [textColor, bgColor, borderColor] = colors.split(" ");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative bg-white rounded-3xl p-6 shadow-sm border ${borderColor} hover:shadow-xl transition-all w-full`}
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md">
                    <span className={`${textColor} font-semibold`}>
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mt-2 ${bgColor}`}>
                    <step.icon className={`w-7 h-7 ${textColor}`} />
                  </div>

                  {/* Text */}
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;