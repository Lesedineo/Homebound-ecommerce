import React from "react";
import { Hero } from "../Components/Hero/Hero";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return <div className="shop-category"></div>;
};

export default ShopCategory;
