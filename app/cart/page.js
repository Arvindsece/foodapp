"use client";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);
    const handleStorage = () => {
      const updated = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItems(updated);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleRemove = (idx) => {
    const updated = cartItems.filter((_, i) => i !== idx);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="cartpage-container">
      <h1 className="cartpage-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="cartpage-empty">
          <p>No items in cart.</p>
        </div>
      ) : (
        <div className="cartpage-content">
          <div className="cartpage-list">
            {cartItems.map((item, idx) => (
              <div key={idx} className="cartpage-item">
                <img
                  src={item.imageURL}
                  alt={item.name}
                  className="cartpage-item-image"
                />
                <div className="cartpage-item-details">
                  <div className="cartpage-item-name">{item.name}</div>
                  <div className="cartpage-item-categories">{item.categories}</div>
                  <div className="cartpage-item-price">₹{item.price}</div>
                  <div className="cartpage-item-info">
                    <span className="cartpage-item-rating">{item.rating}★</span>
                    <span className="cartpage-item-duration">{item.deliveryDuration} delivery</span>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(idx)}
                  className="cartpage-remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cartpage-summary">
            <div className="cartpage-summary-total">
              Total: ₹{totalPrice}
            </div>
            <button
              className="cartpage-summary-order-btn"
              disabled={cartItems.length === 0}
              onClick={() => alert("Order placed!")}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;