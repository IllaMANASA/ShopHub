// import React from 'react';

// const Hero = () => {
//   return (
//     <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 h-[500px] mb-12">
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
//           alt="Shopping"
//           className="w-full h-full object-cover opacity-20"
//         />
//       </div>
//       <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
//         <div className="text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Collections 2025
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl">
//             Discover the latest trends and exclusive deals on our premium products.
//           </p>
//           <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useRef } from 'react';
import ProductGrid from '../Products/ProductGrid';

const Hero = () => {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 h-[500px] mb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Shopping"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Collections 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover the latest trends and exclusive deals on our premium products.
            </p>
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95"
              onClick={scrollToProducts}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div ref={productsRef} className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        {/* Product items here */}
        <ProductGrid />
      </div>
    </>
  );
};

export default Hero;
