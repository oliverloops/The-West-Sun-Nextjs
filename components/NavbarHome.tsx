import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";

//Styles
import "../styles/main.scss";

const Bar = styled.div`
  background-image: linear-gradient(
    rgb(142, 45, 34) 10%,
    rgb(255, 255, 255) 70%
  );
  width: 100%;
  height: 20px;
  margin-top: 96px;

  @media (min-width: 300px) and (max-width: 365px) {
    margin-top: 80px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    margin-top: 86px;
    height: 20px;
  }
`;

const NavbarHome = () => {
  return (
    // <Provider store={store}>
    <>
      <Navbar />
      <Bar />
    </>
    // </Provider>
  );
};

export default NavbarHome;
