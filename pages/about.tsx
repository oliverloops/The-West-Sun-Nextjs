import React from "react";
import styled from "styled-components";
//Redux
import store from "../store";
import { Provider } from "react-redux";
//Styles
import "../styles/main.scss";
// Layout
import Metadata from "../components/Metadata.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import video from "../video/shoes_video.mp4";

const Image = styled.img`
  height: 22rem;

  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 1rem;
    height: 18rem;
  }
`;

const Video = () => {
  return (
    <>
      <video
        id="my-video"
        className="video-js vjs-theme-fantasy column is-half-desktop 
        is-offset-one-quarter-desktop is-8-tablet is-offset-2-tablet 
        is-10-mobile is-offset-1-mobile"
        controls
        muted
        preload="auto"
        width="550"
        height="300"
        data-setup="{}"
        css={`
          margin-top: 2rem;
          justify-content: center;
        `}
      >
        <source src={video} type="video/mp4" />
        <p className="vjs-no-js">
          Por favor habilite JavaScript en su navegador para visualizar este
          video.
        </p>
      </video>
    </>
  );
};

const View = () => {
  return (
    <React.Fragment>
      <div className="columns">
        <h1
          className="column"
          css={`
            text-align: center;
            color: #8e2d22;
            font-family: "Kameron", serif;
            font-weight: 800;
            font-size: 1.85rem;
            margin-top: 8rem;
          `}
        >
          Nuestros Procesos de Creación
        </h1>
      </div>
      <div className="columns">
        <h3
          className="column is-10-desktop is-offset-1-desktop
            is-10-tablet is-offset-1-tablet
          "
          css={`
            text-align: center;
            color: rgb(42, 72, 137);
            font-family: "Kameron", serif;
            font-weight: 800;
            font-size: 1.15rem;
            margin-top: 1.65rem;
          `}
        >
          * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          purus vitae eros dictum facilisis ut nec mi Nam.
        </h3>
      </div>
      <div className="columns">
        <Video />
      </div>
      <div className="columns">
        <h3
          className="column is-10-desktop is-offset-1-desktop
            is-10-tablet is-offset-1-tablet
          "
          css={`
            text-align: center;
            color: rgb(42, 72, 137);
            font-family: "Kameron", serif;
            font-weight: 800;
            font-size: 1.15rem;
            margin-top: 1.65rem;
          `}
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
    </React.Fragment>
  );
};

const About = () => {
  return (
    <Provider store={store}>
      <Metadata />
      <Navbar />
      <View />
      <Footer />
    </Provider>
  );
};

export default About;
