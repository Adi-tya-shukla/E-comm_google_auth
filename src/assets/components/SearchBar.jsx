import { useState, useEffect } from "react";

const SearchBar = ({ searchQuery, onSearch }) => {
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300); 

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <div className="relative w-full mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="Search products..."
        aria-label="Search products"
      />
    </div>
  );
};

export default SearchBar;
