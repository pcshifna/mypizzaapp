import React from 'react';
import Banner from "../Assets/nn.jpg";
import "../Styles/home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'
    style={{ backgroundImage: `url(${Banner})` }}>
      <div className='headerContainer'>
      <h1>Pedro's Pizzeria </h1>
      <p>PIZZA IS FIT TO AN TASTE</p>
      <Link to ="/menu">
        <button>ORDER NOW</button>
      </Link>
    </div>
    </div>
    
  )
}

export default Home
