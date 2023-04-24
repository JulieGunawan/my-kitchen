import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import articles from './article-content';
import CommentList from '../components/CommentList'
import NotFound from './NotFound';

const ArticlePage = () =>{
  const [articleInfo, setArticleInfo] = useState({upvotes:0, comments:[]}); 
  //if there is a change in upvote, update the data
  useEffect(()=> {
    const loadArticleVote = async() =>{
    const response= await axios.get(`/api/articles/${articleId}`);
    const articleUpvoteCount=response.data;
    //setArticleInfo({upvotes: 3, comments: []},[]);
    setArticleInfo(articleUpvoteCount);
    }
    loadArticleVote();
  }, []);
  //params is an object whose keys are the name of the url parameter eg :articleId in app.js
  //the key is :articleId and the value is the json value from article-content
  const params = useParams();
  const articleId = params.articleId;
  //another way doing above is const {articleId} = useParams();
  const article = articles.find(article => 
    article.name === articleId
  );

  const addVote = async () => {
    const res = await axios.put(`/api/articles/${articleId}/upvote`);
    const updatedArticle = res.data;
    setArticleInfo(updatedArticle);

  }

  if(!article){
    return <NotFound />
  }

    return(
        <>
          <h1>{article.title}</h1>
          {article.content.map((paragraph,i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="upvote"> 
            <button onClick={addVote}>Give a thumbs up</button>
            <p>This article has {articleInfo.upvotes} upvote(s)</p>
          </div>
          <CommentList comments={articleInfo.comments}/>
        </>
      );
}

export default ArticlePage;