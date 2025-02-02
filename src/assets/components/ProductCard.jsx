const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover p-2"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate dark:text-purple-600 ">{product.title}</h3>
        <p className="text-sm text-gray-500 truncate">{product.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold  dark:text-purple-600  ">${product.price}</span>
          <button
            className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
