import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";

const SearchBar = ({ products, setFilteredProducts }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();

    setSearchInput(e.target.value.toLowerCase());
    if (searchInput.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput)
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  };
  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
