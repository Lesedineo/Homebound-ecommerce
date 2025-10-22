import React from "react";

import all_products from "../Components/Assests/all_products";
export const ShopContext = React.createContext();

export const ShopContextProvider = (props) => {
  const contextValue = { all_products };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
