"use client";

import Image from "next/image";
import allowedCheck from "@/asset/icons/check.svg"; 
import prohibitedX from "@/asset/icons/close.svg"; 
import docIcon from "@/asset/icons/arrow.svg";
import electronicsIcon from "@/asset/icons/arrow.svg";
import clothesIcon from "@/asset/icons/arrow.svg";
import giftIcon from "@/asset/icons/arrow.svg";
import bookIcon from "@/asset/icons/arrow.svg";
import officeIcon from "@/asset/icons/arrow.svg";
import illegalIcon from "@/asset/icons/arrow.svg";
import hazardIcon from "@/asset/icons/arrow.svg";
import flameIcon from "@/asset/icons/arrow.svg";
import batteryIcon from "@/asset/icons/arrow.svg";
import foodIcon from "@/asset/icons/arrow.svg";

export default function PackageGuidelines() {
  const allowedItems = [
    { icon: docIcon, label: "Documents" },
    { icon: electronicsIcon, label: "Electronics (non-battery)" },
    { icon: clothesIcon, label: "Clothes" },
    { icon: giftIcon, label: "Gifts" },
    { icon: bookIcon, label: "Books" },
    { icon: officeIcon, label: "Office supplies" },
  ];

  const prohibitedItems = [
    { icon: illegalIcon, label: "Illegal goods" },
    { icon: hazardIcon, label: "Hazardous materials" },
    { icon: flameIcon, label: "Flammable items" },
    { icon: batteryIcon, label: "Batteries (high capacity)" },
    { icon: foodIcon, label: "Perishable food" },
  ];

  return (
    <section className="py-20 bg-[#F4F2F7]">
      <h2 className="text-3xl font-bold text-center mb-12">Package Guidelines</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Allowed Items */}
        <div className="bg-green-50 border border-green-200 rounded-3xl p-6">
          <div className="flex items-center mb-6">
            <Image src={allowedCheck} alt="Allowed" width={44} height={44} />
            <span className="ml-2 font-bold text-[20px] text-green-700">Allowed Items</span>
          </div>
          <ul className="space-y-4">
            {allowedItems.map((item, i) => (
              <li key={i} className="flex items-center bg-white rounded-lg p-3 ">
                <Image src={item.icon} alt={item.label} width={24} height={24} />
                <span className="ml-3 font-semibold">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prohibited Items */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-6">
          <div className="flex items-center mb-6">
            <Image src={prohibitedX} alt="Prohibited" width={44} height={44} />
            <span className="ml-2 font-bold text-[20px] text-red-700">Prohibited Items</span>
          </div>
          <ul className="space-y-4">
            {prohibitedItems.map((item, i) => (
              <li key={i} className="flex items-center bg-white rounded-lg p-3 ">
                <Image src={item.icon} alt={item.label} width={24} height={24} />
                <span className="ml-3 font-semibold">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
