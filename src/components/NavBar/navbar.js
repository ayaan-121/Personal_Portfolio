import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
   <nav className="navbar">
    <img src={logo} alt="logowogo" className='logo'/>
    <div className="desktopMenu">
     <Link activeClass='factive' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
     <Link activeClass='factive' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
     {/* <Link activeClass='factive' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link> */}
     <Link activeClass='factive' to='projectPage' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
  </div>

    <button className="desktopMenuBtn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'} );
    }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me  </button>



        <img src={menu} alt="logowogo" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
     <Link activeClass='factive' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
     <Link activeClass='factive' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
     {/* <Link activeClass='factive' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link> */}
     <Link activeClass='factive' to='projectPage' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
     <Link activeClass='factive' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
  </div>
   </nav>
  )
}

export default Navbar