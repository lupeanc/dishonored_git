import { NavLink } from "react-router-dom";
// import heroImg from "../assets/hero.png";
import mock_pfp from "/mock_pfp.png";
import "./Navbar.css";
// import { motion } from "motion/react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="main-div-navbar">
          <NavLink to="/" className="navbar-button">
            Home
          </NavLink>

          <NavLink to="/chapters" className="navbar-button">
            Chapters
          </NavLink>

          <NavLink to="/character-index" className="navbar-button">
            Character Index
          </NavLink>
          <div className="dropdown-more">
            <div className="navbar-button-more">More</div>
            <div className="dropdown-more-content">
              <NavLink to="/sketches" className="dropdown-more-navlink">
                Sketches
              </NavLink>
              <NavLink to="/sillies" className="dropdown-more-navlink">
                Sillies
              </NavLink>
              <NavLink to="/polls" className="dropdown-more-navlink">
                Polls
              </NavLink>
              <NavLink to="/about" className="dropdown-more-navlink">
                About
              </NavLink>
            </div>
          </div>

          <NavLink to="/profile">
            <img src={mock_pfp} className="profile-icon"></img>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
