import React from "react";
import PropTypes from "prop-types"; 
import "./Item.css";

function Item({ name, rating, price, image, brand }) {
  return (
    <div className="item-card">
      <img src={image} alt={"Item image"} width="100%" />
      <div className="item-brand">{brand}</div>
      <div className="item-name">{name}</div>
      <div className="item-info">
        <div className="item-price">${price}</div>
        <div className="item-rating">{rating}&#9733;</div>
      </div>
    </div>
  );
}


Item.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default Item;
