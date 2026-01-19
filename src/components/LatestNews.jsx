import React from 'react'
import { motion } from 'framer-motion'
import news1 from '../assets/news_1.jpg'
import news2 from '../assets/news_2.jpg'
import news3 from '../assets/news_3.jpg'
import calendarIcon from '../assets/calender.svg'
import cosmeticIcon from '../assets/cosmetic.svg'

const newsItems = [
    {
        id: 1,
        image: news1,
        category: 'Cosmetic',
        date: 'Oct 2, 2024',
        title: 'Revitalize Hair with Natural Ingredients'
    },
    {
        id: 2,
        image: news2,
        category: 'Tips',
        date: 'Oct 2, 2024',
        title: 'Essential Skincare Tips for the Summer'
    },
    {
        id: 3,
        image: news3,
        category: 'Serum',
        date: 'Sep 27, 2024',
        title: 'Do It Yourself Beauty Hacks for Home'
    }
]

function LatestNews() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-stone-500 text-xs font-bold tracking-widest uppercase">
                            LATEST NEWS
                        </span>
                        <span className="bg-[#EBCFB8] text-[#5C3A36] text-xs font-bold tracking-widest px-2 py-1 uppercase">
                            POSTS
                        </span>
                    </div>
                    <h2 className="text-5xl font-['Style_Script'] text-[#4A2C2A]">
                        Latest News & Articles
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content - Peach Background */}
                            <div className="bg-[#FAF3E0] p-8 space-y-4">
                                <div className="flex items-center gap-4 text-sm text-stone-500">
                                    <div className="flex items-center gap-1">
                                        <img src={cosmeticIcon} alt="Category" className="w-4 h-4" />
                                        <span className="uppercase tracking-wide">{item.category}</span>
                                    </div>
                                    <div className="w-px h-3 bg-stone-300"></div>
                                    <div className="flex items-center gap-1">
                                        <img src={calendarIcon} alt="Date" className="w-4 h-4" />
                                        <span>{item.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-serif text-[#4A2C2A] leading-tight group-hover:text-[#A68A7C] transition-colors">
                                    {item.title}
                                </h3>

                                <div className="pt-2">
                                    <button className="text-xs font-bold tracking-widest text-[#4A2C2A] uppercase flex items-center gap-2 group/btn">
                                        READ MORE
                                        <span className="text-lg leading-none transition-transform group-hover/btn:translate-x-1">→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default LatestNews
