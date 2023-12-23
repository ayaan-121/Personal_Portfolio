import React from 'react'
import './skills.css'
import skill from '../../assets/Soft-Skills.jpg';
import education from '../../assets/education.png';
import hardskill from '../../assets/Hard-Skills.jpg';


const Skills = () => {
  return (
 <section id="skills">
   <span className="skillTitle">About Me</span>
   <span className="skillDesc">I completed my graduation in 2023 from Pratibha College. 
   I am aware of different coding languages like java, python, c, c++, etc.
    I also completed a full stack java course recently.Now I am a skilled web designer and also proficient in HTML, CSS, Javascript, Ajax, Bootstrap, React.</span>
    <div className="skillBars">
      
    <div className="skillBar">
        <img src={education} alt="education" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Education</h2>
          <p><li>SSC from Dr:A,C,HIGH SCHOOL with 78% </li> 
           <li> HSC from Dr:A,C,HIGH SCHOOL with 62% </li> 
           <li> BBA(CA) from Pratibha College with 82%</li></p>
        </div>
      </div>
      
      <div className="skillBar">
        <img src={skill} alt="skills" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Soft Skills</h2>
          <p> <li>Quick Learner</li>
          <li>Concentrated & Focused</li>
          <li>Excellent Presentation & Communication </li> </p>
        </div>
      </div>

      <div className="skillBar">
        <img src={hardskill} alt="hardskill" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Hard Skills</h2>
          <p><li>Programming languages: JAVA, PYTHON, C, C++, C#</li> 
          <li> Web Designing: HTML, Css, Javascript, React, Bootstrap</li>
           <li>Operating System: Windows, XP </li> 
           </p>
        </div>
      </div>

    </div>
 
 
 </section>
  
  );
}

export default Skills
