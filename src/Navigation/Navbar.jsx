import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <nav>
          <h2>PIZZA HUT</h2>
          <ul>
            <li><Link to="/">Home</Link> | </li>
            <li><Link to="/Cart">Cart</Link> | </li>
            <li><Link to="/Contact">Contact</Link> | </li>
            <li><Link to="/About-Us">About Us</Link> | </li>
            <li><Link to="/Todolist">Todolist</Link></li>
          </ul>
        </nav>
      </div>                    
    </div>
  );
};

export default Navbar;
