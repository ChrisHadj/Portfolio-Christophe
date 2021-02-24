import styled from "styled-components";

export const Primary = styled.div`
  width: 100%;
  justify-content: space-between;
  position: fixed;
  display: flex;
  top: 0;
  z-index: 10;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

export const NavLink = styled.ul`
  display: flex;
  font-size: 1.6rem;
  list-style: none;
  width: 60%;
  margin-left: auto;
  justify-content: space-around;
  align-items: center;
  height: 75px;
`;

export const NavLinkList = styled.li`
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
