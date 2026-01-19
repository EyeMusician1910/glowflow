import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero copy.jpg'


function Hero() {
  return (
    <>
      <section className="bg-[#FAF3E0] min-h-[600px] flex items-center relative overflow-hidden">
        {/* Using a light peach/beige background #FAF3E0 or #F9EFE7 to match reference */}

        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 z-10 py-20 lg:py-0"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-900/70 text-[10px] font-bold tracking-widest uppercase">
                  ORGANIC
                </span>
                <span className="bg-[#EBCFB8] text-amber-900 text-[10px] font-bold tracking-widest px-2 py-1 uppercase">
                  BLENDS
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl text-[#4A2C2A] leading-[1.1] font-['Style_Script']">
                Superior<br />
                <span className="text-[#4A2C2A]">Skin Products</span>
              </h1>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed max-w-lg font-light">
              Discover our magnificent skin care products, which are made with high-quality components for radiant beauty and long-lasting effects and are meant to improve your regimen subtly.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#5C3A36] text-white px-8 py-4 font-bold tracking-widest text-xs hover:bg-[#4A2C2A] transition-colors uppercase flex items-center gap-2 shadow-lg group">
                <span className="text-white group-hover:translate-x-1 transition-transform">→</span> OUR COLLECTIONS
              </button>
              <button className="border border-stone-400 text-stone-700 px-8 py-4 font-bold tracking-widest text-xs hover:bg-white hover:border-[#5C3A36] transition-colors uppercase flex items-center gap-2 group">
                <span className="text-stone-700 group-hover:translate-x-1 transition-transform">→</span> OUR COMBO
              </button>
            </div>
          </motion.div>

          {/* Right Image - Full Height Coverage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[500px] flex items-end justify-end lg:-mr-40" // Negative margin to pull image to edge
          >
            <img
              src={heroImage}
              alt="Superior Skin Products"
              className="w-full h-auto max-h-[700px] object-contain object-bottom lg:object-right-bottom drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* Benefits Footer Banner */}
      <section className="bg-[#5C3A36] py-10 px-8 border-t border-[#4A2C2A]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="text-white text-3xl flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-1">FREE DELIVERY</h3>
                <p className="text-white/80 text-[10px] font-light">No-cost shipping worldwide</p>
              </div>
            </motion.div>

            {/* Satisfaction Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="text-white text-3xl flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-1">SATISFACTION GUARANTEE</h3>
                <p className="text-white/80 text-[10px] font-light">Guaranteed money-back policy</p>
              </div>
            </motion.div>

            {/* Internet Assistance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="text-white text-3xl flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-1">INTERNET ASSISTANCE</h3>
                <p className="text-white/80 text-[10px] font-light">24/7 online customer support</p>
              </div>
            </motion.div>

            {/* Adaptable Payments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="text-white text-3xl flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-1">ADAPTABLE PAYMENTS</h3>
                <p className="text-white/80 text-[10px] font-light">Payment options are flexible</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
