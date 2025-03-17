import React from "react";

const CartItem = ({ item, updateCart }) => {
  const { id, title, price, quantity } = item;

  const handleQuantityChange = (e) => {
    const updatedQuantity = parseInt(e.target.value, 10);
    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedItem = updatedCart.find((product) => product.id === id);
    updatedItem.quantity = updatedQuantity;
    updateCart(updatedCart);
  };

  const handleRemove = () => {
    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const filteredCart = updatedCart.filter((product) => product.id !== id);
    updateCart(filteredCart);
  };

  return (
    <div className="border p-4 mt-4 rounded-lg flex items-center">
      <img
        src={item.image}
        alt={title}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="ml-4 flex-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-lg text-gray-500">Price: ${price}</p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          className="border p-2 mt-2 w-20"
        />
      </div>
      <div className="ml-4">
        <button
          onClick={handleRemove}
          className="bg-red-500 text-white p-2 rounded-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
