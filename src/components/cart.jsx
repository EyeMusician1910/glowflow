import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, isCartOpen, toggleCart, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => toggleCart(false)}
                        className="fixed inset-0 bg-black/50 z-40"
                    />

                    {/* Cart Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-[60] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-3xl font-['Style_Script'] text-[#4A2C2A]">Your Cart</h2>
                            <button
                                onClick={() => toggleCart(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="text-center text-gray-500 mt-10">
                                    <p>Your cart is empty.</p>
                                    <button
                                        onClick={() => toggleCart(false)}
                                        className="mt-4 text-[#4A2C2A] underline underline-offset-4 hover:text-amber-800"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        {/* Product Image */}
                                        <div className="w-20 h-24 bg-[#FAF3E0] flex-shrink-0 flex items-center justify-center">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-20 object-contain mix-blend-multiply"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-bold text-gray-900">{item.name}</h3>
                                                <p className="text-gray-500 text-sm mt-1">$ {item.price} USD</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-xs text-red-500 hover:text-red-700 underline self-start transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>

                                        {/* Quantity Input */}
                                        <div>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className="w-12 p-2 border border-gray-200 text-center text-sm focus:outline-none focus:border-[#4A2C2A]"
                                            />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-bold text-lg text-gray-900">$ {cartTotal.toFixed(2)} USD</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-4 text-center">
                                    Shipping, taxes, and discounts calculated at checkout.
                                </p>
                                <button className="w-full bg-[#5C3A36] text-white py-4 font-bold tracking-widest text-xs uppercase hover:bg-[#4A2C2A] transition-colors shadow-md">
                                    CONTINUE TO CHECKOUT
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Cart;
