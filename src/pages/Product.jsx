import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./Product.module.css";
import ProductCard from "../components/ProductCard";

function Product() {
  const [filterToggle, setFilterToggle] = useState(false);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (category === "all") {
      url = "https://fakestoreapi.com/products";
    } else {
      url = `${url}/category/${category}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [category]);

  const handlecategory = (cat) => {
    setCategory(cat);
  };
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
          <p
            className={styles.filtertoggleMobile}
            onClick={() => setFilterToggle((prev) => !prev)}
          >
            FILTERS
          </p>
        </div>
        <div>
          <select className={styles.recomSelect} name="" id="recommended">
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

              {category && (
                <>
                  <div
                    className={
                      category === "all" ? styles.selected : styles.unselected
                    }
                    onClick={() => handlecategory("all")}
                  >
                    ALL
                  </div>
                  <div
                    className={
                      category === "jewelery"
                        ? styles.selected
                        : styles.unselected
                    }
                    onClick={() => handlecategory("jewelery")}
                  >
                    JWELERY
                  </div>
                  <div
                    className={
                      category === "electronics"
                        ? styles.selected
                        : styles.unselected
                    }
                    onClick={() => handlecategory("electronics")}
                  >
                    ELECTRONICS
                  </div>
                  <div
                    className={
                      category === "men's clothing"
                        ? styles.selected
                        : styles.unselected
                    }
                    onClick={() => handlecategory("men's clothing")}
                  >
                    MEN
                  </div>
                  <div
                    className={
                      category === null || category === "women's clothing"
                        ? styles.selected
                        : styles.unselected
                    }
                    onClick={() => handlecategory("women's clothing")}
                  >
                    WOMEN
                  </div>
                </>
              )}
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
