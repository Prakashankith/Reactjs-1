import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Shopping Cart</h1>

      <div className="mt-6">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id} item={item} updateCart={updateCart} />
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
