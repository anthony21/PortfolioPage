import React from 'react';
import './cta.css';
const Github = "http://github.com/anthony21"
const Cta = () => {
  return (
    <div className="duv__cta">
      <div className="duv__cta-content">
        <p>Github</p>
        <h3>Github hosts a few of my completed projects.</h3>
      </div>
      <div className="duv__cta-btn">
        <button type="button"><a href={Github} >Github</a></button>
      </div>
    </div>
  )
}

export default Cta