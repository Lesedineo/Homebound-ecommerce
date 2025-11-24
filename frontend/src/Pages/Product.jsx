import React from "react";
import { ShopContext } from "../Context/ShopContext";
import { Breadcrumb } from "../Components/Breadcrumbs/Breadcrumb";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId)) || {};

  if (!product) {
    return;

    <p>loading product...</p>;
  }

  return (
    <div>
      <Breadcrumb product={product} />
    </div>
  );
};

export default Product;
