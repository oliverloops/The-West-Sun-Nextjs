import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
//Redux
import store from "../store";
import { Provider } from "react-redux";
//Styles
import "../styles/main.scss";
// Components
import Metadata from "../components/Metadata.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Container = styled.div`
  margin-top: 10%;
`;

const Element = styled.figure`
  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Image = styled(Img)`
  height: 205px;

  @media (min-width: 300px) and (max-width: 768px) {
    height: 190px;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    height: 180px;
  }
`;

const Caption = styled.figcaption`
  font-family: "Kameron", serif;
  font-weight: 600;
  font-size: 1rem;
  color: #000;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 0.85rem;
  }
`;

const Price = styled(Caption)`
  color: rgb(142, 45, 34);
  font-weight: 800;
  font-size: 1.1rem;
`;

const StyledButton = styled.button`
  font-family: "Courier Prime", monospace;
  font-size: 1rem;
  width: 120px;
  height: 40px;
  font-weight: 700;
  color: #fff;
  background-color: rgb(43, 71, 137);
  border: none;
  border-radius: 50px;

  box-shadow: 0 0.4rem 2.5rem rgba(0, 0, 0, 0.5);
  text-shadow: none;

  justify-content: center;
  margin-left: -0.5rem;

  transition-property: box-shadow, transform;
  transform-origin: center;
  transition-duration: 125ms;
  will-change: box-shadow, transform;
  outline: none;

  &:hover {
    box-shadow: 0 0.7rem 3rem rgba(0, 0, 0, 0.5);
    transform: scale(1.05) translateY(-3px);
  }

  &:active {
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.4);
    transform: scale(0.98) translateY(-2px);
  }

  @media (min-width: 300px) and (max-width: 768px) {
    width: 135px;
    height: 50px;
    font-size: 1.05rem;
    margin-top: 0.5rem;
    margin-left: -1rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 0.85rem;
    width: 90px;
    height: 30px;
    box-shadow: 0 0.3rem 2.5rem rgba(0, 0, 0, 0.5);
    margin-left: -0.8rem;

    &:hover {
      box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.5);
      transform: scale(1.05) translateY(-4px);
    }

    &:active {
      box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.4);
      transform: scale(0.98) translateY(-2px);
    }
  }
`;

const Button = () => <StyledButton>Ver Producto</StyledButton>;

const Product = () => {
  const data = useStaticQuery(graphql`
    query {
      productos: allDatoCmsProductoCaballero {
        edges {
          node {
            id
            slug
            title
            price
            image {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Container className="my-flex">
      {data.productos.edges.map(({ node: product }) => (
        <Element
          key={product.id}
          className="item column is-3-widescreen is-3-desktop is-3-tablet is-10-mobile is-offset-1-mobile"
        >
          <Image fluid={product.image.fluid} alt="producto" />
          <div className="product-meta-info">
            <div className="columns is-desktop is-tablet is-mobile">
              <span className="column is-7-widescreen is-6-desktop is-7-tablet is-7-mobile">
                <Caption>{product.title}</Caption>
                <Price>$ {product.price} MXN.</Price>
              </span>
              <span className="column">
                <Link to={`/store-men/${product.slug}`}>
                  <Button />
                </Link>
              </span>
            </div>
          </div>
        </Element>
      ))}
    </Container>
  );
};

const Store = () => (
  <div
    className="columns"
    css={`
      @media (min-width: 250px) and (max-width: 768px) {
        margin-top: 10%;
      }
    `}
  >
    <div className="column is-12-desktop is-offset-1-desktop">
      <Product />
    </div>
  </div>
);

// Main Component
const MenStore = () => (
  <Provider store={store}>
    <Metadata />
    <Navbar />
    <Store />
    <Footer />
  </Provider>
);

export default MenStore;
