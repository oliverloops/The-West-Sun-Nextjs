import React from "react";
import styled from "styled-components";

//Styles
import "../styles/main.scss";
// Layout
import Metadata from "../components/Metadata.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Image = styled.img`
  height: 22rem;

  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 1rem;
    height: 18rem;
  }
`;

const View = () => {
  return (
    <>
      <div className="columns">
        <h1
          className="column"
          style={{
            textAlign: "center",
            color: "#8e2d22",
            fontFamily: "Kameron, serif",
            fontWeight: "bold",
            fontSize: "1.85rem",
            marginTop: "8rem",
          }}
        >
          Cómo Comprar
        </h1>
      </div>
      <div className="columns">
        <h3
          className="column is-10-desktop is-offset-1-desktop
            is-10-tablet is-offset-1-tablet
          "
          style={{
            textAlign: "center",
            color: "rgb(42, 72, 137)",
            fontFamily: "Kameron, serif",
            fontWeight: "bold",
            fontSize: "1.15rem",
            marginTop: "1.65rem",
          }}
        >
          * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          purus vitae eros dictum facilisis ut nec mi Nam.
        </h3>
      </div>
      <div className="columns">
        <Image
          className="column is-half-desktop is-offset-one-quarter-desktop
            is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile
          "
          src={require("../images/ss_1.png")}
          alt="tutorial"
        />
      </div>
      <div className="columns">
        <h3
          className="column is-10-desktop is-offset-1-desktop
            is-10-tablet is-offset-1-tablet
          "
          style={{
            textAlign: "center",
            color: "rgb(42, 72, 137)",
            fontFamily: "Kameron, serif",
            fontWeight: "bold",
            fontSize: "1.15rem",
            marginTop: "1.65rem",
          }}
        >
          * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          purus vitae eros dictum facilisis ut nec mi Nam.
        </h3>
      </div>
      <div className="columns">
        <Image
          className="column is-half-desktop is-offset-one-quarter-desktop
            is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile
          "
          src={require("../images/ss_2.png")}
          alt="tutorial"
        />
      </div>
      <div className="columns">
        <h3
          className="column is-10-desktop is-offset-1-desktop
            is-10-tablet is-offset-1-tablet
          "
          style={{
            textAlign: "center",
            color: "rgb(42, 72, 137)",
            fontFamily: "Kameron, serif",
            fontWeight: "bold",
            fontSize: "1.15rem",
            marginTop: "1.65rem",
          }}
        >
          * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          purus vitae eros dictum facilisis ut nec mi Nam.
        </h3>
      </div>
      <div className="columns">
        <Image
          className="column is-half-desktop is-offset-one-quarter-desktop
            is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile
          "
          src={require("../images/ss_3.png")}
          alt="tutorial"
        />
      </div>
      <div className="columns">
        <h3
          className="column is-10-desktop is-offset-1-desktop
            is-10-tablet is-offset-1-tablet
          "
          style={{
            textAlign: "center",
            color: "rgb(42, 72, 137)",
            fontFamily: "Kameron, serif",
            fontWeight: "bold",
            fontSize: "1.15rem",
            marginTop: "1.65rem",
          }}
        >
          * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          purus vitae eros dictum facilisis ut nec mi Nam.
        </h3>
      </div>
      <div className="columns">
        <Image
          className="column is-half-desktop is-offset-one-quarter-desktop
            is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile
          "
          src={require("../images/ss_4.png")}
          alt="tutorial"
        />
      </div>
    </>
  );
};

const Howto = () => {
  return (
    // <Provider store={store}>
    <>
      <Metadata />
      <Navbar />
      <View />
      <Footer />
    </>
    // </Provider>
  );
};

export default Howto;
