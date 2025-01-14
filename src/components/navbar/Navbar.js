import React, { useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState"; 
import "./Navbar.css";


const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

const Navbar = () => {
  const [selectedCategory, dispatch] = useReducer(filterReducer, "");
  const { cart } = useContext(GlobalContext);

  const handleFilter = (category) => {
    dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h2>LikeMuClothes</h2>
      </Link>
      <ul className="navbar-ul">
        <li>
          <Link to="/category/women" onClick={() => handleFilter("Kadın")}>
            Kadın
          </Link>
        </li>
        <li>
          <Link to="/category/men" onClick={() => handleFilter("Erkek")}>
            Erkek
          </Link>
        </li>
        <li>
          <Link to="/category/clothing" onClick={() => handleFilter("Giyim")}>
            Giyim
          </Link>
        </li>
        <li>
          <Link to="/category/brands" onClick={() => handleFilter("Markalar")}>
            Markalar
          </Link>
        </li>
        <li>
          <Link to="/cart">
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length}) 
            </span>
          </Link>
        </li>
        <li>
          <Link to="/orders">Siparişler</Link>
        </li>
        <button className="nav-btn">Merhaba, Namık</button>
      </ul>
      <p>Seçilen Kategori: {selectedCategory}</p>
    </div>
  );
};

export default Navbar;
