import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHome, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', icon: <FiHome size={20} />, text: 'Home' },
    { to: '/cart', icon: <FiShoppingCart size={20} />, text: 'Cart' },
    { to: '/contact', icon: <FiMail size={20} />, text: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-800">ShopHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                {link.icon}
                <span>{link.text}</span>
                {link.to === '/cart' && cartItems.length > 0 && (
                  <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.text}</span>
                  {link.to === '/cart' && cartItems.length > 0 && (
                    <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;