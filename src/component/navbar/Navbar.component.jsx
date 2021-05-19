import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { PrimaryNav, NavList, NavLi, Icon, IconI } from "./Burger/Navbar.style"
import { selectLinks } from '../../features/navLink/navSlice'
import { useSelector } from 'react-redux'


const Navbar = () => {

  const links = useSelector(selectLinks)
  


  return (
    <PrimaryNav>
      <NavList>
        <NavLi>
          {links && links.map((link, index) => (
            
            <a key={index} href="#">{link}</a>
          ))}
        </NavLi>
      </NavList>
    </PrimaryNav>
    
  );
};

export default Navbar;


const Primary = styled.nav`
  width: 100%;
  justify-content: space-between;
  position: fixed;
  display: flex;
  top: 0;
  z-index: 10;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: white;
`;

const NavLink = styled.ul`
  display: flex;
  font-size: 1.3rem;
  list-style: none;
  width: 45%;
  margin-left: auto;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  @media (max-width: 765px) {
    display: none;
  }
`;

const NavLinkList = styled.li`
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 3px;

  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: white;

    :before {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      transform-origin: bottom right;
      transition: transform 0.4s ease-out;
    }

    :hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
