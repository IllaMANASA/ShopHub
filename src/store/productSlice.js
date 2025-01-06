import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated product data
const dummyProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 5000,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1990,
    description: "Feature-rich smartwatch with health tracking",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 1999,
    description: "Durable laptop backpack with multiple compartments",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 999,
    description: "Ergonomic wireless mouse for comfortable use",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
  },
  {
    id: 5,
    name: "Face Serum ",
    price: 999,
    description: "Face serum and day cream from Haoma, an organic skin care line of products surrounded by clear quartz and black tourmaline crystals.",
    image: "https://images.unsplash.com/photo-1599022509786-23794c1b68c2?w=500"
  },
  {
    id: 6,
    name: "Curology Cleanser",
    price: 799,
    description: "Cleanser suitable for all skin types",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500"
  },
  {
    id: 7,
    name: "COCO MADEMOISELLE",
    price: 1299,
    description: "Ergonomic wireless mouse for comfortable use",
    image: "https://images.unsplash.com/photo-1701291927826-c7775869d822?w=500"
  },
  {
    id: 8,
    name: "Apple iphone 15 Pro Max",
    price: 59999,
    description: "iphone 15 Pro Max",
    image: "https://images.unsplash.com/photo-1709528922467-bf691573bbc7?w=500"
  },
  {
    id: 9,
    name: "Apple iphone 15 Pro Max",
    price: 59999,
    description: "iphone 15 Pro Max",
    image: "https://images.unsplash.com/photo-1709528922467-bf691573bbc7?w=500"
  },
  {
    id: 10,
    name: "Apple MacBook Pro",
    price: 59999,
    description: "Laptop MacBook Apple",
    image: "https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?w=500"
  },
  {
    id: 11,
    name: "JBL Speaker",
    price: 59999,
    description: "A High quality speaker by JBL",
    image: "https://images.unsplash.com/photo-1610560661462-f381a11970a0?w=500"
  },
  {
    id: 12,
    name: "Apple Airpods",
    price: 59999,
    description: "A High quality Airpods by Apple Company",
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=500"
  },
  {
    id: 13,
    name: "LAKME SUN EXPERT:",
    price: 599,
    description: "The magic of sun protection like never before with Lakme Sun Expert.",
    image: "https://images.unsplash.com/photo-1698912198250-fb0c5ecccc6e?w=500"
  },

  {
    id: 14,
    name: "Face Serum ",
    price: 499,
    description: "Face serum and day cream from Haoma, an organic skin care line of products surrounded by clear quartz and black tourmaline crystals.",
    image: "https://images.unsplash.com/photo-1599022509786-23794c1b68c2?w=500"
  },
  {
    id: 15,
    name: "Pharmaceris Face Toner",
    price: 699,
    description: "Ergonomic wireless mouse for comfortable use",
    image: "https://images.unsplash.com/photo-1618479944734-26f9dbd4948d?w=500"
  },
  {
    id: 16,
    name: "Face Serum ",
    price: 999,
    description: "Face serum and day cream from Haoma, an organic skin care line of products surrounded by clear quartz and black tourmaline crystals.",
    image: "https://images.unsplash.com/photo-1599022509786-23794c1b68c2?w=500"
  },





];

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyProducts);
      }, 1000);
    });
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;