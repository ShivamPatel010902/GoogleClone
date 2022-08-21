import React from "react";
import { NavLink } from "react-router-dom";
import NavbarforContain from "./Contain/NavbarforContain";
import "./MainNavbar.css";
function MainNavbar() {
  return (
    <>
      <div className="div-1-inmainnavbar">
        <div className="div-4-inmainnavbar">
          <img
            src="https://pngimg.com/uploads/google/google_PNG19641.png"
            alt=""
            style={{ height: "80px", width: "200px" }}
          />
        </div>
      </div>
      <div className="div-3-inmainnavbar">
        <p className="textforinfo" >Please ! First Select your Type which you Wants to Search Then go Further</p>
      </div>
      <div className="div-2-inmainnavbar">
        <NavLink className="navlink-1-inmainnavbar" to="/search">
          <button class="button-17" role="button">
            All
          </button>
        </NavLink>
        <NavLink className="navlink-1-inmainnavbar" to="/image">
          <button class="button-17" role="button">
            Images
          </button>
        </NavLink>
        <NavLink className="navlink-1-inmainnavbar" to="/news">
          <button class="button-17" role="button">
            News
          </button>
        </NavLink>
        <NavLink className="navlink-1-inmainnavbar" to="/video">
          <button class="button-17" role="button">
            Videos
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default MainNavbar;
