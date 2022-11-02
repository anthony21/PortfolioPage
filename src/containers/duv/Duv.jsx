import React from 'react';
import { Feature } from '../../components';
import './duv.css';

const featureText = 
"I am a family man first and foremost, I spend majority of my time with family, I love explore the great outdoors, and I also love to build software and web applications. My greatest strengths are in the languages I have built projects in, you can find a few of them below. Just keep scrolling!"

const pythonText =
"I adore the simplicity of python and its easy to use language when dealing with data, data structures and algorithms. It is not my first language but definitely my favorite. I built an api which mirrors a social application using fastapi, although there is no front end yet, I do have an api doc to follow along. The project is hosted on heroku and is available as part of this portfolio"

const rubyText = 
"Ruby is a language I picked up while working for a few companies. The MVC part of ruby led me to build an application I have yet to figure out what to do with. It is an app where I may have api access to news weather and sports customized for each user. As of now its a bare shell app where users can create login, and wait to see what features are implemented next!"

const javaScript =
"Javascript is the first language I used as an intern 10 years ago. Although java is my first language ( I am still proficient), javascript introduced me to the love of programming that has never left my side. I am currently upgrading my skills to react which is what this is built upon and node js which I will expand on very soon.  " 
const Duv = () => {
  return (
    <div className="duv__whoDuv section__margin" id="whoDuv">
      <div className="duv__whoDuv-feature">
        <Feature title="Who is Michael Duvenary" text={featureText}/>
      </div>
      <div className="duv__whoDuv-heading">
        <h1 className="gradient__text">
          Software Developer 
        </h1>
        <p>Explore my projects</p>
      </div>
      <div className="duv__whoDuv-container">
        <Feature title="Python" text={pythonText}/>
        <Feature title="Ruby / Ruby On Rails" text={rubyText}/>
        <Feature title="Javascript" text={javaScript}/>
      </div>
    </div>
  )
}

export default Duv