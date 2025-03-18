import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    // Call the function to add the product to the cart
    addToCart(product);
    console.log(product);
  };

  // Log product image to check its value
  // console.log("Product Image URL: ", product.image);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex flex-col h-full">
      <div className="relative">
        {/* Check if the image exists and is a valid URL */}
        <img
          src={product.image || "/placeholder.jpg"}
          alt={product.title || "Product Image"}
          className="w-full h-56 object-cover mb-4 rounded-t-lg"
          loading="lazy"
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black opacity-40 rounded-t-lg"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {product.title || "Product Title"}
        </h3>
        <p className="text-gray-500 text-sm">
          {product.description || "No description available"}
        </p>
      </div>
      <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
        <span className="text-xl font-bold text-blue-600">
          ${product.price || "0.00"}
        </span>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
