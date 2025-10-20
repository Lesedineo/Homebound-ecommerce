import React from "react";
import "./Popular.css";
import data_product from "../Assests/data";
import Item from "../Item/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular In Curtains</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};
export default Popular;
