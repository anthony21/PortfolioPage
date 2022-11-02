import React from 'react';
import './footer.css';
import duvLogo from '../../assets/logo.png';
const Footer = () => {
  return (
    <div className="duv__footer section__padding">
      <div className="duv__footer-heading">
        <h1 className="gradient__text">Step into my world</h1>
      </div>
      <div className="duv__footer-btn">
        <p>Request A Phone Screening</p>
      </div>

      <div className="duv__footer-links">
        <div className="duv__footer-links_logo">
          <img src={duvLogo} alt="logo" />
          <p>Los Angeles California</p>
        </div>
        <div className="duv__footer-links_div">
          <h4>Social Links - Coming Soon</h4>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Github</p>
          
        </div>
        <div className="duv__footer-links_div">
          <h4>Contact information</h4>
          <p>Based in Los Angeles, CA</p>
          <p>m.duvenary@gmail.com</p>
          <p>3234415513</p>
          <p>LinkedIn</p>
        </div>
        <div className="duv__footer-links_div">
          <h4>Main Hobbies</h4>
          <p>Playing Basketball/Staying in shape</p>
          <p>Video games with family</p>
          <p>Painting and Drawing</p>
          <p>Cars, Cars. Fast Cars.</p>
          <p>Traveling, when my budget allows</p>
        </div>
      </div>
      <div className="duv__footer-copyright">
        <p> All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer