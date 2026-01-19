import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import featuredImage from '../assets/LatestCollection.jpg'

function ProductsOnSale() {
    const { addToCart } = useCart()
    const navigate = useNavigate()

    // Filter or select products to show. Let's take the first 4 for now to match detail
    const displayProducts = products.slice(0, 4)

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-8">
                {/* Use items-stretch to make both columns equal height, creating the 'big image' effect */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* Left Featured Section - Full Height */}
                    <div className="relative w-full h-full min-h-[500px] group overflow-hidden">
                        <img
                            src={featuredImage}
                            alt="Latest Collection"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Centered Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-12">
                            {/* New Arrivals Badge Split */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-white text-[10px] font-bold tracking-widest uppercase shadow-sm">
                                    NEW
                                </span>
                                <span className="bg-[#5C3A36] text-white text-[10px] font-bold tracking-widest px-2 py-1 uppercase shadow-sm">
                                    ARRIVALS
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-['Style_Script'] mb-8 leading-tight drop-shadow-md">
                                Latest <br />
                                Collection
                            </h2>
                            <button
                                onClick={() => navigate('/product/latest-collection')}
                                className="bg-[#F3DBC8] text-stone-900 px-10 py-4 font-bold tracking-widest text-xs hover:bg-white transition-colors uppercase shadow-md flex items-center gap-2 group"
                            >
                                Shop Now <span className="text-stone-700 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                        {displayProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group cursor-pointer text-center space-y-3"
                                onClick={() => navigate(`/product/${product.id}`)}
                            >
                                <div className="relative aspect-[4/5] bg-[#F9EFE7] overflow-hidden mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
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

                                {/* Rating Stars */}
                                <div className="flex justify-center gap-1 text-amber-400 text-xl">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>

                                <span className="text-stone-500 text-xs uppercase tracking-wider block">
                                    {product.category}
                                </span>

                                <h3 className="text-xl font-serif text-stone-800">
                                    {product.name}
                                </h3>

                                <div className="text-xs font-medium space-x-2">
                                    <span className="text-stone-900">$ {product.price} USD</span>
                                    {product.oldPrice && <span className="text-stone-400 line-through decoration-stone-400">$ {product.oldPrice} USD</span>}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductsOnSale
