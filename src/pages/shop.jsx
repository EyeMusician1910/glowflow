import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

// Components
import Social from '../components/social'

// Assets
import facebookIcon from '../assets/facebook.png'
import instaIcon from '../assets/insta.png'
import twitterIcon from '../assets/twitter.png'
import linkedIcon from '../assets/linkedin.png'
import skurlIcon from '../assets/skurl.svg'
import visaIcon from '../assets/viza.svg'
import mastercardIcon from '../assets/mastercard.svg'
import carrotpayIcon from '../assets/carrotpay.svg'
import paymentIcon from '../assets/Payment.svg'

function Shop() {
    const { id } = useParams()
    const navigate = useNavigate()
    const product = products.find(p => p.id === id)
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)

    // Accordion State: 'description' is open by default
    const [openSection, setOpenSection] = useState('description')

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section)
    }

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-serif text-[#4A2C2A]">Product not found</h2>
            </div>
        )
    }

    const similarProducts = products.filter(p => p.id !== product.id).slice(0, 3)

    return (
        <>
            <div className="bg-white pt-20 pb-20">
                <div className="container mx-auto px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">

                        {/* Left: Product Image */}
                        <div className="bg-[#FAF3E0] w-full aspect-square flex items-center justify-center p-12">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain mix-blend-multiply max-w-md mx-auto"
                            />
                        </div>

                        {/* Right: Product Details */}
                        <div className="space-y-8">

                            <div>
                                <div className="text-sm text-stone-500 uppercase tracking-widest mb-2">
                                    {product.category}
                                </div>
                                <h1 className="text-5xl font-['Style_Script'] text-[#4A2C2A] mb-4">{product.name}</h1>

                                {/* Reviews */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex text-amber-400 text-sm">
                                        {[...Array(product.rating)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                    <span className="text-xs text-stone-500">({product.reviews} Reviews)</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-4 text-xl">
                                    <span className="font-bold text-[#4A2C2A]">$ {product.price} USD</span>
                                    {product.oldPrice && (
                                        <span className="text-stone-400 line-through text-lg decoration-stone-400">$ {product.oldPrice} USD</span>
                                    )}
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 w-full"></div>

                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                <div className="flex items-center border border-stone-200">
                                    <span className="text-xs font-bold text-stone-500 px-3 uppercase">Quantity:</span>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                        className="w-16 p-3 text-center focus:outline-none text-stone-700 font-bold"
                                    />
                                </div>

                                <button
                                    onClick={() => addToCart({ ...product, quantity: quantity })}
                                    className="bg-[#5C3A36] text-white px-8 py-3.5 font-bold tracking-widest text-xs hover:bg-[#4A2C2A] transition-colors uppercase w-full sm:w-auto"
                                >
                                    ADD TO CART
                                </button>
                            </div>

                            {/* Meta Data */}
                            <div className="space-y-2 text-xs text-stone-500 bg-[#Fdf2e9]/30 p-4 rounded-sm border border-[#Fdf2e9]">
                                <div className="flex gap-2">
                                    <span className="font-bold text-stone-800 uppercase tracking-wide w-12">SKU:</span>
                                    <span>{product.sku}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-bold text-stone-800 uppercase tracking-wide w-12">Tags:</span>
                                    <span>{product.tags.join(', ')}</span>
                                </div>
                            </div>

                            {/* Share */}
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-stone-800 uppercase">Share this:</span>
                                <div className="flex gap-3">
                                    <a href="#" className="hover:opacity-70 transition-opacity"><img src={facebookIcon} alt="Facebook" className="w-4 h-4 opacity-70" /></a>
                                    <a href="#" className="hover:opacity-70 transition-opacity"><img src={twitterIcon} alt="Twitter" className="w-4 h-4 opacity-70" /></a>
                                    <a href="#" className="hover:opacity-70 transition-opacity"><img src={linkedIcon} alt="LinkedIn" className="w-4 h-4 opacity-70" /></a>
                                    <a href="#" className="hover:opacity-70 transition-opacity"><img src={instaIcon} alt="Instagram" className="w-4 h-4 opacity-70" /></a>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div className="border border-orange-100 p-4 rounded-sm">
                                <p className="text-xs font-bold text-stone-800 mb-3 uppercase">Payment Option</p>
                                <div className="flex gap-3 items-center">
                                    <img src={skurlIcon} alt="Skurl" className="h-6 w-auto" />
                                    <img src={carrotpayIcon} alt="CarrotPay" className="h-6 w-auto" />
                                    <img src={mastercardIcon} alt="Mastercard" className="h-6 w-auto" />
                                    <img src={visaIcon} alt="Visa" className="h-4 w-auto" />
                                    <img src={paymentIcon} alt="Payment" className="h-6 w-auto" />
                                </div>
                            </div>

                            {/* Accordions */}
                            <div className="border-t border-gray-100 mt-8">
                                {/* Description */}
                                <div className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleSection('description')}
                                        className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                                    >
                                        <span className="text-xl font-['Style_Script'] text-[#4A2C2A]">Description</span>
                                        <span className={`text-stone-400 transition-transform ${openSection === 'description' ? 'rotate-180' : ''}`}>
                                            ▼
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openSection === 'description' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-stone-600 text-sm leading-relaxed pb-6 font-light">
                                                    {product.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Ingredients (Static Mock) */}
                                <div className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleSection('ingredients')}
                                        className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                                    >
                                        <span className="text-xl font-['Style_Script'] text-[#4A2C2A]">Ingredients</span>
                                        <span className={`text-stone-400 transition-transform ${openSection === 'ingredients' ? 'rotate-180' : ''}`}>
                                            ▼
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openSection === 'ingredients' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-stone-600 text-sm leading-relaxed pb-6 font-light">
                                                    Aqua, Glycerin, Vitamin C, Hyaluronic Acid, Aloe Vera Extract, Jojoba Oil, Green Tea Extract, Shea Butter.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* How to Use (Static Mock) */}
                                <div className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleSection('howtouse')}
                                        className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                                    >
                                        <span className="text-xl font-['Style_Script'] text-[#4A2C2A]">How to Use</span>
                                        <span className={`text-stone-400 transition-transform ${openSection === 'howtouse' ? 'rotate-180' : ''}`}>
                                            ▼
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openSection === 'howtouse' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-stone-600 text-sm leading-relaxed pb-6 font-light">
                                                    Apply a small amount to clean, dry skin. Massage gently until fully absorbed. Use morning and night for best results.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>
                    </div>

                    <section className="bg-[#5C3A36] py-10 px-8 border-t border-[#4A2C2A] mb-12">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Free Delivery */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
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
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
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
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
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
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
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

                    {/* Similar Products Section */}
                    <div className="py-12 border-t border-gray-100">
                        {/* Header */}
                        <div className="mb-12 text-left">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-stone-500 text-[10px] font-bold tracking-widest uppercase">
                                    BEAUTY
                                </span>
                                <span className="bg-[#EBCFB8] text-[#5C3A36] text-[10px] font-bold tracking-widest px-2 py-1 uppercase">
                                    PRODUCTS
                                </span>
                            </div>
                            <h2 className="text-4xl font-['Style_Script'] text-[#4A2C2A]">
                                Similar Product
                            </h2>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {similarProducts.map((prod, index) => (
                                <motion.div
                                    key={prod.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group cursor-pointer text-center space-y-4"
                                    onClick={() => navigate(`/product/${prod.id}`)}
                                >
                                    {/* Image Card */}
                                    <div className="relative aspect-square overflow-hidden bg-[#Fdf2e9]">
                                        <img
                                            src={prod.image}
                                            alt={prod.name}
                                            className="w-full h-full object-contain mix-blend-multiply p-8 transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Add to Cart Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    addToCart(prod);
                                                }}
                                                className="w-full bg-[#A68A7C] text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#8C7367] transition-colors"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="space-y-2">
                                        {/* Stars */}
                                        <div className="flex justify-center gap-1 text-amber-400 text-xl">
                                            {[...Array(prod.rating)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>

                                        <h3 className="text-xl font-serif text-[#4A2C2A]">{prod.name}</h3>

                                        <div className="text-xs font-medium space-x-2">
                                            <span className="text-stone-900">$ {prod.price} USD</span>
                                            {prod.oldPrice && <span className="text-stone-400 line-through decoration-stone-400">$ {prod.oldPrice} USD</span>}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Social />
        </>
    )
}

export default Shop
