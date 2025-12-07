import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Smartbox from '@/asset/delightful-experice.webp';
import Excess from '@/asset/excessbaggage.webp';
import Airport from '@/asset/airport-transfers.webp';

// --- Service Data ---
const servicesData = [
  {
    title: 'Excess Baggage',
    description: 'Skip airline charges—send your extra luggage at a fraction of the cost.',
    bgColor: 'bg-white',
    textColor: 'text-black',
    descColor: 'text-black',
    linkColor: 'text-black hover:text-[#013EFE]',
    imageSrc: Excess, // Replace with your actual path
    imageAlt: 'Woman using phone for shipping',
    delay: 0,
  },
  {
    title: 'Airport Transfers',
    description: 'Skip airline charges—send your extra luggage at a fraction of the cost.',
    bgColor: 'bg-[#013EFE]',
    textColor: 'text-white',
    descColor: 'text-white',
    linkColor: 'text-white hover:text-[#ffffff]',
    imageSrc: Airport , // Replace with your actual path
    imageAlt: 'Mobile app UI for booking transfers',
    delay: 0.15, 
  },
  {
    title: 'Frisbi Smart Box',
    description: 'Skip airline charges—send your extra luggage at a fraction of the cost.',
    bgColor: 'bg-yellow-500',
    textColor: 'text-black', // Adjusted for contrast on yellow background
    descColor: 'text-black', // Adjusted for contrast on yellow background
    linkColor: 'text-black hover:text-[#013EFE]',
    imageSrc: Smartbox, // Replace with your actual path
    imageAlt: 'Man smiling and giving a thumbs up',
    delay: 0.3,
  },
  
];

// --- Card Component Logic (Internal) ---
const ServiceCard = ({ service }) => {
  // Framer Motion variants for fade-in/slide-up with staggered delay
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: service.delay,
        ease: "easeOut",
      } 
    },
  };

  return (
    <motion.div
      className={`relative p-6 md:p-8 lg:p-10 rounded-3xl  flex flex-col justify-between ${service.bgColor} h-[450px] overflow-hidden transition-shadow duration-300 `}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is visible
    >
      <div className="z-10"> {/* Ensure text is above the image */}
        <h3 className={` ${service.textColor}`}>
          {service.title}
        </h3>
        <p className={`mt-4  ${service.descColor}`}>
          {service.description}
        </p>
        <a 
          href="#" 
          className={`mt-6 inline-block font-semibold ${service.linkColor}`}
        >
          Learn more
        </a>
      </div>
      
      {/* Absolute positioned illustration/image */}
      {/* Adjust positioning and size based on your actual image files */}
      <div className="absolute bottom-[-10%] right-0 left-0 w-full h-[66%] z-0">
        <Image 
          src={service.imageSrc} 
          alt={service.imageAlt} 
          layout="fill" 
          objectFit="contain"
          priority={service.delay === 0 ? true : false} // Priority for the first image
        />
      </div>
    </motion.div>
  );
};


// --- Main Component ---
const ServicesSection = () => {
  return (
    <section className=" ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-center mb-12 md:mb-16">
          Our Services
        </h2>
        
        {/* RESPONSIVE GRID LAYOUT */}
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid gap-4 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;