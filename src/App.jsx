import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Info from './components/Hero'
import FindCat from './components/FindCat'
import Aboutus from './components/Aboutus'
import ShopCategory from './components/ShopCategory'
import Services from './components/Services'
import ProductsOnSale from './components/ProductsOnSale'
import Newsletter from './components/Newsletter'
import BestSell from './components/BestSell'
import Review from './components/review'
import LatestNews from './components/LatestNews'
import Social from './components/social'
import Footer from './components/footer'
import { CartProvider } from './context/CartContext'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/cart'
import Shop from './pages/shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <Cart />
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Info />
            <FindCat />
            <Aboutus />
            <ShopCategory />
            <Services />
            <ProductsOnSale />
            <Newsletter />
            <BestSell />
            <Review />
            <LatestNews />
            <Social />
          </>
        } />
        <Route path="/product/:id" element={<Shop />} />
      </Routes>

      <Footer />
    </CartProvider>
  )
}

export default App
