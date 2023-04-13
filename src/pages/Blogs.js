import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import articles from './article-content';

const Blogs = () => {
    return (
      <>
        <h1>Welcome to my blogs</h1>
        <p>In this page, I will be discussing 
          about how to be more creative when it comes to food.
          Food is life, thus we need to enjoy it.</p>
        {articles.map(article => (
          <div>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}</p>
          </div>
        ))}

      </>
    );
}

export default Blogs;
