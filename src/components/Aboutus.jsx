import React from 'react'
import { motion } from 'framer-motion'
import aboutImage from '../assets/Aboutus.jpg'

function Aboutus() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Header Badge */}
                        <div className="flex items-center gap-4">
                            <span className="text-amber-900 font-bold text-xs tracking-[0.2em] uppercase">
                                Pure Beauty
                            </span>
                            <span className="bg-orange-100 text-amber-900 px-2 py-1 text-[10px] font-bold tracking-wider uppercase">
                                Wisdom
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-6xl font-['Style_Script'] text-stone-900 leading-tight">
                            Next-Gen Skincare for <br />
                            <span className="italic">Lasting Glow</span>
                        </h2>

                        {/* Highlighted Box */}
                        <div className="bg-orange-50 p-6 border-l-4 border-amber-900">
                            <p className="text-amber-900 font-medium text-lg">
                                Experience skincare of the future with our Next-Gen line, created for a long-lasting glow.
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-stone-600 leading-relaxed font-light">
                            Using cutting-edge components like hyaluronic acid and antioxidants, our products hydrate and revitalize skin to guarantee youthful, glowing skin.
                        </p>

                        {/* Opening Hours */}
                        <div className="bg-orange-50 py-4 px-6 flex justify-between items-center text-sm font-medium text-amber-900 tracking-wide">
                            <span>OPENING HOURS</span>
                            <span>10:00 AM - 09:00 PM</span>
                        </div>

                        {/* Button */}
                        <button className="bg-[#4A2C2A] text-white px-8 py-4 font-bold tracking-widest text-xs hover:bg-stone-800 transition-colors flex items-center gap-4 group">
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                            DISCOVER MORE
                        </button>
                    </motion.div>

                    {/* Right Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative pt-12 pl-12"
                    >
                        {/* Background Rect - z-0 to sit behind image but above section bg */}
                        <div className="absolute top-0 bottom-0 left-12 right-12 bg-orange-100 rounded-sm"></div>

                        {/* Image Container - z-10 */}
                        <div className="relative z-10 ml-auto w-[85%]">
                            <img
                                src={aboutImage}
                                alt="Skincare Model"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Vertical Text - z-20, moved closer (left-36) */}
                        <div className="absolute left-36 bottom-32 origin-bottom-left -rotate-90 z-20">
                            <h3 className="text-4xl md:text-6xl font-serif text-[#C4A48A] tracking-wide whitespace-nowrap opacity-90">
                                About Us
                            </h3>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Aboutus
