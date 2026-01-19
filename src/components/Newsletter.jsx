import React from 'react'
import { motion } from 'framer-motion'
import newsletterImg from '../assets/newslatter.jpg'

function Newsletter() {
    return (
        <section className="bg-[#F3DBC8]">
            {/* Grid container: 1 column on mobile, 2 on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left Image Section - Full Height */}
                <div className="relative h-[400px] md:h-auto">
                    <img
                        src={newsletterImg}
                        alt="Newsletter"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Right Content Section */}
                <div className="relative flex flex-col justify-center items-center text-center p-12 md:p-24 overflow-hidden">

                    {/* Decorative Floral Elements (Placeholder SVGs positioned in corners) */}
                    {/* Top Right */}
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none translate-x-10 -translate-y-10">
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-[#4A2C2A]">
                            <path d="M50 50 Q80 20 100 0 M50 50 Q20 80 0 100 M50 50 Q80 80 100 100 M50 50 Q20 20 0 0" strokeWidth="0.5" />
                        </svg>
                    </div>
                    {/* Bottom Left */}
                    <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10 pointer-events-none -translate-x-10 translate-y-10">
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-[#4A2C2A]">
                            <path d="M50 50 Q80 20 100 0 M50 50 Q20 80 0 100 M50 50 Q80 80 100 100 M50 50 Q20 20 0 0" strokeWidth="0.5" />
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-xl w-full flex flex-col items-center">
                        {/* Header */}
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-[#5C3A36] text-xs font-bold tracking-widest uppercase">
                                JOIN
                            </span>
                            <span className="bg-[#FFFFF0] text-[#5C3A36] text-xs font-bold tracking-widest px-2 py-1 uppercase shadow-sm">
                                NEWSLETTER
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-['Style_Script'] text-[#4A2C2A] mb-8 leading-tight">
                            Subscribe for Latest Updates & News
                        </h2>

                        {/* Form */}
                        <form className="flex flex-col gap-6 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-4 bg-white text-stone-600 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#5C3A36] shadow-sm text-center md:text-left"
                            />
                            {/* Button Centered */}
                            <button className="bg-[#5C3A36] text-white px-10 py-4 font-bold tracking-widest text-sm hover:bg-[#4A2C2A] transition-colors uppercase flex items-center justify-center gap-2 shadow-md w-auto self-center group">
                                <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span> SUBSCRIBE
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Newsletter
