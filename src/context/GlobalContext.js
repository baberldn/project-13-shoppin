import React, { createContext, useState } from "react"; 
import PropTypes from "prop-types"; 
export const GlobalContext = createContext(); 


export const GlobalProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); 

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]); 
  };

  return (
    <GlobalContext.Provider value={{ orders, addOrder }}>
      {children}
    </GlobalContext.Provider>
  );
};


GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
