import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className="duv__possibility section__padding" id="possibility">
      <div className="duv__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="duv__possibility-content">
        <h4>Check out some of the apps I have worked on </h4>
        <h1 className="gradient__text">Link to my other apps below </h1>
        <p>Due to a recent injury and subsequent surgery in 2021, I have been out of work, and my hard drive was corrupted resulting in a loss of many of my development projects.
           I have recently started to put everything on github and I will continue to make use of this to keep from losing out on opportunities to show what I can do
           My plan is to have a project up at least every two weeks since I have fully recovered and I am back on the road to employment. I hope to not only showcase my skillset, 
           but to find a way to build something meaningful for people to enjoy. 
           </p>
        <h4><a href="https://python-api-duvenary.herokuapp.com/docs">Python API</a> </h4>
        <h4><a href="https://portfolio-duv21.herokuapp.com/sign_in">Ruby API project - In development</a> </h4>
        <h4><a href="https://github.com/anthony21/connect-4-python">Python Connect 4 Game </a> </h4>
        <h4><a href="https://thawing-caverns-30338.herokuapp.com">Simple Chartkick implementation using ruby on rails - Still in development</a></h4>
      </div>
    </div>
  )
}

export default Possibility