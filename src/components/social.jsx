import React from 'react'
import { motion } from 'framer-motion'
import social1 from '../assets/social_1.jpg'
import social2 from '../assets/social_2.jpg'
import social3 from '../assets/social_3.jpg'
import social4 from '../assets/social_4.jpg'
import social5 from '../assets/social_5.jpg'
import flowerIcon from '../assets/glow.svg' // Using glow.svg as a decorative element if suitable, or just CSS

const socialItems = [
    {
        id: 1,
        image: social1,
        platform: 'INSTAGRAM',
        handle: '@glowflow',
        link: '#instagram'
    },
    {
        id: 2,
        image: social2,
        platform: 'FACEBOOK',
        handle: '@glowflow',
        link: '#facebook'
    },
    {
        id: 3,
        image: social3,
        platform: 'PINTEREST',
        handle: '@glowflow',
        link: '#pinterest'
    },
    {
        id: 4,
        image: social4,
        platform: 'LINKEDIN',
        handle: '@glowflow',
        link: '#linkedin'
    },
    {
        id: 5,
        image: social5,
        platform: 'TWITTER',
        handle: '@glowflow',
        link: '#twitter'
    }
]

function Social() {
    return (
        <section className="bg-white mb-24">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {socialItems.map((item) => (
                    <div key={item.id} className="relative group aspect-square overflow-hidden cursor-pointer">
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.platform}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#F3DBC8]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                            {/* Decorative Flower Background (Optional) */}
                            <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
                                {/* SVG Flower or similar decorative shape */}
                                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-48 h-48 text-[#5C3A36]">
                                    <path d="M50 50 Q80 20 100 0 M50 50 Q20 80 0 100 M50 50 Q80 80 100 100 M50 50 Q20 20 0 0" strokeWidth="0.5" />
                                </svg>
                            </div>

                            <div className="relative z-10 text-[#291A18]">
                                <h3 className="text-lg font-bold tracking-widest mb-1">
                                    @{item.platform}
                                </h3>
                                <p className="text-xs font-serif tracking-wide">
                                    Follow us on {item.platform.charAt(0) + item.platform.slice(1).toLowerCase()}
                                </p>
                                <p className="text-xs font-bold mt-1">
                                    {item.handle}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Social
