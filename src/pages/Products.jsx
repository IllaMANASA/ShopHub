import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/Products/ProductGrid';
const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');  // Get the value of 'search' from the URL

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {searchQuery ? (
        <p>Searching for: <strong>{searchQuery}</strong></p>
      ) : (
        <p>All Products</p>
      )}
      {/* Product list/grid component */}
      <ProductGrid searchQuery={searchQuery} />
    </div>
  );
};

export default Products;
