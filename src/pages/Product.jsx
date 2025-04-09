import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./Product.module.css";
import ProductCard from "../components/ProductCard";

function Product() {
  const [filterToggle, setFilterToggle] = useState(false);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (category) {
      url = `${url}/category/${category}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [category]);
  return (
    <>
      <div className={styles.discoverProduct}>
        <p className={styles.title}>DISCOVER OUR PRODUCTS</p>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className={styles.itemCountFilter}>
        <div className={styles.itemCountFilterleft}>
          <p className={styles.count}>{data?.length} ITEMS</p>

          <p
            className={styles.filtertoggle}
            onClick={() => setFilterToggle((prev) => !prev)}
          >
            <IoIosArrowBack /> {filterToggle ? "HIDE FILTERS" : "SHOW FILTERS"}
          </p>
        </div>
        <div>
          <select className={styles.recomSelect} name="" id="">
            <option value="recommended">RECOMMENDED</option>
            <option value="new_first">NEW FIRST</option>
            <option value="popular">Popular</option>
            <option value="l2h">PRICE: LOW TO HIGH</option>
            <option value="h2l">PRICE: HIGH TO LOW</option>
          </select>
        </div>
      </div>

      <div className={styles.productNFilterContainer}>
        {/* Product listing Page */}
        {filterToggle && (
          <div className={styles.filterContainer}>
            {/* Filters expandable */}

            <div>
              <input type="checkbox" name="customizable" id="customizable" />
              {" CUSTOMIZABLE"}
            </div>
            <div className={styles.category}>
              {" CATEGORY"}
              <select
                name=""
                id=""
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">ALL</option>
                <option value="jewelery">JWELERY</option>
                <option value="electronics">ELECTRONICS</option>
                <option value="men's clothing">MEN</option>
                <option value="women's clothing">WOMEN</option>
              </select>
            </div>
            <div>{" IDEAL FOR"}</div>
            <div>{" OCCASION"}</div>
            <div>{" WORK"}</div>
            <div>{"FEBRIC"}</div>
            <div>{"SEGMENT"}</div>
            <div>{"SUITABLE"}</div>
            <div>{"RAW MATERIAL"}</div>
            <div>{"RAW MATERIAL"}</div>
            <div>{"RAW MATERIAL"}</div>
            <div>{"PATTERN"}</div>
          </div>
        )}
        <div
          className={
            filterToggle
              ? styles.productListingContainer
              : styles.productListingContainer2
          }
        >
          {data?.map((product) => (
            <ProductCard key={product._id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
