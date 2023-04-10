import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Blogs = () => {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <ul>
          <li>Mix and Match</li>
          <li>Desserts</li>
        </ul>
      </div>
    );
}
