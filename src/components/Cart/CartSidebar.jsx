import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <FiX size={24} />
          </button>
        </div>

        <div className="p-4 h-full overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                          className="p-1 rounded-md hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <FiMinus />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <FiPlus />
                        </button>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="ml-auto text-red-500 hover:text-red-700"
                        >
                          <FiTrash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;