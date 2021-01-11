import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Glide from "@glidejs/glide";
import Image from "next/image";

const Container = styled.div`
  margin-top: 1.95rem; /*31.2px*/
  justify-content: center;
  align-items: center;
`;

const Img = styled(Image)`
  height: 515px;
  justify-content: center;
  filter: brightness(75%);

  @media (min-width: 300px) and (max-width: 375px) {
    height: 485px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    height: 550px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    height: 425px;
    margin-left: 85px;
  }

  @media (min-width: 1281px) {
    height: 615px;
  }
`;

const Title = styled.h1`
  font-family: "Kameron", serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  text-align: center;
  margin-top: -100px;
  position: absolute;
  z-index: 1;

  @media (min-width: 300px) and (max-width: 375px) {
    margin-top: 80px;
    font-size: 2.25rem;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    margin-top: 100px;
    font-size: 2.35rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    margin-top: 85px;
  }
`;

const Text = styled.p`
  font-family: "Courier Prime", monospace;
  font-weight: 800;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  position: absolute;
  z-index: 1;

  & > span {
    font-weight: 800;
  }

  @media (min-width: 300px) and (max-width: 375px) {
    font-size: 1.25rem;
    margin-top: 200px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 1.35rem;
    margin-top: 225px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.65rem;
  }
`;

const StyledButton = styled.button`
  font-family: "Courier Prime", monospace;
  font-size: 1.25rem;
  width: 180px;
  height: 60px;
  font-weight: 800;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 50px;

  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.6);
  text-shadow: none;

  margin-top: 145px;
  justify-content: center;
  position: absolute;

  transition-property: box-shadow, transform;
  transform-origin: center;
  transition-duration: 125ms;
  will-change: box-shadow, transform;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.5);
    transform: scale(1.05) translateY(-4px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
    transform: scale(0.98) translateY(-2px);
  }

  & > a {
    text-decoration: none;
    color: #fff;
  }

  @media (min-width: 300px) and (max-width: 375px) {
    margin-top: -135px;
    margin-left: 9.5%;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    margin-top: -175px;
    margin-left: 10%;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    margin-top: -105px;
    margin-left: 14%;
  }
`;

const Button = () => {
  return (
    <StyledButton>
      <Link href="/brands/">Ver Catálogo</Link>
    </StyledButton>
  );
};

//Main component
const MainCarousel = () => {
  const [img, setImg] = useState(Boolean);

  function resize() {
    if (window.innerWidth < 769) {
      setImg(true);
    } else if (window.innerWidth >= 769) {
      setImg(false);
    }
  }

  function carousel() {
    let glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      breakpoints: {
        800: {
          perView: 2,
        },
      },
      autoplay: 2000,
    });
    glide.mount();
  }

  useEffect(() => {
    resize();
    carousel();
    let glideOne = new Glide(".glide-1", {
      type: "slider",
      startAt: 0,
      autoplay: 3000,
    });
    glideOne.mount();
  }, [img, setImg]);

  window.addEventListener("resize", resize);

  // const data = useStaticQuery(graphql`
  //   query CarruselQuery {
  //     carrusel: allDatoCmsCarrusel {
  //       edges {
  //         node {
  //           id
  //           titulo
  //           descripcion
  //           image {
  //             fluid {
  //               ...GatsbyDatoCmsFluid
  //             }
  //           }
  //           imageMobile {
  //             fluid {
  //               ...GatsbyDatoCmsFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <div className="glide-1">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <Container className="columns is-desktop">
              <Title className="column is-4-mobile is-offset-0-mobile main_title">
                Otro título de prueba
              </Title>
              <Text className="column is-2-desktop is-offset-0-desktop is-2-tablet is-offset-1-tablet is-4-mobile is-offset-0-mobile main_desc">
                Una descripción de prueba
              </Text>
              {img ? (
                <></>
              ) : (
                //   <Image
                //     className="column is-9-desktop is-10-tablet is-10-mobile
                //     is-offset-1-mobile
                // "
                //     fluid={element.imageMobile.fluid}
                //     alt="banner-image"
                //   />
                //     <Image
                //       className="column is-9-desktop is-10-tablet is-10-mobile
                //     is-offset-1-mobile
                // "
                //       fluid={element.image.fluid}
                //       alt="banner-image"
                //     />
                <></>
              )}
              {/* <Button className="column main_button is-10-desktop" /> */}
            </Container>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainCarousel;
