import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Assets/logopizza.png";
import "../Styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLink, setOpenLink] = useState(false);
  const toggleNavbar = () => {
    setOpenLink(!openLink);

    if (setOpenLink === "open") {
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
      </ul>;
    }
  };
  return (
    <div className="navbar">
      <div className="leftside" id={openLink ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenlinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightside" id={openLink ? "open" : "close"}>
        <div className="bar">
          <Link to="/">Home</Link>
          <NavLink to="/menu" className={({isActive})=>isActive&&'active'}>Menu</NavLink>
          <NavLink to="/about"  className={({isActive})=>isActive&&'active'}>About</NavLink>
          <Link to="/contact">Contact</Link>
        </div>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
