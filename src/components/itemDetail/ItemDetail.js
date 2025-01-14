import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; 
import "./ItemDetail.css";
import items from "../../mockData/items.json";
import { GlobalContext } from "../../context/GlobalState";

const getItemDetail = (id) => items.find((item) => item.id === id); 

function ItemDetail() {
  const { id } = useParams();
  const itemId = parseInt(id);
  const item = itemId ? getItemDetail(itemId) : null; 
  const { addItemToCartList, cart } = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(
    cart.some((c) => c.id === itemId) 
  );
  const navigate = useNavigate(); 

  useEffect(() => {
    if (itemId) {
      setIsAdded(cart.some((c) => c.id === itemId)); 
    }
  }, [cart, itemId]);

  if (!item) {
    return <div>Ürün bulunamadı!</div>; 
  }

  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Geri</Link>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={`${item.name}`} />
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
            {item.brand}
          </div>
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}</div>

          <select className="item-size">
            <option value="S"> Boyut seçin (S)</option>
            <option value="M"> Boyut seçin (M)</option>
            <option value="L"> Boyut seçin (L)</option>
            <option value="XL"> Beden seçin (XL)</option>
          </select>

          <button
            className="item-btn"
            disabled={isAdded}
            onClick={() => {
              addItemToCartList(item);
              setIsAdded(true);
            }}
          >
            {isAdded ? (
              <button onClick={() => navigate("/cart")}>Sepete Git</button>
            ) : (
              "Sepete Ekle"
            )}
          </button>
          
          <p className="item-description">
            Lorem Ipsum, baskı ve dizgi işlemlerinde kullanılan sahte metindir.
            Lorem Ipsum, sektörün standart sahte metni olmuştur 1500&#39;lü
            yıllardan beri, bilinmeyen bir matbaacının dizgiyi alıp bir tür
            örnek kitabı yapmak için karıştırdı.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
