import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className="duv__header section__padding" id="home">
      <div className="duv__header-content">
        <h1 className="gradient__text">
          Building Apps, With Style & Grace
        </h1>
        <p> Thank you for visiting my portfolio landing page.
            Please take a look around and check out some of my
            other projects currently in progress. All of my project links work;
            However,other links are disabled by design.  
        </p>
        <div className="duv__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get started</button>
        </div>
        <div className="duv__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access</p>
        </div>
       
      </div>
      <div className="duv__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header