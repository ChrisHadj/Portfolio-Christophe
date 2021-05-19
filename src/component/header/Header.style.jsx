import styled from "styled-components/macro";
import BackImg from "../../image/background1.jpg";

export const HeaderContainer = styled.div`
  background: url(${BackImg});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  overflow: hidden;

  @media screen and (max-width: 420px) {
    height: 600px;
  }
  @media screeen and (min-height: 900px) {
    height: 900px;
  }
`;

export const HeaderContent = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 62%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  display: flex;

  @media screen and (max-width: 721px) {
    height: 60%;
  }
`;

export const HeaderItems = styled.h1`
  margin-top: -2%;
  font-size: 65px;
  color: white;
  line-height: 50px;

  @media (min-width: 360px) and (max-width: 480px) {
    font-size: 28px;
  }

  @media (max-width: 359px) {
    font-size: 27px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 35px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 50px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 50px;
  } 

  @media (min-width: 1281px) {
    font-size: 65px;
  }
`;

export const HeaderTitle = styled.span`
  margin-top: 40px;
  color: #9afff7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1279px) {
    width: 60%;
  }
  @media screen and (max-width: 1100px) {
    width: 50%;
    font-size: 40px;
    margin-left: 55px;
  }
  @media screen and (max-width: 1000px) {
    width: 65%;
  }
  @media screen and (max-width: 560px) {
    width: 80%;
  }
  @media screen and (max-width: 541px) {
    width: 80%;
    font-size: 29px;
    margin-left: 22px;

  }
  @media screen and (max-width: 414px) {
    width: 40%;
    margin-left: -9px;
  }
  @media screen and (max-width: 388px) {
    width: 40%;
    margin-left: -14px;
  }
  @media screen and (max-width: 376px) {
    width: 50%;
    margin-left: 20px;
    font-size: 21px;
  }
  @media screen and (max-width: 361px) {
    width: 40%;
    margin-left: 1px;
    font-size: 20px;
  }
  @media screen and (max-width: 321px) {
    width: 40%;
    margin-left: -9px;
  }
  @media screen and (max-width: 281px) {
    width: 40%;
    margin-left: -19px;
    font-size: 19px;
  }
  @media screen and (max-width: 263px) {
    font-size: 13px;
    width: 25%;
  }

`;

export const HeaderDeco = styled.span`
  width: 24%;
  height: 2px;
  margin-top: 40px;
  background-color: #9afff7;

  @media screen and (max-width: 721px) {
    width: 20%;
  }
  @media screen and (max-width: 699px) {
    width: 15%;
  }
  @media screen and (max-width: 500px) {
    width: 15%;
  }
  @media screen and (max-width: 399px) {
    width: 17%;
  }
  @media screen and (max-width: 388px) {
    width: 17%;
  }
`;

export const HeaderH = styled.h1`
  width: 50%;
  margin-bottom: 50px;
  font-size: 40px;
  font-family: "Roboto";
  color: #c0e3e7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1279px) {
    width: 60%;
  }
  @media screen and (max-width: 1100px) {
    width: 50%;
    font-size: 30px;
  }
  @media screen and (max-width: 1000px) {
    width: 65%;
  }
  @media screen and (max-width: 560px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 60%;
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    width: 75%;
  }
  @media screen and (max-width: 388px) {
    width: 60%;
  }
`;
