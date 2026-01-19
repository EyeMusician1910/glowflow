import React from 'react'
import { motion } from 'framer-motion'
import serviceImage from '../assets/Services.png'
import nailsIcon from '../assets/nails.svg'
import beautyIcon from '../assets/beauty.svg'
import glowIcon from '../assets/glow.svg'
import thermalIcon from '../assets/thermal.svg'
import makeupIcon from '../assets/makeup.svg'
import stoneIcon from '../assets/stone.svg'

function Services() {
    const leftServices = [
        {
            id: 1,
            title: "Nail Elegance",
            desc: "Indulge in premium luxurious nail care and treatments.",
            icon: nailsIcon
        },
        {
            id: 2,
            title: "Beauty Parlor",
            desc: "Unwind and fully indulge in pure luxurious beauty",
            icon: beautyIcon
        },
        {
            id: 3,
            title: "Glowing Face",
            desc: "Face transformation with expert cosmetics care",
            icon: glowIcon
        }
    ]

    const rightServices = [
        {
            id: 4,
            title: "Thermal Bath",
            desc: "Relaxation and Renewal in Thermal Baths: An Escape",
            icon: thermalIcon
        },
        {
            id: 5,
            title: "Essential Makeup",
            desc: "Essential makeup tools for achieving perfect beauty.",
            icon: makeupIcon
        },
        {
            id: 6,
            title: "Stone Massage",
            desc: "Experience deep relaxation with stone massages",
            icon: stoneIcon
        }
    ]

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="text-amber-900 bg-orange-100 font-bold text-xs tracking-[0.2em] px-3 py-1 uppercase">
                            What We Bring
                        </span>
                    </div>
                    <h2 className="text-5xl text-stone-900 font-['Style_Script'] leading-tight">
                        Transform with Our<br />
                        Glowing Services
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                    {/* Left Column */}
                    <div className="space-y-8">
                        {leftServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 justify-end p-6 rounded-full bg-[#FFF5ED] hover:bg-orange-100 transition-colors group cursor-pointer"
                            >
                                {/* Text Content */}
                                <div className="text-right">
                                    <h3 className="text-xl font-serif text-stone-800 mb-1">{service.title}</h3>
                                    <p className="text-stone-500 text-xs leading-relaxed max-w-[200px]">{service.desc}</p>
                                </div>

                                {/* Icon Circle */}
                                <div className="w-16 h-16 rounded-full bg-[#EBCFB8] border border-dashed border-stone-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <img src={service.icon} alt={service.title} className="w-8 h-8 opacity-80" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                        <div className="relative w-80 h-[500px] rounded-[100px] overflow-hidden border-4 border-orange-50 shadow-2xl">
                            <img
                                src={serviceImage}
                                alt="Services"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {rightServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 border-none p-6 rounded-full bg-[#FFF5ED] hover:bg-orange-100 transition-colors group cursor-pointer"
                            >
                                {/* Icon Circle */}
                                <div className="w-16 h-16 rounded-full bg-[#EBCFB8] border border-dashed border-stone-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <img src={service.icon} alt={service.title} className="w-8 h-8 opacity-80" />
                                </div>

                                {/* Text Content */}
                                <div className="text-left">
                                    <h3 className="text-xl font-serif text-stone-800 mb-1">{service.title}</h3>
                                    <p className="text-stone-500 text-xs leading-relaxed max-w-[200px]">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
