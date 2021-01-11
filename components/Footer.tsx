import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const Div = styled.div`
  border-top: solid rgb(221, 221, 221) 1px;
  margin-top: 6%;
`;

const Foot = styled.footer`
  margin-top: 3%;
`;

const Desc = styled.small`
  color: rgb(142, 45, 34);
  font-family: "Kameron", serif;
  font-size: 1.5rem;
  font-weight: 800;
  margin-left: 5%;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.1rem;
    margin-left: 3%;
  }
`;

const Icons = styled.div`
  & > span {
    color: rgb(142, 45, 34);
    font-family: "Kameron", serif;
    font-size: 1.25rem;
    font-weight: 600;

    @media (min-width: 300px) and (max-width: 768px) {
      display: flex;
      justify-content: center;
      margin-top: 3.5rem;
    }

    @media (min-width: 769px) and (max-width: 1023px) {
      font-size: 1.1rem;
    }
  }
`;

const Underline = styled.u`
  font-family: "Kameron", serif;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 5%;
  cursor: pointer;

  & > a {
    color: rgb(142, 45, 34);
    text-decoration: none;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    margin-left: -10%;
    margin-top: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 0.85rem;
  }
`;

const Icon = styled.i`
  width: 50px;
  height: 50px;
  justify-content: center;
  margin-left: 5%;
  color: rgb(142, 45, 34);
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    color: rgba(142, 45, 34, 0.7);
    transition: 0.2s ease-in-out;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-left: 12%;
  }
`;

const Brand = styled.img`
  width: 45px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;

  @media (min-width: 300px) and (max-width: 768px) {
    margin-left: 12px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 40px;
    height: 25px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

const Trademark = styled(Desc)`
  color: rgb(127, 127, 127);
  font-size: 0.85rem;
  float: right;
  margin-top: 7%;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    float: none;
    margin-top: 5%;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 0.7rem;
    margin-top: 6%;
  }
`;

const colored = keyframes`
    0% {
        color: rgb(9, 207, 131);
    }
    25% {
        color: rgb(162, 89, 255);
    }
    50% {
        color: rgb(242, 78, 30);
    }
    75% {
        color: rgb(255, 114, 97);
    }
    100% {
        color: rgb(25, 188, 254);
    }
`;

const Author = styled(Trademark)`
  color: #000;
  font-family: "Poppins";
  font-size: 0.95rem;
  float: left;
  text-decoration: none;

  & > a {
    color: rgb(9, 207, 131);
  }

  & > a:active {
    color: rgb(162, 82, 255);
  }

  & > a:hover {
    animation: ${colored} 1.75s ease-in-out infinite;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    float: none;
    font-size: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 0.8rem;
    margin-top: 6%;
  }
`;

const Bar = styled.div`
  background-color: rgb(142, 45, 34);
  width: 100%;
  height: 10px;
  margin-top: 10%;
`;

const Footer = () => {
  return (
    <Div id="foot">
      <Foot className="columns">
        <Desc className="column is-5-desktop is-5-tablet is-11-mobile is-offset-1-mobile">
          Los mejores productos y la <br />
          mejor calidad, No olvides <br />
          seguirnos.
        </Desc>
        <Icons className="column is-2-desktop is-2-tablet">
          <span>Síguenos</span>
          <div className="columns">
            <span className="column is-10-desktop is-7-mobile is-offset-3-mobile icon is-small">
              <Icon className="fab fa-facebook fa-2x"></Icon>
              <Icon className="fab fa-instagram fa-2x"></Icon>
              <Icon className="fab fa-twitter fa-2x"></Icon>
            </span>
          </div>
        </Icons>
        <Icons className="column is-2-tablet">
          <span>Contáctanos</span>
          <div className="columns">
            <span className="column is-12-desktop is-offset-1-desktop is-5-mobile is-offset-4-mobile icon is-small">
              <Icon className="fab fa-whatsapp fa-2x"></Icon>
              <Icon className="fa fa-envelope fa-2x"></Icon>
            </span>
          </div>
        </Icons>
        <Icons className="column is-3-tablet">
          <span>Métodos de Pago</span>
          <div className="columns">
            <div className="column is-7-mobile is-offset-3-mobile">
              <Brand src={"../images/oxxo_logo.png"} alt="oxxo"></Brand>
              <Brand src={"../images/visa_logo.png"} alt="visa"></Brand>
              <Brand
                src={"../images/mastercard_logo.png"}
                alt="master card"
              ></Brand>
              <br />
              <Underline>
                <Link href="/howto/">Cómo comprar</Link>
              </Underline>
              <br />
              <Underline>
                <Link href="/"> Política de privacidad</Link>
              </Underline>
            </div>
          </div>
        </Icons>
      </Foot>
      <Author>
        Creado por <a href="/">&nbsp;Oliver ALR</a>
      </Author>
      <Trademark>
        The West Sun© {new Date().getFullYear()} Todos los derechos reservados
      </Trademark>
      <Bar />
    </Div>
  );
};

export default Footer;
