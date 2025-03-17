import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";

// Helper function to fetch products with filters and pagination
const fetchProducts = async ({ queryKey }) => {
  const [_, page, categoryFilter] = queryKey;

  // Construct the URL with category filter
  const url = categoryFilter
    ? `https://fakestoreapi.com/products?limit=10&page=${page}&category=${categoryFilter}`
    : `https://fakestoreapi.com/products?limit=10&page=${page}`;

  const response = await axios.get(url);
  return response.data;
};

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState(""); // Default category is empty (all categories)
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending sort by price

  // React Query hook to fetch products based on filters and pagination
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["products", page, categoryFilter], // Adding categoryFilter to the query key to trigger refetch
    queryFn: fetchProducts, // Function to fetch products
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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Product Listing</h1>

      {/* Category Filter */}
      <div className="mt-4">
        <select
          onChange={handleCategoryChange}
          value={categoryFilter || "All Categories"}
          className="border p-2"
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
      <div className="mt-4">
        <select
          onChange={handleSortChange}
          value={sortOrder}
          className="border p-2"
        >
          <option value="asc">Sort by Price (Low to High)</option>
          <option value="desc">Sort by Price (High to Low)</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {sortedData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
        >
          Previous
        </button>
        <span className="mx-4">{page}</span>
        <button
          onClick={handleNextPage}
          disabled={isFetching}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
        >
          Next
        </button>
      </div>

      {/* Load More Button (Alternative Pagination) */}
      <div className="text-center mt-6">
        <button
          onClick={handleNextPage}
          disabled={isFetching}
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          {isFetching ? "Loading more..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
