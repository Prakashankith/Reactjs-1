const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">${product.price}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
