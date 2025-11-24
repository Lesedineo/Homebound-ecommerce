import React from "react";
import "./Breadcrumb.css";

export const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div
      className="breadcrumb
    "
    >
      HOME <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      {product.category || "loading..."}{" "}
      <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      {product?.name || ""}
    </div>
  );
};
export default Breadcrumb;
