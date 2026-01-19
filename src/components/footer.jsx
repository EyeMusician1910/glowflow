import React from 'react'
import logo from '../assets/Logo.svg'
import fbIcon from '../assets/facebook.png'
import instaIcon from '../assets/insta.png'
import twitterIcon from '../assets/twitter.png'
import linkedinIcon from '../assets/linkedin.png'
import skurl from '../assets/skurl.svg'
import payment from '../assets/Payment.svg'
import mastercard from '../assets/mastercard.svg'
import visa from '../assets/viza.svg'
import carrot from '../assets/carrotpay.svg' // Assuming this is the 5th icon

function Footer() {
    return (
        <footer className="bg-[#292F36] text-white"> {/* Dark background based on image */}

            {/* Top Contact Bar */}
            <div className="border-b border-gray-700">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm font-medium tracking-wide">
                        <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-gray-700 py-2 md:py-0">
                            +33 40 7433 8442
                        </div>
                        <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-gray-700 py-2 md:py-0">
                            info@glowflow.com
                        </div>
                        <div className="flex-1 text-center py-2 md:py-0">
                            Main Street, London UK
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Logo & Info */}
                    <div className="space-y-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            {/* Use logo svg or text if svg is white. Assuming svg might be black text, need to check. 
                                 If svg is black, might need a filter or just use text for now matching reference font.
                                 Ref image shows white text logo with icon.
                             */}
                            <img src={logo} alt="GlowFlow" className="h-8 brightness-0 invert" />
                            <span className="text-2xl font-serif"></span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover Beauty's Ultimate Care and Wellness.
                        </p>

                        <div className="space-y-2">
                            <h4 className="text-lg font-serif">Open Hours</h4>
                            <p className="text-gray-400 text-sm">
                                Sunday to Friday - 08:00 - 20:00
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-2">
                            {[instaIcon, fbIcon, twitterIcon, linkedinIcon].map((icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <img src={icon} alt="Social" className="w-4 h-4 invert" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Pages */}
                    <div>
                        <h4 className="text-xl font-serif mb-6">Pages</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Utility */}
                    <div>
                        <h4 className="text-xl font-serif mb-6">Utility</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Style Guide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Protected</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Not Found</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-xl font-serif mb-6">Beauty Updates</h4>
                        <p className="text-gray-400 text-sm mb-6">
                            Stay informed: Join our newsletter today!
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent border border-gray-600 p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#EBCFB8]"
                            />
                            <button className="bg-white text-[#292F36] px-6 py-4 text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-gray-100 transition-colors group">
                                <span className="group-hover:translate-x-1 transition-transform">→</span> GET STARTED
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 bg-[#242930]">
                <div className="container mx-auto px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-xs">
                            Copyright © <span className="text-[#EBCFB8]">GlowFlow</span> | Designed by <span className="text-[#EBCFB8]">VictorFlow</span> - Powered by <span className="text-[#EBCFB8]">Webflow</span>.
                        </p>

                        <div className="flex gap-2">
                            {[skurl, payment, mastercard, visa, carrot].map((img, i) => (
                                <div key={i} className="bg-white p-1 rounded-sm w-10 h-6 flex items-center justify-center">
                                    <img src={img} alt="Payment Method" className="max-h-full max-w-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
