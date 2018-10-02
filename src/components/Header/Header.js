import React from "react";

const Header = ({children}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-s">
    <a className="navbar-brand" href="/">
     {children}
    </a>
  </nav>
);

export default Header;
