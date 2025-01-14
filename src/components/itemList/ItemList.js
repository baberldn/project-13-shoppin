import React from "react";
import PropTypes from "prop-types"; 
import Item from "../item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <Item
            name={item.name}
            rating={item.rating}
            price={item.price}
            saleDiscount={item.saleDiscount}
            image={item.image}
            brand={item.brand}
          />
        </Link>
      ))}
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      saleDiscount: PropTypes.number,
      image: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemList;
