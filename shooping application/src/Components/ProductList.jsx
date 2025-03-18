import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";

// Helper function to fetch products with filters and pagination
const fetchProducts = async ({ queryKey }) => {
  const [_, page, categoryFilter] = queryKey;

  const url = categoryFilter
    ? `https://fakestoreapi.com/products?limit=0&page=${page}&category=${categoryFilter}`
    : `https://fakestoreapi.com/products?limit=0&page=${page}`;

  const response = await axios.get(url);
  return response.data;
};

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState(""); // Default category is empty (all categories)
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending sort by price
  const [cart, setCart] = useState([]); // Cart state to manage added items

  // React Query hook to fetch products based on filters and pagination
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["products", page, categoryFilter], // Adding categoryFilter to the query key to trigger refetch
    queryFn: fetchProducts,
    keepPreviousData: true, // Keep previous data while new data is loading
  });

  // Categories to choose from
  const categories = [
    "All Categories",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  // Sort function (client-side)
  const sortProducts = (products) => {
    if (sortOrder === "rating") {
      return products.sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating
    } else if (sortOrder === "asc") {
      return products.sort((a, b) => a.price - b.price); // Sort by price (Low to High)
    } else if (sortOrder === "desc") {
      return products.sort((a, b) => b.price - a.price); // Sort by price (High to Low)
    }
    return products;
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(
      event.target.value === "All Categories" ? "" : event.target.value
    );
    setPage(1); // Reset to page 1 when category changes
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    setPage(1); // Reset to page 1 when sorting order changes
  };

  // Handle pagination (next page)
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Handle pagination (previous page)
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const addToCart = (product) => {
    // Check if product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, increase the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Filtered and sorted products
  const filteredData = data || [];
  const sortedData = sortProducts(filteredData);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Product Listing
      </h1>

      {/* Category Filter */}
      <div className="mt-4 text-center">
        <select
          onChange={handleCategoryChange}
          value={categoryFilter || "All Categories"}
          className="border border-gray-300 p-3 rounded-lg shadow-md w-full sm:w-auto"
        >
          {categories.map((category, index) => (
            <option
              key={index}
              value={category === "All Categories" ? "" : category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Sort by Price or Rating */}
      <div className="mt-4 text-center">
        <select
          onChange={handleSortChange}
          value={sortOrder}
          className="border border-gray-300 p-3 rounded-lg shadow-md w-full sm:w-auto"
        >
          <option value="asc">Sort by Price (Low to High)</option>
          <option value="desc">Sort by Price (High to Low)</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {sortedData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="bg-blue-600 text-white px-5 py-3 rounded-md mx-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-4 text-lg font-semibold text-gray-800">{page}</span>
        <button
          onClick={handleNextPage}
          disabled={isFetching}
          className="bg-blue-600 text-white px-5 py-3 rounded-md mx-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleNextPage}
          disabled={isFetching}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md disabled:opacity-50"
        >
          {isFetching ? "Loading more..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
