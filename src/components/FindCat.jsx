import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

function FindCat() {
    const { addToCart } = useCart()
    const navigate = useNavigate()

    // Filter products for this section if needed, or just take first 4
    const displayProducts = products.slice(0, 4)

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-8">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block relative">
                        {/* The background rectangle effect behind the text if needed, 
                 but matching Hero.jsx style: text-amber-700 bg-orange-200 */}
                        <span className="text-amber-900 bg-orange-100 font-bold text-xs tracking-[0.2em] px-3 py-1 uppercase">
                            Pure Beauty Care
                        </span>
                    </div>
                    <h2 className="text-5xl text-stone-900 font-['Style_Script']">
                        Find Your Category
                    </h2>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col group cursor-pointer border border-amber-200"
                        >
                            {/* Image Container */}
                            <div
                                className="w-full h-80 overflow-hidden relative"
                                onClick={() => navigate(`/product/${product.id}`)}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Add to Cart Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart({ ...product });
                                        }}
                                        className="w-full bg-[#A68A7C] text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#8C7367] transition-colors"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center py-6 px-4 space-y-2 bg-white">
                                <p className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">
                                    Limited Time
                                </p>
                                <h3 className="text-2xl font-serif text-stone-800">
                                    {product.name}
                                </h3>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    className="text-[10px] font-bold tracking-widest text-stone-900 uppercase mt-2 border-b-2 border-transparent hover:border-stone-900 transition-colors"
                                >
                                    Shop Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FindCat
