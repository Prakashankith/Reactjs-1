import React, { useState, useEffect, useMemo } from "react";
import CartItem from "./CartItem";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage on page load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Update cart data in localStorage
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Add item to cart function
  const addItemToCart = (newItem) => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex >= 0) {
      // If item exists, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      updateCart(updatedCart);
    } else {
      // If item does not exist, add it to the cart
      const updatedCart = [...cart, { ...newItem, quantity: 1 }];
      updateCart(updatedCart);
    }
  };

  // Handle removing an item from the cart
  const removeItemFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  // Handle changing the quantity of an item
  const updateItemQuantity = (itemId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    updateCart(updatedCart);
  };

  // Calculate total price
  const calculateTotal = useMemo(() => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Shopping Cart</h1>

      {/* Display cart items */}
      <div className="mt-6">
        {cart.length === 0 ? (
          <p className="text-xl text-center text-gray-500">
            Your cart is empty!
          </p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateCart={updateCart}
              removeItem={removeItemFromCart}
              updateItemQuantity={updateItemQuantity}
              addItemToCart={addItemToCart}
            />
          ))
        )}
      </div>

      {/* Display total price */}
      {cart.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">Total: ${calculateTotal}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
