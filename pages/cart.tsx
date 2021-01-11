import React, { useState } from "react";
import styled from "styled-components";

//Styles
import "../styles/main.scss";
// Components
import Metadata from "../components/Metadata.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

//Begin of new relocated styles
const H1 = styled.h1`
  @media (min-width: 300px) and (max-width: 768px) {
    textalign: center;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    fontsize: 2.15rem;
  }
`;

const ListContainer = styled.div`
  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const AnImage = styled.img`
  @media (min-width: 300px) and (max-width: 768px) {
    height: 10rem;
    width: 15.65rem;
  }
`;

const Paragraph = styled.p`
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.65rem;
  }
`;

const AnotherDiv2 = styled.div`
  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const AnImage2 = styled.img`
  @media (min-width: 300px) and (max-width: 768px) {
    height: 10rem;
    width: 15.65rem;
  }
`;

const Paragraph2 = styled.p`
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.65rem;
  }
`;

const AnotherH1 = styled.h1`
  @media (min-width: 300px) and (max-width: 768px) {
    text-align: center;
    margin-top: 5rem;
    font-size: 1.75rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.25rem;
  }
`;

const AnSpan = styled.span`
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const AnSpan2 = styled.span`
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const ALastDiv = styled.div`
  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

//End of new relocated styles

const Container = styled.hr`
  background-color: rgba(127, 127, 127, 0.6);
  height: 1px;
  width: 82%;
  display: flex;
  margin-left: 8%;
`;

const Label = styled.label`
  color: rgb(142, 45, 34);
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &:hover input ~ span {
    background-color: #ccc;
  }

  & input:checked ~ span {
    background-color: rgb(42, 68, 130);
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;

    @media (min-width: 769px) and (max-width: 1023px) {
      top: 6px;
      left: 6px;
      width: 8px;
      height: 8px;
    }

    @media (min-width: 300px) and (max-width: 768px) {
      margin-top: -3.5rem;
    }
  }

  & > p {
    font-size: 0.9rem;
    font-weight: 400;
    color: rgb(173, 173, 173);
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 1;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    height: 20px;
    width: 20px;
  }
`;

const Button = styled.button`
  font-family: "Courier Prime", monospace;
  font-size: 1.25rem;
  height: 55px;
  width: 300px;
  font-weight: 700;
  color: #fff;
  background-color: rgb(41, 67, 130);
  border: none;
  border-radius: 50px;
  cursor: pointer;

  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5);
  text-shadow: none;

  position: absolute;
  margin-top: 1rem;
  justify-content: center;

  transition-property: box-shadow, transform;
  transform-origin: center;
  transition-duration: 125ms;
  will-change: box-shadow, transform;
  outline: none;

  &:hover {
    box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.5);
    transform: scale(1.05) translateY(-4px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
    transform: scale(0.98) translateY(-2px);
  }

  @media (min-width: 300px) and (max-width: 399px) {
    height: 65px;
    width: 310px;
    font-size: 1.35rem;
  }

  @media (min-width: 400px) and (max-width: 768px) {
    height: 65px;
    width: 335px;
    font-size: 1.35rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    margin-top: 0.65rem;
    font-size: 0.85rem;
    height: 45px;
    width: 250px;
  }
`;

const Cart = () => {
  const subtotal = 2570,
    base_shipping = 130,
    premium_shipping = 210;
  const [total, setTotal] = useState(subtotal + base_shipping);

  function removeShipping() {
    setTotal(subtotal);
  }

  //   function addShipping(price) {
  //     removeShipping();
  //     setTotal(subtotal + price);
  //   }

  return (
    <div>
      <div className="columns">
        <H1
          className="column is-12-desktop is-offset-1-desktop
                        is-12-tablet is-offset-1-tablet
                        is-12-mobile 
                    "
          style={{
            marginTop: "8rem",
            fontFamily: "Courier Prime, monospace",
            fontWeight: "bold",
            fontSize: "2.5rem",
            color: "rgb(142, 45, 34)",
          }}
        >
          Carrito
        </H1>
      </div>
      <Container />
      {/* Begin of List Container */}
      <ListContainer
        style={{
          alignItems: "center",
          fontSize: "1.2rem",
          fontFamily: "Kameron, serif",
          fontWeight: "bold",
          color: "#000",
        }}
        className="columns"
      >
        <span
          className="column is-2-desktop is-offset-1-desktop
                    is-2-tablet is-offset-1-tablet
                    is-8-mobile is-offset-2-mobile
                "
        >
          <AnImage
            style={{
              height: "6.5rem",
              width: "10.5rem",
            }}
            src={require("../images/shoes_3.jpeg")}
            alt="item"
          />
        </span>
        <span className="column" style={{ textAlign: "center" }}>
          <p>Berlín Vaqueta</p>
        </span>
        <span className="column" style={{ textAlign: "center" }}>
          <p style={{ color: "rgb(142, 45, 34)" }}>$1290.00 MXN</p>
        </span>
        <span className="column" style={{ textAlign: "center" }}>
          <p>2</p>
        </span>
        <span className="column is-3-desktop" style={{ textAlign: "center" }}>
          <Paragraph
            style={{
              color: " red",
              cursor: "pointer",
            }}
          >
            X
          </Paragraph>
        </span>
      </ListContainer>
      <Container />
      {/* End of List Container */}
      {/* Begin of List Container */}
      <AnotherDiv2
        style={{
          alignItems: "center",
          fontSize: "1.2rem",
          fontFamily: "Kameron, serif",
          fontWeight: "bold",
          color: "#000",
        }}
        className="columns"
      >
        <span
          className="column is-2-desktop is-offset-1-desktop
                    is-2-tablet is-offset-1-tablet
                    is-8-mobile is-offset-2-mobile
                "
        >
          <AnImage2
            style={{
              height: "6.5rem",
              width: "10.5rem",
            }}
            src={require("../images/shoes_7.jpeg")}
            alt="item"
          />
        </span>
        <span className="column" style={{ textAlign: "center" }}>
          <p>Milán Vaqueta</p>
        </span>
        <span className="column" style={{ textAlign: "center" }}>
          <p style={{ color: "rgb(142, 45, 34)" }}>$1270.00 MXN</p>
        </span>
        <span className="column" style={{ textAlign: "center" }}>
          <p>1</p>
        </span>
        <span className="column is-3-desktop" style={{ textAlign: "center" }}>
          <Paragraph2
            style={{
              color: "red",
              cursor: "pointer",
            }}
          >
            X
          </Paragraph2>
        </span>
      </AnotherDiv2>
      <Container />
      {/* End of List Container */}
      <div className="columns">
        <AnotherH1
          className="column is-12-desktop is-offset-1-desktop
                        is-12-tablet is-offset-1-tablet
                        is-10-mobile is-offset-1-mobile
                    "
          style={{
            marginTop: "1rem",
            fontFamily: "Courier Prime, monospace",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "rgb(142, 45, 34)",
          }}
        >
          Total del Carrito
        </AnotherH1>
      </div>
      <div className="columns">
        <span
          className="column is-6-desktop is-offset-1-desktop
                    is-6-tablet is-offset-1-tablet"
        >
          <hr
            style={{
              backgroundColor: "rgba(127, 127, 127, 0.6)",
              height: "1px",
            }}
          />
          <span
            style={{
              color: "#000",
              fontSize: "1.25rem",
              fontFamily: "Kameron, serif",
              fontWeight: "bold",
            }}
            className="columns is-mobile"
          >
            <p
              className="column is-4-desktop is-offset-1-desktop
                            is-4-tablet is-offset-1-tablet
                            is-4-mobile is-offset-1-mobile
                        "
            >
              Subtotal:
            </p>
            <p style={{ color: "rgb(142, 45, 34)" }} className="column">
              ${subtotal}.00 MXN
            </p>
          </span>
          <hr
            style={{
              backgroundColor: "rgba(127, 127, 127, 0.6)",
              height: "1px",
            }}
          />
          <AnSpan
            style={{
              color: "#000",
              fontSize: "1.25rem",
              fontFamily: "Kameron, serif",
              fontWeight: "bold",
            }}
            className="columns"
          >
            <p
              className="column is-2-desktop is-offset-1-desktop
                            is-2-tablet is-offset-1-tablet
                            is-2-mobile is-offset-1-mobile
                        "
            >
              Envío:
            </p>
            <Label
              className="column is-6-mobile is-offset-half-mobile"
              //   onClick={() => {
              //     addShipping(base_shipping);
              //   }}
            >
              ${base_shipping}.00 MXN
              <input type="radio" checked={true} name="radio" />
              <Checkmark></Checkmark>
              <p>El envió será de 2 a 3 días hábiles</p>
            </Label>
            <Label
              className="column is-6-mobile is-offset-half-mobile"
              //   onClick={() => addShipping(premium_shipping)}
            >
              ${premium_shipping}.00 MXN
              <input type="radio" name="radio" />
              <Checkmark></Checkmark>
              <p>El envió será de 1 día hábil</p>
            </Label>
          </AnSpan>
          <hr
            style={{
              backgroundColor: "rgba(127, 127, 127, 0.6)",
              height: "1px",
            }}
          />
          <AnSpan2
            style={{
              color: "#000",
              fontSize: "1.25rem",
              fontFamily: "Kameron, serif",
              fontWeight: "bold",
            }}
            className="columns is-mobile"
          >
            <p
              className="column is-4-desktop is-offset-1-desktop
                            is-4-tablet is-offset-1-tablet
                            is-2-mobile is-offset-1-mobile
                        "
            >
              Total:
            </p>
            <p
              style={{ color: "rgb(142, 45, 34)" }}
              className="column is-6-mobile is-offset-2-mobile"
            >
              ${total}.00 MXN
            </p>
          </AnSpan2>
        </span>
        <ALastDiv
          style={{
            marginTop: "7rem",
          }}
          className="column is-4-desktop is-offset-1-desktop
                        is-4-tablet is-offset-1-tablet
                        is-11-mobile is-offset-1-mobile
                "
        >
          <Button>Confirmar Compra</Button>
          {/* <div
            css={`
              @media (min-width: 300px) and (max-width: 768px) {
                margin-top: 10rem;
              }
            `}
          ></div> */}
        </ALastDiv>
      </div>
    </div>
  );
};

const MyCart = () => {
  return (
    // <Provider store={store}>
    <>
      <Metadata />
      <Navbar />
      <Cart />
      <Footer />
    </>
    // </Provider>
  );
};

export default MyCart;
