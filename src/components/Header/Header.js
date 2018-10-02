import React from "react";

const Header = (props) => (
  <div>
    <nav className="nav navbar navbar-lg bg-primary ">
        <div className="float-left">
           <h1>{props.message}</h1>
        </div>
        <div className="float-right">
           <h2>Score:  {props.score}</h2>
           <h2>High Score:  {props.highscore}</h2>
        </div>
      </nav>
  </div>
);

export default Header;
