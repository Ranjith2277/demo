import React from 'react';
import pizza from './pizza1.jpeg';
import cheese from './pizza2.jpeg';
import burger from './pizza4.jpeg';
import './Home.css'

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Food Paradise</h1>
        <p>Delicious food, quick delivery, and great prices!</p>
      </div>

      {/* Search Bar */}
      <div className="searchbar">
        <input placeholder="Search for your favorite food..." />
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          At Food Paradise, we provide freshly made pizzas, burgers, and cheesy delights that are
          sure to satisfy your cravings. Our ingredients are sourced from the best farms, ensuring
          the highest quality and taste.
        </p>
      </div>

      {/* Products Section */}
      <div className="products">

        <div className="box">
          <img src={pizza} alt="Pizza" />
          <h3>Pizza</h3>
          <p>Try our delicious pizza with fresh ingredients.</p>
          <p className="price">$10.99</p>
          <p className="rating">⭐⭐⭐⭐⭐</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        <div className="box">
          <img src={cheese} alt="Cheese Pizza" />
          <h3>Cheese Pizza</h3>
          <p>A cheesy delight for cheese lovers.</p>
          <p className="price">$12.99</p>
          <p className="rating">⭐⭐⭐⭐⭐</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        <div className="box">
          <img src={burger} alt="Burger" />
          <h3>Chicken Pizza</h3>
          <p>Juicy burger with a variety of toppings.</p>
          <p className="price">$9.99</p>
          <p className="rating">⭐⭐⭐⭐</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="special-offers">
        <h2>Special Offers</h2>
        <p>Get 20% off on your first order with the code: WELCOME20</p>
      </div>

      
    </div>
  );
}

export default Home;
