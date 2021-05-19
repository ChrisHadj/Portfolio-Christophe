import React from "react";
import Headers from "../header/Header.component";
import Navbar from "../navbar/Burger/Navbar.component"

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Headers />
      </div>
    );
  }
}

export default Header;
