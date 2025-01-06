import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from '../components/Home/Hero';
import ProductGrid from '../components/Products/ProductGrid';
import { fetchProducts } from '../store/productSlice';  // import the fetchProducts action

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());  // dispatch the action to fetch products
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Home;
