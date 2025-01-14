import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

function Cart() {
  const { cart = [] } = useContext(GlobalContext);

  // Sepet verilerinin geçerli olup olmadığını kontrol etme
  if (!Array.isArray(cart)) {
    return <p>Bir hata oluştu, sepet verileri geçerli değil.</p>;
  }


  if (cart.length === 0) {
    return <p>Ürün Eklenmedi. Lütfen sepetinize bir şey ekleyin.</p>;
  }

  return (
    <div className="cart-container">
      <h1>Sepet</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}</div>
            <div className="item-expectedDelivery">
              (Beklenen Teslimat Süresi: 3 - 6 gün)
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-item-count">
          Sepette {cart.length} ürün var
        </div>
        <Link to="/checkout">
          <button className="item-btn">Sonraki</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
