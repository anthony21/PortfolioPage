import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Front End Development',
    text: 'HTML and CSS have been a large part of my work experience. Although I have enjoyed this part of my experience, I am more of a problem solving person, I enjoy solving algorithms and using data to make sense of how to solve problems. This is what I work on everyday to become better and more skilled for future roles'
  }, 
  {
    title: "Algorithms and Data Structures",
    text: 'I consider this some of the basics of computer science and engineering, and I spend a great amount of time in preparing myself for theses types of problems whether it be in an interview or on the job. My first language implementation of data structures was JAVA, but since I have moved to python due to its simple implementation. I spend a lot of time preparing for what I feel will come up in a job or interview. Preperation is something I never take for granted because you can never be too prepared for whats to come.'
  }, 
  {
    title: "Back End Development & API's ",
    text: "Building API's has been a large part of my last few positions and I feel I have become good at the part of development that is unseen to the client. I do what I can to upskill and make myself useful due to the ever changing world of engineering. I talk data on a daily basis and I continue to learn no matter where I am in life becuase learning never ends. I am very data, and database friendly in that regard. "
  },
  {
    title: "Learning",
    text: 'I love to learn because it makes me feel young. I get inspiration from my young child who asks me questions about everything, and It always makes me laugh. Not because he does not know, but because it reminds me daily that learning never ends, and no matter how much you know, there is always something else to learn and grow upon, and growth is the only way I know I am moving forward in life. I always want to move forward. s'
  }, 
  {
    title: "Passionate", 
    text: "This is not a skill set, but just something I wanted to convey because I have been involved in technology since 15 and I have never seemed to get bored. Moving from hardware to software was great for me because it gave me a different avenue to pursue problem solving that did not involve repeating the same process every day. There are always differnt problems to solve and my passion has kept me driven enough to want to learn and be better at what I love everyday."
  }

]

const Features = () => {
  return (
    <div className="duv__features section__padding" id="features">
      <div className="duv__features-heading">
        <h1 className="gradient__text">
          Some of my tech skills and soft skills
        </h1>
        <p>I work on my skills daily. Here are some soft skills along with some tech skills I picked up over the years</p>
      </div>
      <div className="duv__features-container">
        { featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features