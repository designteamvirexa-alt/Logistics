'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo5.png",
  "/logos/logo5.png",
  "/logos/logo5.png",
  "/logos/logo5.png",
  "/logos/logo5.png",
  "/logos/logo5.png",
  "/logos/logo5.png",
];

export default function MarqueeLogos() {
  return (
    <div className="w-full py-4">
      <Marquee gradient={false} speed={50}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <Image src={logo} alt={`Logo ${index}`} width={100} height={50} className="object-contain"/>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
