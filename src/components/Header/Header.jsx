import React from "react";
import './Header.css'
import logo2 from "../../assets/logo2.png";

const Header = () => {
  return (
    <header className='header'>
      <div className="image">

        <img src={logo2} className='logo'/>
      </div>
    
    </header>
  )
  
};

export default Header;
