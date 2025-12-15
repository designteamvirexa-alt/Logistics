import React from "react";
import Image from "next/image";
import profile from "@/asset/profiles/profile-1.png";

export default function Testimonials() {
  const marqueeReviews = [
    {
      img: profile,
      name: "James",
      title: "Amazing service",
      text: "Rail Freight helped us move heavy shipments long distance in an eco-friendly way, while keeping costs low and schedules predictable.",
    },
    {
      img: profile,
      name: "Olivia",
      title: "The guys are Amazing",
      text: "Their service is incredibly reliable and professional. Delivery was faster than expected, and the costs were much lower.",
    },
  ];

  const marqueeReviewsReverse = [...marqueeReviews];

  return (
    <div className="py-24">
      <h2 className="text-3xl font-bold text-center mb-10">
        100% User Satisfaction
      </h2>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="overflow-hidden mt-16 w-full space-y-6">

        {/* FIRST MARQUEE */}
        <div
          className="flex gap-6 w-max"
          style={{ animation: "marqueeScroll 20s linear infinite" }}
        >
          {[...marqueeReviews, ...marqueeReviews].map((item, i) => (
            <div
              key={i}
              className="w-[400px] bg-white p-10 rounded-3xl flex-shrink-0"
              style={{ border: "2px solid #f5f5f5" }}
            >
              <div className="flex items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <h4 className="font-semibold">{item.name}</h4>
                </div>
              </div>

              <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
              <p className="text-second mt-2">
                <q>{item.text}</q>
              </p>
            </div>
          ))}
        </div>

        {/* SECOND MARQUEE (REVERSE) */}
        <div
          className="flex gap-6 w-max"
          style={{ animation: "marqueeReverse 20s linear infinite" }}
        >
          {[...marqueeReviewsReverse, ...marqueeReviewsReverse].map((item, i) => (
            <div
              key={i}
              className="w-[400px] bg-white p-10 rounded-3xl flex-shrink-0"
              style={{ border: "2px solid #f5f5f5" }}
            >
              <div className="flex items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <h4 className="font-semibold">{item.name}</h4>
                </div>
              </div>

              <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
              <p className="text-second mt-2">
                <q>{item.text}</q>
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
