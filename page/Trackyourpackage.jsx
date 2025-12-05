import Image from 'next/image'
import React from 'react'

function Trackyourpackage() {
    return (
        <div>
            <div className="-mt-20">
                <motion.section
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[260px] md:h-[360px] rounded-b-3xl overflow-hidden"
                >
                    {/* Background Image */}
                    <Image
                        src="/about-hero.jpg" // your hero image path
                        alt="About Background"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div>

                    {/* CONTENT */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-3xl md:text-4xl font-semibold drop-shadow-lg">
                            Track your package
                        </h1>

                        <p className="text-white/80 mt-3 text-sm md:text-base">
                            Home <span className="text-blue-200">›</span> Track your package
                        </p>
                    </div>
                </motion.section>
            </div>

        </div>
    )
}

export default Trackyourpackage
