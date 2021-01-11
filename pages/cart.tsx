import React, { useState } from "react";
import styled from "styled-components";

//Styles
import "../styles/main.scss";
// Components
import Metadata from "../components/Metadata.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

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

  function addShipping(price) {
    removeShipping();
    setTotal(subtotal + price);
  }

  return (
    <div>
      <div className="columns">
        <h1
          className="column is-12-desktop is-offset-1-desktop
                        is-12-tablet is-offset-1-tablet
                        is-12-mobile 
                    "
          css={`
            margin-top: 8rem;
            font-family: "Courier Prime", monospace;
            font-weight: 700;
            font-size: 2.5rem;
            color: rgb(142, 45, 34);

            @media (min-width: 300px) and (max-width: 768px) {
              text-align: center;
            }

            @media (min-width: 769px) and (max-width: 1023px) {
              font-size: 2.15rem;
            }
          `}
        >
          Carrito
        </h1>
      </div>
      <Container />
      {/* Begin of List Container */}
      <div
        css={`
          align-items: center;
          font-size: 1.2rem;
          font-family: "Kameron", serif;
          font-weight: 700;
          color: #000;
          @media (min-width: 769px) and (max-width: 1023px) {
            font-size: 1rem;
          }
        `}
        className="columns"
      >
        <span
          className="column is-2-desktop is-offset-1-desktop
                    is-2-tablet is-offset-1-tablet
                    is-8-mobile is-offset-2-mobile
                "
        >
          <img
            css={`
              height: 6.5rem;
              width: 10.5rem;

              @media (min-width: 300px) and (max-width: 768px) {
                height: 10rem;
                width: 15.65rem;
              }
            `}
            src={require("../images/shoes_3.jpeg")}
            alt="item"
          />
        </span>
        <span className="column" css="text-align: center;">
          <p>Berlín Vaqueta</p>
        </span>
        <span className="column" css="text-align: center;">
          <p css="color: rgb(142, 45, 34);">$1290.00 MXN</p>
        </span>
        <span className="column" css="text-align: center;">
          <p>2</p>
        </span>
        <span className="column is-3-desktop" css="text-align: center;">
          <p
            css={`
              color: red;
              cursor: pointer;

              @media (min-width: 300px) and (max-width: 768px) {
                font-size: 1.65rem;
              }
            `}
          >
            X
          </p>
        </span>
      </div>
      <Container />
      {/* End of List Container */}
      {/* Begin of List Container */}
      <div
        css={`
          align-items: center;
          font-size: 1.2rem;
          font-family: "Kameron", serif;
          font-weight: 700;
          color: #000;
          @media (min-width: 769px) and (max-width: 1023px) {
            font-size: 1rem;
          }
        `}
        className="columns"
      >
        <span
          className="column is-2-desktop is-offset-1-desktop
                    is-2-tablet is-offset-1-tablet
                    is-8-mobile is-offset-2-mobile
                "
        >
          <img
            css={`
              height: 6.5rem;
              width: 10.5rem;

              @media (min-width: 300px) and (max-width: 768px) {
                height: 10rem;
                width: 15.65rem;
              }
            `}
            src={require("../images/shoes_7.jpeg")}
            alt="item"
          />
        </span>
        <span className="column" css="text-align: center;">
          <p>Milán Vaqueta</p>
        </span>
        <span className="column" css="text-align: center;">
          <p css="color: rgb(142, 45, 34);">$1270.00 MXN</p>
        </span>
        <span className="column" css="text-align: center;">
          <p>1</p>
        </span>
        <span className="column is-3-desktop" css="text-align: center;">
          <p
            css={`
              color: red;
              cursor: pointer;

              @media (min-width: 300px) and (max-width: 768px) {
                font-size: 1.65rem;
              }
            `}
          >
            X
          </p>
        </span>
      </div>
      <Container />
      {/* End of List Container */}
      <div className="columns">
        <h1
          className="column is-12-desktop is-offset-1-desktop
                        is-12-tablet is-offset-1-tablet
                        is-10-mobile is-offset-1-mobile
                    "
          css={`
            margin-top: 1rem;
            font-family: "Courier Prime", monospace;
            font-weight: 700;
            font-size: 1.5rem;
            color: rgb(142, 45, 34);

            @media (min-width: 300px) and (max-width: 768px) {
              text-align: center;
              margin-top: 5rem;
              font-size: 1.75rem;
            }

            @media (min-width: 769px) and (max-width: 1023px) {
              font-size: 1.25rem;
            }
          `}
        >
          Total del Carrito
        </h1>
      </div>
      <div className="columns">
        <span
          className="column is-6-desktop is-offset-1-desktop
                    is-6-tablet is-offset-1-tablet"
        >
          <hr
            css={`
              background-color: rgba(127, 127, 127, 0.6);
              height: 1px;
            `}
          />
          <span
            css={`
              color: #000;
              font-size: 1.25rem;
              font-family: "Kameron", serif;
              font-weight: 700;

              @media (min-width: 300px) and (max-width: 768px) {
                font-size: 1.5rem;
              }

              @media (min-width: 769px) and (max-width: 1023px) {
                font-size: 1rem;
              }
            `}
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
            <p css="color: rgb(142, 45, 34);" className="column">
              ${subtotal}.00 MXN
            </p>
          </span>
          <hr
            css={`
              background-color: rgba(127, 127, 127, 0.6);
              height: 1px;
            `}
          />
          <span
            css={`
              color: #000;
              font-size: 1.25rem;
              font-family: "Kameron", serif;
              font-weight: 700;

              @media (min-width: 300px) and (max-width: 768px) {
                font-size: 1.5rem;
              }

              @media (min-width: 769px) and (max-width: 1023px) {
                font-size: 1rem;
              }
            `}
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
              css={`
                @media (min-width: 300px) and (max-width: 768px) {
                  margin-top: -3.5rem;
                }
              `}
              onClick={() => {
                addShipping(base_shipping);
              }}
            >
              ${base_shipping}.00 MXN
              <input type="radio" checked="checked" name="radio" />
              <Checkmark></Checkmark>
              <p>El envió será de 2 a 3 días hábiles</p>
            </Label>
            <Label
              className="column is-6-mobile is-offset-half-mobile"
              onClick={() => addShipping(premium_shipping)}
            >
              ${premium_shipping}.00 MXN
              <input type="radio" name="radio" />
              <Checkmark></Checkmark>
              <p>El envió será de 1 día hábil</p>
            </Label>
          </span>
          <hr
            css={`
              background-color: rgba(127, 127, 127, 0.6);
              height: 1px;
            `}
          />
          <span
            css={`
              color: #000;
              font-size: 1.25rem;
              font-family: "Kameron", serif;
              font-weight: 700;

              @media (min-width: 300px) and (max-width: 768px) {
                font-size: 1.5rem;
              }

              @media (min-width: 769px) and (max-width: 1023px) {
                font-size: 1rem;
              }
            `}
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
              css="color: rgb(142, 45, 34);"
              className="column is-6-mobile is-offset-2-mobile"
            >
              ${total}.00 MXN
            </p>
          </span>
        </span>
        <div
          css={`
            margin-top: 7rem;

            @media (min-width: 300px) and (max-width: 768px) {
              margin-top: 1rem;
            }
          `}
          className="column is-4-desktop is-offset-1-desktop
                        is-4-tablet is-offset-1-tablet
                        is-11-mobile is-offset-1-mobile
                "
        >
          <Button>Confirmar Compra</Button>
          <div
            css={`
              @media (min-width: 300px) and (max-width: 768px) {
                margin-top: 10rem;
              }
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};

const MyCart = () => {
  return (
    <Provider store={store}>
      <Metadata />
      <Navbar />
      <Cart />
      <Footer />
    </Provider>
  );
};

export default MyCart;
