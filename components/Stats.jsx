"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

export default function Stats({ data }) {
  return (
    <section className="w-full py-10">
      <div className="
        grid grid-cols-2 md:grid-cols-4 
        gap-y-8 text-center 
        max-w-5xl mx-auto
      ">
        {data.map((item, index) => (
          <StatItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ start, end, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* NUMBER */}
      <div className="text-4xl md:text-5xl font-bold text-black">
        {isInView ? (
          <CountUp start={start} end={end} duration={2} />
        ) : (
          end
        )}
      </div>

      {/* LABEL */}
      <p className="text-xs md:text-sm text-black mt-1 font-medium tracking-wide">
        {label}
      </p>
    </div>
  );
}
