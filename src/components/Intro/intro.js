import React from 'react'
import './intro.css'
import bg from '../../assets/myimage.png';
// import {Link} from 'react-scroll';
import btnImg from '../../assets/Download.svg';
import backimg from '../../assets/shapes.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
       
        <span className="hello">Hello,</span>

     
        <span className="introText">I'm <span className="introName">Ayaan Shaikh</span> <br />Website Developer</span>
       

       <p className="introPara">I'm a full stack developer looking for a position where my skills <br /> and education can be utilized.</p>
       <a href='ayaan cv.pdf' download="ayaan cv.pdf"><button className="btn"><img src={btnImg} alt=""  className='btnImg'/>Download CV</button></a>
        </div>
        <div className="images">
        <img src={backimg} alt="background" className='shape' />
        <img src={bg} alt="profile" className="bg" />
        </div>
    </section>

  )
}

export default Intro;
