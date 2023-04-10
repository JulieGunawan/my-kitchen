import './App.css';
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';


export function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='navigation'>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
        <div className='page-body'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;