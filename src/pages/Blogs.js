import '../App.css';
import React from 'react';
import articles from './article-content';
import BlogArticle from '../components/BlogArticle';

const Blogs = () => {
    return (
      <>
        <h1>Welcome to my blogs</h1>
        <p>In this page, I will be discussing 
          about how to be more creative when it comes to food.
          Food is life, thus we need to enjoy it.</p>
        <BlogArticle articles={articles}/>

      </>
    );
}

export default Blogs;
