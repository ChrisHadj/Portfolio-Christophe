import React from "react";
import Fade from "react-reveal/Fade";
import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderTitle,
  HeaderDeco,
  HeaderH,
} from "./Header.style";

const Headers = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Fade bottom>
          <HeaderItems>Christophe Hadjigeorgiou</HeaderItems>
        </Fade>
        <HeaderH>
          <HeaderDeco />
          <HeaderTitle>Front-End Developer</HeaderTitle>
          <HeaderDeco />
        </HeaderH>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Headers;
