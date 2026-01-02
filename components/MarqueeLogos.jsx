"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Awwards from "@/asset/client-logos/awwwards.webp";
import cloudways from "@/asset/client-logos/cloudways.webp";
import envato from "@/asset/client-logos/envato.webp";
import hongkiat from "@/asset/client-logos/hongkiat.webp";
import hubspot from "@/asset/client-logos/hubspot.webp";
const logos = [
  Awwards,
  cloudways,
  envato,
  hongkiat,
  hubspot,
  Awwards,
  cloudways,
  envato,
  hongkiat,
  hubspot,
];

export default function MarqueeLogos() {
  return (
    <div className="container mx-auto relative px-4 py-12 md:py-24  sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-center  mb-10 md:mb-12 lg:mb-16">
          Companies that trust our services
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
