'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Awwards from "@/asset/client-logos/awwwards.webp"
import cloudways from "@/asset/client-logos/cloudways.webp"
import envato from "@/asset/client-logos/envato.webp"
import hongkiat from "@/asset/client-logos/hongkiat.webp"
import hubspot from "@/asset/client-logos/hubspot.webp"
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
    <div className="w-full py-4">
      <Marquee gradient={false} speed={50}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <Image src={logo} alt={`Logo ${index}`} width={100} height={80} className="object-contain"/>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
