import React from 'react'
import './project.css';
import screenshot from '../../assets/prjss.png'
import git from '../../assets/github.svg'
import livedemo from '../../assets/live.png'

function Project() {
  return (
    <section id='projectPage'>
    <div className="projectTitle">Project</div>
    <div className="bar">
      <img src={screenshot} alt="ss" className='ssimg' />
      <div className="project_desc">
        <h2>cult fitness</h2>
        <p>This website is a clone of cult fitness which is developed by me using html, css, javascript.
         <br /> And i am still working on it to make it more better.
        </p>
     <a href="https://github.com/ayaan-121/Project-1"> <button className="prjbtn"><img src={git} alt="sos" className='btnImg'/>Visit GitHub </button>  </a>  
     <a href="https://main.d3w4y0c7pqhzgh.amplifyapp.com/#"> <button className="prjbtn2"><img src={livedemo} alt="sos" className='btnImg'/>Live Demo </button>  </a>
      </div>
    </div>
    </section>
  )
}

export default Project
