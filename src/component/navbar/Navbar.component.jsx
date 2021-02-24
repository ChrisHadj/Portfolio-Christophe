import React from "react";
import { Primary, NavLink, NavLinkList } from "./Navbar.style";

const Navbar = () => {
  return (
    <Primary>
      <NavLink>
        
          <NavLinkList><a href="/">Home page</a></NavLinkList>
          <NavLinkList><a href="/">About me</a></NavLinkList>
          <NavLinkList><a href="/">Portfolio</a></NavLinkList>
          <NavLinkList><a href="/">Skills</a></NavLinkList>
          <NavLinkList><a href="/">Contact</a></NavLinkList>
        
      </NavLink>
    </Primary>
  );
};

export default Navbar;
