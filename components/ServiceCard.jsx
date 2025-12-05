import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Service Data ---
const servicesData = [
  {
    title: 'Excess Baggage',
    description: 'Skip airline charges—send your extra luggage at a fraction of the cost.',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    descColor: 'text-gray-600',
    linkColor: 'text-indigo-600 hover:text-indigo-700',
    imageSrc: '/images/excess_baggage_illustration.png', // Replace with your actual path
    imageAlt: 'Woman using phone for shipping',
    delay: 0,
  },
  {
    title: 'Airport Transfers',
    description: 'Skip airline charges—send your extra luggage at a fraction of the cost.',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    descColor: 'text-blue-100',
    linkColor: 'text-white hover:text-blue-200',
    imageSrc: '/images/airport_transfers_illustration.png', // Replace with your actual path
    imageAlt: 'Mobile app UI for booking transfers',
    delay: 0.15, 
  },
  {
    title: 'Frisbi Smart Box',
    description: 'Skip airline charges—send your extra luggage at a fraction of the cost.',
    bgColor: 'bg-yellow-500',
    textColor: 'text-gray-800', // Adjusted for contrast on yellow background
    descColor: 'text-yellow-900', // Adjusted for contrast on yellow background
    linkColor: 'text-white hover:text-yellow-900',
    imageSrc: '/images/frisbi_smart_box_illustration.png', // Replace with your actual path
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
      className={`relative p-6 md:p-8 lg:p-10 rounded-3xl shadow-xl flex flex-col justify-between ${service.bgColor} h-[450px] overflow-hidden transition-shadow duration-300 hover:shadow-2xl`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is visible
    >
      <div className="z-10"> {/* Ensure text is above the image */}
        <h3 className={`text-2xl md:text-3xl font-bold ${service.textColor}`}>
          {service.title}
        </h3>
        <p className={`mt-4 text-base md:text-lg ${service.descColor}`}>
          {service.description}
        </p>
        <a 
          href="#" 
          className={`mt-6 inline-block font-semibold ${service.linkColor}`}
        >
          Learn More
        </a>
      </div>
      
      {/* Absolute positioned illustration/image */}
      {/* Adjust positioning and size based on your actual image files */}
      <div className="absolute bottom-[-10%] right-0 left-0 w-full h-[60%] z-0">
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
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12 md:mb-16">
          Our Services
        </h2>
        
        {/* RESPONSIVE GRID LAYOUT */}
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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