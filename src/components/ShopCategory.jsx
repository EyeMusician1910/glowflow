import React from 'react'
import { motion } from 'framer-motion'
import shop1 from '../assets/Shop_1.jpg'
import shop2 from '../assets/Shop_2.jpg'
import shop3 from '../assets/Shop_3.jpg'

const categories = [
    {
        id: 1,
        subtitle: 'NATURAL',
        title: 'Transform with Nature',
        image: shop1,
        textColor: 'text-stone-900',
        btnBorder: 'border-stone-900'
    },
    {
        id: 2,
        subtitle: 'FOUNDATION',
        title: 'Natural Tone',
        image: shop2,
        textColor: 'text-white',
        btnBorder: 'border-white'
    },
    {
        id: 3,
        subtitle: 'TRAVEL-FRIENDLY',
        title: 'Best for all Skin Tones',
        image: shop3,
        textColor: 'text-stone-900',
        btnBorder: 'border-stone-900'
    }
]

function ShopCategory() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                        >
                            {/* Background Image with Hover Blur */}
                            <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:blur-[6px] group-hover:scale-105">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className={`absolute inset-0 p-8 flex flex-col justify-center items-start ${cat.textColor}`}>
                                <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4">
                                    {cat.subtitle}
                                </span>
                                <h3 className="text-4xl font-serif mb-8 leading-tight">
                                    {cat.title}
                                </h3>
                                <button className={`uppercase text-[10px] font-bold tracking-widest px-6 py-3 border ${cat.btnBorder} hover:bg-white hover:text-black transition-colors`}>
                                    Shop Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ShopCategory
