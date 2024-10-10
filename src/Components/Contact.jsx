import React from 'react';


const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Pizza Hut</h1>
      <p>Have a question or want to give us feedback? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>

      <div className="contact-form">
        <div className="form">
          <label>Name</label>
          <input type="text" id="name"  placeholder="Enter your name" required />
        </div>

        <div className="form">
          <label>Email</label>
          <input type="email" id="email"  placeholder="Enter your email" required />
        </div>

        <div className="form">
          <label >Message</label>
          <textarea id="text"  rows="5" placeholder="Write your message" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </div>

      <div className="contact-details">
        <h3>Our Location</h3>
        <p>123 Pizza Street, Food City, FL 12345</p>
        <h3>Call Us</h3>
        <p>+1 (800) 123-4567</p>
        <h3>Email</h3>
        <p>support@pizzahut.com</p>
      </div>
    </div>
  );
};

export default Contact;
