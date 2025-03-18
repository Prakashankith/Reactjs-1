import React from "react";

const CartItem = ({ item, updateItemQuantity, removeItem }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateItemQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item p-4 border-b">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-gray-600">Price: ${item.price}</p>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center border p-1"
            min="1"
          />
          <button
            onClick={() => removeItem(item.id)}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="mt-2">
        Subtotal: ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
