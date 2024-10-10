import React from 'react';
import './Footer.css'; // Import the CSS
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Pizza Hut</h4>
          <p>At Pizza Hut, we serve the best pizzas crafted with fresh ingredients and love.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@pizzahut.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://www.facebook.com/pizzahutindia" className="social-icon"><FacebookIcon /></a>
            <a href="https://twitter.com/PizzaHutIN" className="social-icon"><TwitterIcon /></a>
            <a href="https://www.instagram.com/pizzahut_india/" className="social-icon"><InstagramIcon /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pizza Hut. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
