"use client";

import { useState } from "react";
import Image from "next/image";

// ✅ Import city images
import Mumbai from "@/asset/cities/Mumbai.webp";
import Delhi from "@/asset/cities/Delhi.webp";
import Bengaluru from "@/asset/cities/Bangalore.webp";
import Chennai from "@/asset/cities/Chennai.webp";
import Kolkata from "@/asset/cities/Kolkata.webp";
import Hyderabad from "@/asset/cities/Hyderabad.webp";
import Pune from "@/asset/cities/Pune.webp";
import Ahmedabad from "@/asset/cities/Ahmedabad.webp";
import Surat from "@/asset/cities/Surat.webp";
import Vadodara from "@/asset/cities/Vadodara.webp";
import Rajkot from "@/asset/cities/Rajkot.webp";
import Nashik from "@/asset/cities/Nashik.webp";
import Indore from "@/asset/cities/Indore.webp";
import Bhopal from "@/asset/cities/Bhopal.webp";
import Jaipur from "@/asset/cities/Jaipur.webp";
import Jodhpur from "@/asset/cities/Jodhpur.webp";
import Kota from "@/asset/cities/Kota.webp";
import Lucknow from "@/asset/cities/Lucknow.webp";
import Kanpur from "@/asset/cities/Kanpur.webp";
import Nagpur from "@/asset/cities/Nagpur.webp";
import Varanasi from "@/asset/cities/Varanasi.webp";
import Prayagraj from "@/asset/cities/Prayagraj.webp";
import Patna from "@/asset/cities/Patna.webp";
import Ranchi from "@/asset/cities/Ranchi.webp";
import Bhubaneswar from "@/asset/cities/Bhubaneswar.webp";
import Raipur from "@/asset/cities/Raipur.webp";
import Guwahati from "@/asset/cities/Guwahati.webp";
import Dehradun from "@/asset/cities/Dehradun.webp";
import Chandigarh from "@/asset/cities/Chandigarh.webp";
import Ludhiana from "@/asset/cities/Ludhiana.webp";
import Amritsar from "@/asset/cities/Amritsar.webp";
import Mangalore from "@/asset/cities/Mangalore.webp";
import Mysuru from "@/asset/cities/Mysuru.webp";
import Coimbatore from "@/asset/cities/Coimbatore.webp";
import Madurai from "@/asset/cities/Madurai.webp";
import Salem from "@/asset/cities/Salem.webp";
import Trichy from "@/asset/cities/Trichy.webp";
import Kochi from "@/asset/cities/Kochi.webp";
import Thiruvananthapuram from "@/asset/cities/Thiruvananthapuram.webp";
import Vijayawada from "@/asset/cities/Vijayawada.webp";
import Visakhapatnam from "@/asset/cities/Visakhapatnam.webp";
import Warangal from "@/asset/cities/Warangal.webp";
import HubliDharwad from "@/asset/cities/HubliDharwad.webp";
import Belagavi from "@/asset/cities/Belagavi.webp";
import Jabalpur from "@/asset/cities/Jabalpur.webp";
import Gwalior from "@/asset/cities/Gwalior.webp";
import Agra from "@/asset/cities/Agra.webp";
import Faridabad from "@/asset/cities/Faridabad.webp";
import Ghaziabad from "@/asset/cities/Ghaziabad.webp";
import Noida from "@/asset/cities/Noida.webp";
import Gurugram from "@/asset/cities/Gurugram.webp";

// ✅ Fallback image
import DefaultCity from "@/asset/cities/Bangalore.webp";
import BgCity from "@/asset/about-us/bg.png";

export default function TransformingCities() {
  const [showAll, setShowAll] = useState(false);

  // ✅ City list
  const cities = [
    "Mumbai",
    "Delhi",
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
    "Prayagraj",
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
    "Trichy",
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

  // ✅ City → Image mapping
  const cityImages = {
    Mumbai,
    Delhi,
    Bengaluru,
    Chennai,
    Kolkata,
    Hyderabad,
    Pune,
    Ahmedabad,
    Surat,
    Vadodara,
    Rajkot,
    Nashik,
    Nagpur,
    Indore,
    Bhopal,
    Jaipur,
    Jodhpur,
    Kota,
    Lucknow,
    Kanpur,
    Varanasi,
    Prayagraj,
    Patna,
    Ranchi,
    Bhubaneswar,
    Raipur,
    Guwahati,
    Dehradun,
    Chandigarh,
    Ludhiana,
    Amritsar,
    Mangalore,
    Mysuru,
    Coimbatore,
    Madurai,
    Salem,
    Trichy,
    Kochi,
    Thiruvananthapuram,
    Vijayawada,
    Visakhapatnam,
    Warangal,
    HubliDharwad,
    Belagavi,
    Jabalpur,
    Gwalior,
    Agra,
    Faridabad,
    Ghaziabad,
    Noida,
    Gurugram,
  };

  // ✅ MOBILE: 3 per row × 4 rows = 12
  const visibleCities = showAll ? cities : cities.slice(0, 21);

  return (
    <section className="relative w-full bg-primary py-24">
      
      <div className="container mx-auto px-4">
        
        <h2 className="text-center text-white font-bold text-3xl">
          We Are Transforming Cities
        </h2>

        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-12 gap-x-6 place-items-center">
          {visibleCities.map((city) => (
            <div key={city} className="flex flex-col items-center">
              <div className="rounded-2xl flex items-center justify-center">
                <Image
                  src={cityImages[city] || DefaultCity}
                  alt={city}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <p className="mt-2 text-white text-xs font-bold text-center">
                {city}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-white hover:scale-105 transition-all"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
