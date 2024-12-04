import React from "react";
import styles from "./styles.module.css";

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles["item"]} ${styles["item-1"]}`}></div>
        <div className={`${styles["item"]} ${styles["item-2"]}`}></div>
        <div className={`${styles["item"]} ${styles["item-3"]}`}></div>
        <div className={`${styles["item"]} ${styles["item-4"]}`}></div>
      </div>
    </div>
  );
};

export default Spinner;
