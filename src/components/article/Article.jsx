import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title, info}) => {
  return (
    <div className="duv__blog-container_article">
      <div className="duv__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="duv__blog-container_article-content">
        <div>
        <p>{date}</p>
        <h3>{title}</h3>
        </div>
        <p>{info} </p>
      </div>
    </div>
  )
}

export default Article