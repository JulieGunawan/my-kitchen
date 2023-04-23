import React from "react";
import { Link } from 'react-router-dom';

const BlogArticle = ({articles}) => {
    return(
        <>
        {articles.map(article => (
            <Link key={article.name} className="blogs-item" to={`/blogs/${article.name}`}>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
          ))}
        </>
    )
};

export default BlogArticle;