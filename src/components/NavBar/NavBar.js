import React from "react";
import "./Navbar.css";
// import "ScoringInfo" from "./ScoringInfo";


const NavBar = props => (

  <div class="nav">
    <ul>
      <li><p> Clicky Game</p></li>
      <li> <p> {props.messageStatus}</p></li>
      <li> <p>Current Score: {props.currentScore} || Top Score: {props.topScore}</p></li>
    </ul>

  </div>
);

export default NavBar;
