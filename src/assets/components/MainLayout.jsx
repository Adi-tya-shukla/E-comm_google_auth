import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

const MainLayout = () => {
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar setCategory={setCategory} />
        <div className="flex-1 p-4">
          <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
          <ProductList category={category} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
