import React from "react";
import "./Header.css"
const Header = (props) => (
    <nav className="nav navbar">
        <h2 className="float-l">{props.message}</h2>
        <div className="float-r">
           <h2>Score:  {props.score}</h2>
           <h2>High Score:  {props.highscore}</h2>
        </div>
      </nav>
);

export default Header;
