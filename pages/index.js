import React from "react";
import Products from "../componensts/Products/Products";
import Header from "../componensts/Header/Header";
import SearchBar from "../componensts/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getAllProducts, getAllCategories } from "../pages/api/fetches";

const MainPage = () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
    getAllCategories().then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  return (
    <div>
      <Header
        categories={categories}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <Products products={filteredProducts} />
    </div>
  );
};

export default MainPage;
