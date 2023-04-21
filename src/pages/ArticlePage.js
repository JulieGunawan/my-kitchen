import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import articles from './article-content';
import NotFound from './NotFound';

const ArticlePage = () =>{
  const [articleInfo, setArticleInfo] = useState({upvotes:0, comments:[]}); 
  
  //if there is a change in upvote, update the data
  useEffect(()=> {
    const loadArticle = async() =>{
    const response= await axios.get(`http://localhost:8000/api/articles/${articleId}`);
    const articleUpvoteCount=response.data;
    //setArticleInfo({upvotes: 3, comments: []},[]);
    setArticleInfo(articleUpvoteCount);}
    loadArticle();
  });
  //params is an object whose keys are the name of the url parameter eg :articleId in app.js
  //the key is :articleId and the value is the json value from article-content
  const params = useParams();
  const articleId = params.articleId;
  //another way doing above is const {articleId} = useParams();
  const article = articles.find(article => 
    article.name === articleId
  );

  if(!article){
    return <NotFound />
  }

    return(
        <>
          <h1>{article.title}</h1>
          <p>This article has {articleInfo.upvotes} upvote(s)</p>
          {article.content.map((paragraph,i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </>
      );
}

export default ArticlePage;