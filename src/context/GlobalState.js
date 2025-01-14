import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addItemToCartList = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const addItemToOrderList = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <GlobalContext.Provider value={{ cart, orders, addItemToCartList, addItemToOrderList, clearCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
