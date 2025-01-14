import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Checkout.css";

const Checkout = () => {
  const { cart, orders, addItemToOrderList, clearCart } = useContext(GlobalContext);
  const safeCart = cart || []; 
   const { discount, extraFees, tax } = { discount: 20, extraFees: 99, tax: 5 };


  const subTotal = Math.floor(safeCart.reduce((sum, curr) => (curr.price ? sum + curr.price : sum), 0)) || 0;
  const total = Math.floor(subTotal + extraFees + tax - (subTotal + extraFees + tax) * (discount / 100)) || 0;

  const [isOrdered, setIsOrdered] = useState(false);
  const handlePay = () => {
    if (!safeCart || safeCart.length === 0) {
      alert("Sepetinizde ürün bulunmamaktadır!");
      return;
    }
    addItemToOrderList({
      orderId: orders.length + 1,
      buyerId: 1,
      items: [...safeCart],
      price: total,
      address: "7.Sokak",
      deliveryDate: "28/12/2023",
      isDelivered: false,
    });

    console.log("Sipariş eklendi");
    clearCart();
    console.log("Sepet temizlendi");
    setIsOrdered(true);
  };

  return (
    <div className="checkout-container">
      {isOrdered ? (
        <h3>
          Tebrikler 🚀 Sipariş başarıyla verildi.{" "}
          <Link to="/">Daha fazla alışveriş yapın</Link>
        </h3>
      ) : (
        <>
          <div>
            <div className="custom-row">
              <h4>Sipariş İncelemesi</h4>
              <span>{safeCart.length || 0} sepetteki ürünler</span>
            </div>
            <div className="custom-row">
              <h4>Kuponlar</h4>
              <span>Mevcut değil</span>
            </div>
            <div className="custom-row">
              <h4>Ödeme Özeti</h4>
              <div className="checkout-summary">
                <span>Ara Toplam</span>
                <span>${subTotal}</span>
              </div>
              <div className="checkout-summary">
                <span>İndirim</span>
                <span>{discount}%</span>
              </div>
              <div className="checkout-summary">
                <span>Ekstra Ücret</span>
                <span>${extraFees}</span>
              </div>
              <div className="checkout-summary">
                <span>Vergi</span>
                <span>${tax}</span>
              </div>
            </div>
            <div className="custom-row">
              <h4>Toplam</h4>
              <span>${total}</span>
            </div>
          </div>
          <button
            className="item-btn"
            onClick={() => {
              console.log("Ödeme işlemi başlatıldı");
              handlePay();
            }}
          >
            ${total} ödeyin
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
