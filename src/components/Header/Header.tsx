import React from "react";
import './Header.css'
import logoImg from '../../../assets/logo.svg' 

export interface HeaderProps {
  
}

const logoImg2 = document.body.appendChild( logoImg )


const Header = () => {
  return <div className="header"><div className="logo"><img src={logoImg}></img><span>nextech</span>
  Metaverse Suite</div></div>;
};

export default Header;