import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file for styling

function HomePage() {
  // Sample data for clothing items with images and prices
  const clothingItems = [
    {
      id: 1,
      name: 'Summer Dress 1',
      price: '$49.9999',
      image: './images/dress1.jpeg',
    },
    {
      id: 2,
      name: 'Elegant Dress 2',
      price: '$69.99',
      image: '/dress2.jpeg',
    },
    {
      id: 3,
      name: 'Casual Dress 3',
      price: '$39.99',
      image: '/dress3.jpeg',
    },
    // Add more clothing items as needed
  ];

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to the Girly Closet</h1>
      </header>
      <main className="clothing-grid">
        {clothingItems.map((item) => (
          <div className="clothing-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </main>
      <section className="login-section">
        <Link to="/login" className="login-button">Login</Link>
      </section>
    </div>
  );
}

export default HomePage;
