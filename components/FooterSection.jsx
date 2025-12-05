"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Youtube, Facebook } from "lucide-react";
// import Logo from "@/asset/logo.png"; // change path based on your folder

export default function Footer() {
    return (
        <footer className="bg-[#0D0D0D] text-white py-16 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
            >
                {/* LOGO + DESCRIPTION */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        {/* <Image src={Logo} alt="Frisbi" width={40} height={40} /> */}
                        <span className="text-xl font-semibold">Frisbi</span>
                    </div>

                    <p className="text-gray-400 text-sm max-w-xs">
                        We don’t just build apps, we create brand.  
                        Choosing us will be your best decision.
                    </p>

                    <div>
                        <h4 className="font-semibold mb-2">Social Media</h4>
                        <div className="flex items-center gap-4">
                            <Youtube className="w-5 h-5" />
                            <Instagram className="w-5 h-5" />
                            <Facebook className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* SERVICES */}
                <div>
                    <h4 className="font-semibold mb-3 text-lg">Services</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Excess Baggage</li>
                        <li>• Package Delivery</li>
                        <li>• Airport Transfer</li>
                        <li>• Smart Box</li>
                        <li>• Become a Partner</li>
                    </ul>
                </div>

                {/* COMPANY */}
                <div>
                    <h4 className="font-semibold mb-3 text-lg">Company</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Excess Baggage</li>
                        <li>• Package Delivery</li>
                        <li>• Airport Transfer</li>
                        <li>• Smart Box</li>
                        <li>• Become a Partner</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="font-semibold mb-3 text-lg">Contact Us</h4>

                    <p className="text-gray-300 text-sm leading-relaxed">
                        Delhi-NCR | Bangalore | Hyderabad | Pune | Indore |  
                        Chandigarh | Jaipur | Bhubaneswar
                    </p>

                    <div className="flex items-center gap-4 mt-5">
                        <button className="px-6 py-2 bg-blue-600 rounded-lg text-sm">
                            Contact Us
                        </button>
                        <button className="px-6 py-2 border border-gray-500 rounded-lg text-sm">
                            Whatsapp
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* BOTTOM LINE */}
            <div className="border-t border-gray-700 mt-12 pt-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">

                    <p>Copyright © 2025 – All Right Reserved</p>

                    <div className="flex items-center gap-4 flex-wrap">
                        <span>Terms and Condition</span>
                        <span>|</span>
                        <span>Privacy Policy</span>
                        <span>|</span>
                        <span>Shipping Policy</span>
                        <span>|</span>
                        <span>Sitemap</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}
