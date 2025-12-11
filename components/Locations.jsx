"use client";

import { useState } from "react";
import Image from "next/image";

export default function TransformingCities() {
  const [showAll, setShowAll] = useState(false);

  const cities = [
    "Mumbai",
    "Delhi / New Delhi",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Nashik",
    "Nagpur",
    "Indore",
    "Bhopal",
    "Jaipur",
    "Jodhpur",
    "Kota",
    "Lucknow",
    "Kanpur",
    "Varanasi",
    "Prayagraj (Allahabad)",
    "Patna",
    "Ranchi",
    "Bhubaneswar",
    "Raipur",
    "Guwahati",
    "Dehradun",
    "Chandigarh",
    "Ludhiana",
    "Amritsar",
    "Mangalore",
    "Mysuru",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Trichy (Tiruchirappalli)",
    "Kochi",
    "Thiruvananthapuram",
    "Vijayawada",
    "Visakhapatnam",
    "Warangal",
    "Hubli–Dharwad",
    "Belagavi",
    "Jabalpur",
    "Gwalior",
    "Agra",
    "Faridabad",
    "Ghaziabad",
    "Noida",
    "Gurugram",
  ];

  const visibleCities = showAll ? cities : cities.slice(0, 18);

  return (
    <section className="relative w-full bg-[#06030F] py-24">
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-white font-bold text-4xl md:text-5xl">
          We are transforming cities
        </h2>

        <p className="mt-3 text-center text-gray-300 text-[15px]">
          Our business is growing by the day — we are now present in 21+ cities
        </p>

        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-12 gap-x-6 place-items-center">
          {visibleCities.map((city, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl overflow-hidden">
                <Image
                  src="/city.png" // Replace with your image
                  alt={city}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              <p className="mt-2 text-white text-xs font-medium tracking-wide text-center">
                {city}
              </p>
            </div>
          ))}
        </div>

        {/* VIEW MORE / LESS BUTTON */}
        <div className="text-center mt-24">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 text-sm font-semibold text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
