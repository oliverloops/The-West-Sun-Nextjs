import styled from "styled-components";

// Layout
import Metadata from "../components/Metadata";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import video from "../video/shoes_video.mp4";

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
        style={{
          marginTop: "2rem",
          justifyContent: "center",
        }}
      >
        {/* <source src={video} type="video/mp4" /> */}
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
          Nuestros Procesos de Creación
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
        <Video />
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
          src={"../images/ss_1.png"}
          alt="tutorial"
        />
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <Metadata />
      <Navbar />
      <View />
      <Footer />
    </>
  );
};

export default About;
