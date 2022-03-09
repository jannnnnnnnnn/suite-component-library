import React from "react";
import './Header.css'

export interface HeaderProps {
  label: string;
}

const Header = (props: HeaderProps) => {
  return <div className="header">{props.label}</div>;
};

export default Header;