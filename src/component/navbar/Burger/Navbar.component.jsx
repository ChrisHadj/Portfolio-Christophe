import React, { useState } from "react";
import styled from "styled-components/macro";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectLinks } from "../../../features/navLink/navSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = useSelector(selectLinks);
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <PrimaryNav>
      <NavList>
        {links &&
          links.map((link, index) => (
            <a key={index} href="#">
              {link}
            </a>
          ))}
      </NavList>
      <CustomeMenu onClick={() => setBurgerOpen(true)} />
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CustomeClose onClick={() => setBurgerOpen(false)} />
        </CloseWrapper>
        {links &&
          links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
      </BurgerNav>
    </PrimaryNav>
  );
};

export default Navbar;

const PrimaryNav = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavList = styled.div`
  display: flex;
  font-size: 1.3rem;
  list-style: none;
  width: 45%;
  margin-left: auto;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  @media (max-width: 768px) {
    display: none;
  }

  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: white;
    font-weight: 600;

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
      transition: transform 0.5s ease-out;
    }

    :hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  @media screen and (max-width: 960px) {
  }

  @media (max-width: 765px) {
    display: none;
  }
`;

const NavLi = styled.div`
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 3px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #e7e7e7;
  width: 200px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translate(100%)")};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.329);

    a {
      font-weight: 600;
      color: #000000;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomeClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CustomeMenu = styled(MenuIcon)`
  cursor: pointer;
  color: white;
  display: none !important;

  @media (max-width: 768px) {
    display: flex !important;
    position: absolute;
    top: 0.7em;
    right: 0.7em;
  }
`;
