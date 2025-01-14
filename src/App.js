import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import HomePage from "./components/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/item/:id"
            element={
              <Layout>
                <ItemDetail />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/orders"
            element={
              <Layout>
                <Orders />
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <Checkout />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
