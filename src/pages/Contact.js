import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Contact = () => {
    return(
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
          <h1>Did you find any other food that's interesting?</h1>
          <h2>Hello fellow food lovers, you can contact me below
            if you'd like to do food testing together:</h2>
          <p>Email: foodtester@someemail.com</p>
          <p>phone:+1-234-567-8900</p>
        </div>
      );
}

export default Contact;
