import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className="duv__blog section__padding" id="blog">
      <div className="duv__blog-heading">
        <h1 className="gradient__text">A few of my favorite moments in life so far</h1>
      </div>
      <div className="duv__blog-container">
        <div className="duv__blog-container_groupA">
        <Article imgUrl={ blog01 } date="" title=""/>
        </div>
        <div className="duv__blog-container_groupB">
        <Article imgUrl={ blog02 } date="" title="Birth of my son" info="Easily the best moment ever"/>
        <Article imgUrl={ blog03 } date="" title="Kobe Bryants Last Game" info="Being here at work, it didnt even feel like work. It felt like the end of something I loved"/>
        <Article imgUrl={ blog04 } date="" title="Being in my close friends wedding" info="They are gonna hate me for putting this on my portfolio but this was one of my favorite days ever"/>
        <Article imgUrl={ blog05 } date="" title="" info="Read full article"/>
        </div>
      </div>
    </div>
  )
}

export default Blog