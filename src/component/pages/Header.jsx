import React from "react";
import Headers from "../header/Header.component";
import Navbar from "../navbar/Navbar.component";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Headers />
        <Navbar />
      </div>
    );
  }
}

export default Header;