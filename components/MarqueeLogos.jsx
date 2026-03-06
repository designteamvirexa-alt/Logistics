"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Awwards from "@/asset/client-logos/blackLogo.webp";

const logos = [
  Awwards,
  
];

export default function MarqueeLogos() {
  return (
    <div className="container mx-auto relative px-4 py-12 md:py-24  sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-center  mb-10 md:mb-12 lg:mb-16">
          Powered By
        </h2>
      </div>

      <Marquee gradient={false} speed={50}>
        {logos.map((logo, index) => (
          <div key={index} className="px-4">
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
