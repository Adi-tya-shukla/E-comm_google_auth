import { useProduct } from "../Context/ProductContext";
import { Link } from "react-router-dom";

const Sidebar = ({ setCategory }) => {
  const { products, categories } = useProduct();
  return (
    <aside className="w-64 bg-gray-100 dark:bg-slate-600 p-4 h-full">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        <li>
          <button
            className="w-full text-left p-2 hover:bg-gray-200"
            onClick={() => setCategory("")}
          >
            All Products
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              className="w-full text-left p-2 hover:bg-gray-200"
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
