import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import facebookIcon from '../assets/facebook.png'
import instaIcon from '../assets/insta.png'
import twitterIcon from '../assets/twitter.png'
import linkedIcon from '../assets/linkedin.png'
import helpcenterIcon from '../assets/helpcenter.png'
import logo from '../assets/logo.svg'
import cartIcon from '../assets/cart.svg'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { toggleCart, cartCount } = useCart()

  const socialLinks = [
    { name: 'facebook', url: 'https://facebook.com', icon: facebookIcon },
    { name: 'instagram', url: 'https://instagram.com', icon: instaIcon },
    { name: 'twitter', url: 'https://twitter.com', icon: twitterIcon },
    { name: 'linkedin', url: 'https://linkedin.com', icon: linkedIcon }
  ]

  const [bannerIndex, setBannerIndex] = useState(0)

  const bannerTexts = [
    'Transform your skincare routine today',
    'Healthy skin, happy you',
    'Glow with our products, now 20% off!'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev === bannerTexts.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [bannerTexts.length])

  const handlePrevBanner = () => {
    setBannerIndex((prev) => (prev === 0 ? bannerTexts.length - 1 : prev - 1))
  }

  const handleNextBanner = () => {
    setBannerIndex((prev) => (prev === bannerTexts.length - 1 ? 0 : prev + 1))
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Social Bar */}
      <div className="bg-[#FAF3E0] border-b border-orange-200/50 px-4 md:px-8 py-3 flex justify-between items-center text-xs">
        <div className="hidden sm:flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title={link.name}
            >
              <img src={link.icon} alt={link.name} className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Banner with Carousel */}
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-1 max-w-md mx-auto">
          <button
            onClick={handlePrevBanner}
            className="text-gray-800 hover:text-amber-700 transition-colors font-bold text-xl flex-shrink-0"
          >
            ❮
          </button>
          <div className="overflow-hidden flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={bannerIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center text-xs md:text-sm font-medium text-gray-800 whitespace-nowrap py-1"
              >
                {bannerTexts[bannerIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={handleNextBanner}
            className="text-gray-800 hover:text-amber-700 transition-colors font-bold text-xl flex-shrink-0"
          >
            ❯
          </button>
        </div>

        <a href="/help-center" className="hidden sm:flex items-center gap-2 text-gray-800 font-medium hover:text-amber-700 transition-colors">
          <img src={helpcenterIcon} alt="Help Center" className="w-4.5 h-4.5" />
          <span>Help Center</span>
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 lg:py-6 flex justify-between items-center relative z-50">

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden text-2xl text-stone-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Logo */}
        <div className="logo relative left-0 md:left-auto">
          <img src={logo} alt="GlowFlow Logo" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#home" className="font-medium text-sm text-gray-900 border-b-2 border-amber-700 pb-1">HOME</a>
          <a href="#about" className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors">ABOUT US</a>
          <div className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors cursor-pointer flex items-center gap-2">
            PAGES
            <span className="text-xs">▼</span>
          </div>
          <a href="#shop" className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors">SHOP</a>
          <a href="#contact" className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors">CONTACT US</a>
        </div>

        {/* Icons / Right Side */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="relative cursor-pointer" onClick={() => toggleCart(true)}>
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
            <span className="absolute -top-2 -right-3 bg-amber-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{cartCount}</span>
          </div>
          <button className="hidden lg:flex bg-amber-900 text-white font-semibold px-6 py-2 hover:bg-amber-800 transition-colors rounded-sm items-center gap-2 group">
            BOOK NOW <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              <a href="#home" className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors" onClick={() => setIsMenuOpen(false)}>HOME</a>
              <a href="#about" className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
              <div className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors cursor-pointer flex items-center justify-center gap-2">
                PAGES
                <span className="text-xs">▼</span>
              </div>
              <a href="#shop" className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors" onClick={() => setIsMenuOpen(false)}>SHOP</a>
              <a href="#contact" className="font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors" onClick={() => setIsMenuOpen(false)}>CONTACT US</a>

              <div className="h-px bg-gray-100 w-full my-2"></div>

              <button className="bg-amber-900 text-white font-semibold px-6 py-3 hover:bg-amber-800 transition-colors rounded-sm w-full">
                BOOK NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
