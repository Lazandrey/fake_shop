import React from "react";
import styles from "./styles.module.css";

const Header = ({ categories, products, setFilteredProducts }) => {
  const firstCapitalLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  const categoryOnClick = (category) => () => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredProducts);
    }
  };
  return (
    <div className={styles.main}>
      <ul>
        <li onClick={categoryOnClick("All")}>All</li>
        {categories.map((category) => (
          <li key={category} onClick={categoryOnClick(category)}>
            {firstCapitalLetter(category)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
