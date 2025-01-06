import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Products from './pages/Products'
function App() {
  return (
    <Router future={{ v7_startTransition: true }} >
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App