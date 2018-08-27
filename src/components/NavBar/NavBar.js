import React from "react";
import "./NavBar.css";
// import ScoringInfo from "./components/ScoringInfo";


const NavBar = props => (

  <div class="nav">
    <ul>
      <li><p> Clicky Game</p></li>
      
      <li> <p> {props.message}</p></li>
      <li> <p>Current Score: {props.currentScore} || Top Score: {props.topScore}</p></li>
    </ul>

  </div>
);

export default NavBar;
