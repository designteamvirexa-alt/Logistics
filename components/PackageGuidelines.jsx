// "use client";

// import Image from "next/image";
// import allowedCheck from "@/assets/allowed.png"; 
// import prohibitedX from "@/assets/prohibited.png"; 
// import docIcon from "@/assets/documents.png";
// import electronicsIcon from "@/assets/electronics.png";
// import clothesIcon from "@/assets/clothes.png";
// import giftIcon from "@/assets/gift.png";
// import bookIcon from "@/assets/book.png";
// import officeIcon from "@/assets/office.png";

// import illegalIcon from "@/assets/illegal.png";
// import hazardIcon from "@/assets/hazard.png";
// import flameIcon from "@/assets/flame.png";
// import batteryIcon from "@/assets/battery.png";
// import foodIcon from "@/assets/food.png";

// export default function PackageGuidelines() {
//   const allowedItems = [
//     { icon: docIcon, label: "Documents" },
//     { icon: electronicsIcon, label: "Electronics (non-battery)" },
//     { icon: clothesIcon, label: "Clothes" },
//     { icon: giftIcon, label: "Gifts" },
//     { icon: bookIcon, label: "Books" },
//     { icon: officeIcon, label: "Office supplies" },
//   ];

//   const prohibitedItems = [
//     { icon: illegalIcon, label: "Illegal goods" },
//     { icon: hazardIcon, label: "Hazardous materials" },
//     { icon: flameIcon, label: "Flammable items" },
//     { icon: batteryIcon, label: "Batteries (high capacity)" },
//     { icon: foodIcon, label: "Perishable food" },
//   ];

//   return (
//     <section className="py-20 bg-[#F4F2F7]">
//       <h2 className="text-3xl font-bold text-center mb-12">Package Guidelines</h2>
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Allowed Items */}
//         <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
//           <div className="flex items-center mb-6">
//             <Image src={allowedCheck} alt="Allowed" width={24} height={24} />
//             <span className="ml-2 font-semibold text-green-700">Allowed Items</span>
//           </div>
//           <ul className="space-y-4">
//             {allowedItems.map((item, i) => (
//               <li key={i} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
//                 <Image src={item.icon} alt={item.label} width={24} height={24} />
//                 <span className="ml-3">{item.label}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Prohibited Items */}
//         <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
//           <div className="flex items-center mb-6">
//             <Image src={prohibitedX} alt="Prohibited" width={24} height={24} />
//             <span className="ml-2 font-semibold text-red-700">Prohibited Items</span>
//           </div>
//           <ul className="space-y-4">
//             {prohibitedItems.map((item, i) => (
//               <li key={i} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
//                 <Image src={item.icon} alt={item.label} width={24} height={24} />
//                 <span className="ml-3">{item.label}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
