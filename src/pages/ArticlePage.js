import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ArticlePage = () =>{
  //params is an object whose keys are the name of the url parameter eg :articleId in app.js
  //the key is :articleId and the value is the json value from article-content
  const params = useParams();
  const articleId = params.articleId;
    return(
        <div>
          <h1>This is article page with id {articleId}</h1>
        </div>
      );
}

export default ArticlePage;