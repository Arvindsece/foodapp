import React from 'react';
import Image from 'next/image'; // ✅ Import Next.js Image component

const GridCard = ({ food }) => {
  const handleAddToCart = () => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    items.push(food);
    localStorage.setItem('cartItems', JSON.stringify(items));
    window.dispatchEvent(new Event('storage'));
    alert(`Added ${food.name} to cart!`);
  };

  return (
    <div className="card-wrapper">
      <div className="gridcard-container">
        {/* ✅ Use Next.js Image instead of <img> */}
        <Image
          src={food.imageURL}
          alt={food.name}
          className="gridcard-image"
          width={300}         // 🔁 Adjust based on your design
          height={200}        // 🔁 Adjust as needed
        />
        <p className="gridcard-name">{food.name}</p>
        <p className="gridcard-categories">{food.categories}</p>
        <p className="gridcard-price">₹{food.price} for two</p>
        <div className="gridcard-bottom">
          <div className="gridcard-rating">{food.rating}* Rating</div>
          <div className="gridcard-duration">{food.deliveryDuration} for delivery</div>
        </div>
        <button className="gridcard-add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GridCard;
