import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

function BestSell() {
    const { addToCart } = useCart()
    const navigate = useNavigate()

    const displayProducts = products.slice(0, 3)

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-stone-500 text-[10px] font-bold tracking-widest uppercase">
                            POPULAR
                        </span>
                        <span className="bg-[#EBCFB8] text-[#5C3A36] text-[10px] font-bold tracking-widest px-2 py-1 uppercase">
                            COSMETICS
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-['Style_Script'] text-[#4A2C2A]">
                        Best Selling Product
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer text-center space-y-4"
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            {/* Image Card */}
                            <div className="relative aspect-square overflow-hidden bg-[#Fdf2e9]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply p-8 transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Add to Cart Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
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
                                    {[...Array(product.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-serif text-[#4A2C2A]">{product.name}</h3>

                                <div className="text-xs font-medium space-x-2">
                                    <span className="text-stone-900">$ {product.price} USD</span>
                                    {product.oldPrice && <span className="text-stone-400 line-through decoration-stone-400">$ {product.oldPrice} USD</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default BestSell
