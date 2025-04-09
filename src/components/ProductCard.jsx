import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ data }) => {
  const [like, setLike] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }
  }, []);
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={data?.image} alt="product-image" />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productTitle}>
          {data?.title?.length > 10
            ? data?.title.slice(0, 20) + "..."
            : data?.title}
        </p>
        {!user ? (
          <>
            <p className={styles.productPrice}>
              {"₹ "}
              {data?.price}
            </p>
          </>
        ) : (
          <p className={styles.productPriceNotLogin}>
            <span>Sign in</span> or Create an account to see pricing
          </p>
        )}
        <div
          onClick={() => setLike((prev) => !prev)}
          className={styles.heartIcon}
        >
          {!like ? <CiHeart /> : <FaHeart />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
