import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const Card = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rate,
  count,
}) => {
  const shortDecsription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 5).join(" ") + "...";
  };

  return (
    <div className={styles.main}>
      <p>Category: {category}</p>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.productImage}
          src={image}
          alt={title}
          width={200}
          height={200}
        />
      </div>
      <h4>{title}</h4>
      <p>
        Price:
        {new Intl.NumberFormat("lt-LT", {
          style: "currency",
          currency: "EUR",
        }).format(price)}
      </p>

      <p>Rating: {rate}</p>
      <p>Count: {count}</p>
      <p>{shortDecsription(description)}</p>
    </div>
  );
};

export default Card;
