import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav1.css";
import queststart from "../images/Newphotos/strtq.png";
function Navbar() {
  return (
    <div className="navbar1">
      <div className="">
        <NavLink to="/MyQuest" className="logo">
          <h1> WINTERFUEL</h1>
        </NavLink>
      </div>
      <div className="mid">
      <li>
          <Link to="" className="navbar">
About us           </Link>
        </li>
      <li>
          <Link to="/login" className="navbar">
            Set Up Quest
          </Link>
        </li>
        <li>
          <Link to="/MyQuest" className="navbar">
          Start Questing
                    </Link>
        </li>
      </div>
      <div className="nav2">
        
         
        <NavLink>
          <Link to="/MyQuest">
            <div className="imgbtn">

          <img src={queststart} alt="" />
            </div>
          </Link>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
