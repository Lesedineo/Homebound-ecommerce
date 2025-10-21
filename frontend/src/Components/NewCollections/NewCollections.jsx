import React from "react";
import "./NewCollections.css";
import new_collection from "../Assests/new_collections";
import Item from "../Item/Item";

export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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
      </div>{" "}
    </div>
  );
};

export default NewCollections;
