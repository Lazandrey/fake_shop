import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getAllProducts } from "../../pages/api/fetches";
import Spinner from "../Spinner/Spinner";
import Card from "../Card/Card";

const Products = ({ products }) => {
  return (
    <div className={styles.main}>
      {products ? (
        products.map((p) => (
          <Card
            id={p.id}
            key={p.id}
            title={p.title}
            price={p.price}
            category={p.category}
            description={p.description}
            image={p.image}
            rate={p.rating.rate}
            count={p.rating.count}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Products;
