import React from "react";
import { Hero } from "../Components/Hero/Hero";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        src={props.banner}
        alt={props.category}
        className="category-banner"
      />
      <div className="shopcategory-indexsort">
        <p>
          <span>SHOWING 1-12</span> OUT of 36 PRODUCTS
        </p>
        <div className="shopcategory-sort">
          SORT BY <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className="shopcategory-products">
          {all_products &&
            all_products.map((item, i) => {
              if (props.category === item.category) {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    newPrice={item.new_price}
                    oldPrice={item.old_price}
                  />
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
