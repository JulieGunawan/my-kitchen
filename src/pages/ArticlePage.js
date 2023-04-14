import '../App.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () =>{
  //params is an object whose keys are the name of the url parameter eg :articleId in app.js
  //the key is :articleId and the value is the json value from article-content
  const params = useParams();
  const articleId = params.articleId;
  const article = articles.find(article => 
    article.name === articleId
  );
    return(
        <>
          <h1>{article.title}</h1>
          {article.content.map((paragraph,i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </>
      );
}

export default ArticlePage;