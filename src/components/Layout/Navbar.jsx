import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHome, FiMail, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import CartSidebar from '../Cart/CartSidebar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">ShopHub</span>
            </Link>

            {/* Search Bar */}
            {/* <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <FiSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div> */}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link">
                <FiHome size={20} />
                <span>Home</span>
              </Link>
              <button onClick={toggleCart} className="nav-link relative">
                <FiShoppingCart size={20} />
                <span>Cart</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <Link to="/contact" className="nav-link">
                <FiMail size={20} />
                <span>Contact</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                /> */}
                <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
                  <FiHome size={20} />
                  <span>Home</span>
                </Link>
                <button onClick={() => { toggleCart(); toggleMenu(); }} className="mobile-nav-link w-full">
                  <FiShoppingCart size={20} />
                  <span>Cart ({cartItems.length})</span>
                </button>
                <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>
                  <FiMail size={20} />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};

export default Navbar;