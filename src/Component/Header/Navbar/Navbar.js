import React from "react";
import NavBarItem from "./NavBarItem/NavBarItem";
import TitleNav from "./TitileNav/TitleNav";
import "./NavBar.css";
// danh sach cac navbaritems
const navbarItems = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

function Navbar() {
  return (
    <div >
      <nav className="px-5 ">
        <div className="">
         <TitleNav/>
          <div className="">
            <ul className="d-flex justify-content-start">
              {/* //liet ke cac item va truyen vao nabar item */}
              {navbarItems.map((item, index) => (
                <NavBarItem item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
