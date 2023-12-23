import React, { useRef } from 'react';
import './contact.css';
import LinkedinIcon from '../../assets/linkedin.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import YouTubeIcon from '../../assets/youtube.png'
import  InstagramIcon from '../../assets/instagram.png'
// import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';

const Contact=()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_uj8ikot', 'template_gp6bk54', form.current, 'XWkqvIJraaKGb8Ujw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };                
    return(
<section id='contactPage'>
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me </h1>
        <span className="contactDesc">Please fill out the form below to  discuss any work.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name='your_name'/>
            <input type="email" className="email" placeholder="Your Email" name='your_email'/>
            <textarea className="msg" name="message"  rows="5" placeholder="Your Message"></textarea>
            <button type="submit" value='send' className="submitBtn">Submit</button>
            <div className="links">
        <a href="https://www.linkedin.com/in/ayaan-shaikh-807258251">         <img src={LinkedinIcon} alt="lin" className="link" />  </a>  
        <a href="https://instagram.com/a__yaan_121?igshid=OGQ5ZDc2ODk2ZA==">  <img src={InstagramIcon} alt="insta" className="link" />  </a>   
        <a href="https://www.facebook.com/profile.php?id=100014091881847">    <img src={FacebookIcon} alt="twit" className="link" /> </a> 
        <a href="https://www.youtube.com/results?search_query=ayaan+adnaan+duet">    <img src={YouTubeIcon} alt="yt" className="link" /> </a>    
                
            </div>
        </form>
    </div>
</section>


    )
}

export default Contact
