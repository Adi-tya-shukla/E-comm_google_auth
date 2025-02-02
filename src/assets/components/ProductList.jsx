import { useProduct } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = ({ category, searchQuery }) => {
  const { products } = useProduct();

  const filteredProducts = products.filter((product) =>
    (!category || product.category === category) &&
    (!searchQuery || product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p className="text-center col-span-full">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
