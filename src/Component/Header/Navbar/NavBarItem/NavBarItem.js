import React from "react";
import "./NavBarItem.css"
//cac item navbar
const NavBarItem = (props) => {
  const link="#";
  return (
    <li className={`text-white d-flex justify-content-start align-items-center px-3 item ${props.item.active ? "active":""}`}>
      <i className={`fa-solid ${props.item.icon} mx-2`}></i>
      <a className={`nav-link  text-white`} href={link}>{props.item.type}</a>
    </li>
  );
};

export default NavBarItem;
