import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import prod1 from '../assets/PROD_1.jpg' // Placeholder for user avatar if needed, or use solid color

const reviews = [
    {
        id: 1,
        name: 'Emily R',
        location: 'NEW YORK, NY',
        rating: 5,
        text: "The spa services are wonderful and really productive. I can really see the difference in my skin tone and texture. Throughout each visit, the staff always pays attention to me and makes sure I'm comfortable.",
        image: 'https://i.pravatar.cc/150?u=1'
    },
    {
        id: 2,
        name: 'Sophia M',
        location: 'LOS ANGELES, CA',
        rating: 5,
        text: "I have never had better-looking skin, and the staff is fantastic. Every time I walk in, I instantly feel at ease and relaxed. All visits are invigorating due to the customized care and attention to detail.",
        image: 'https://i.pravatar.cc/150?u=2'
    },
    {
        id: 3,
        name: 'Isabella G',
        location: 'CHICAGO, IL',
        rating: 5,
        text: "Absolutely love the products! They have transformed my daily routine. My skin feels hydrated and glowing. The customer service is also top-notch, always ready to help with recommendations.",
        image: 'https://i.pravatar.cc/150?u=3'
    },
    {
        id: 4,
        name: 'Olivia D',
        location: 'MIAMI, FL',
        rating: 4,
        text: "Great experience overall. The ambiance is calming, and the treatments are effective. I've noticed a significant reduction in fine lines after just a few sessions. Highly recommend!",
        image: 'https://i.pravatar.cc/150?u=4'
    },
    {
        id: 5,
        name: 'Ava P',
        location: 'AUSTIN, TX',
        rating: 5,
        text: "The best self-care investment I've made. The organic ingredients really make a difference. My sensitive skin has never been happier. I look forward to every appointment!",
        image: 'https://i.pravatar.cc/150?u=5'
    }
]

function Review() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    }

    const visibleReviews = [
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length]
    ]

    return (
        <section className="py-20 bg-[#F9EFE7]"> {/* Peach background */}
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content (Title & Nav) - Spans 4 columns */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-stone-500 text-[10px] font-bold tracking-widest uppercase">
                                CUSTOMER
                            </span>
                            <span className="bg-[#EBCFB8] text-[#5C3A36] text-[10px] font-bold tracking-widest px-2 py-1 uppercase">
                                PRAISE
                            </span>
                        </div>
                        <h2 className="text-5xl font-['Style_Script'] text-[#4A2C2A] leading-tight">
                            Customer Testimonials
                        </h2>
                        <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
                            Verified customer testimonials highlighting our outstanding spa and beauty care services.
                        </p>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={prevReview}
                                className="w-12 h-12 rounded-full bg-[#EBCFB8] hover:bg-[#D4B59D] flex items-center justify-center text-[#4A2C2A] text-xl transition-colors"
                            >
                                ❮
                            </button>
                            <button
                                onClick={nextReview}
                                className="w-12 h-12 rounded-full bg-[#EBCFB8] hover:bg-[#D4B59D] flex items-center justify-center text-[#4A2C2A] text-xl transition-colors"
                            >
                                ❯
                            </button>
                        </div>
                    </div>

                    {/* Right Content (Carousel) - Spans 8 columns */}
                    <div className="lg:col-span-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <AnimatePresence mode="wait">
                                {/* We animate the container or specific cards. 
                                    For simple infinite scroll effect with framer motion without complex index logic, 
                                    changing the key triggers re-render animation. 
                                */}
                                {visibleReviews.map((review) => (
                                    <motion.div
                                        key={review.id} // Changing key is tricky for smooth slide if we just swap data
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white p-14 shadow-sm relative"
                                    >
                                        {/* Quote Icon Background */}
                                        <div className="absolute bottom-4 right-4 text-gray-100 text-9xl font-serif leading-none pointer-events-none select-none -z-0">
                                            ”
                                        </div>

                                        <div className="relative z-10 space-y-6">
                                            {/* Stars */}
                                            <div className="flex gap-1 text-amber-400 text-xl">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <span key={i}>★</span>
                                                ))}
                                            </div>

                                            <p className="text-stone-600 text-base leading-relaxed italic">
                                                "{review.text}"
                                            </p>

                                            {/* User Profile */}
                                            <div className="flex items-center gap-4 pt-2">
                                                <div className="w-12 h-12 overflow-hidden bg-gray-200">
                                                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[#4A2C2A] font-serif text-lg leading-none mb-1">
                                                        {review.name}
                                                    </h4>
                                                    <p className="text-stone-400 text-xs uppercase tracking-widest">
                                                        {review.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Review
