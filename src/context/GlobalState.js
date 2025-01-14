import React, { createContext, useState } from "react";
import PropTypes from "prop-types"; 


export const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ürün ekleme 
  const addItemToCartList = (item) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCart((prevCart) => [...prevCart, item]); //değeri alıp güncelleme
    }
  };

  return (
    <GlobalContext.Provider value={{ cart, addItemToCartList }}>
      {children}
    </GlobalContext.Provider>
  );
};


GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
