/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
//Styles
import "../styles/main.scss";

const Container = styled.div`
  background-color: #000;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.45);
  height: 6rem;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 300px) and (max-width: 365px) {
    height: 5rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    height: 5.5rem;
  }
`;

const Img = styled.img`
  width: 180px;
  height: 80px;
  margin-left: 1rem;
  margin-top: 8px;
  cursor: pointer;
  animation: logo 1.25s linear;

  @media (min-width: 300px) and (max-width: 374px) {
    width: 145px;
    height: 60px;
    margin-left: 0rem;
    margin-top: 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 155px;
    height: 70px;
    margin-left: 0rem;
    margin-top: 20px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 150px;
    height: 70px;
    margin-left: 0rem;
  }
`;

const ListItem = styled.li`
  font-family: "Kameron", serif;
  font-weight: 700;
  font-size: 1.21rem;
  list-style: none;
  color: #fff;

  & > span > a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: rgb(142, 45, 34);
      transition: 0.25s linear;
    }
  }

  @media (min-width: 300px) and (max-width: 374px) {
    font-size: 1.75rem;
    text-align: center;
    float: left;
    margin-top: -4.8rem;
    width: 30%;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 1.75rem;
    text-align: right;
    float: left;
    margin-top: -5.5rem;
    width: 27%;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const Ul = styled.ul`
  & > li {
    font-family: "Kameron", serif;
    animation: links 900ms cubic-bezier(0.54, 0.87, 1, 0.78);
  }
`;

const Navbar = (props) => {
  console.log(props);

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <>
      <Container>
        <nav id="myNav" role="custom-dropdown" className="columns">
          <input type="checkbox" id="button" />
          <label htmlFor="button"></label>

          <Link to="/" className="column is-6-desktop is-5-tablet ">
            <Img
              src={require("../images/logothewestsun.png")}
              alt="The West Sun"
            />
          </Link>

          <ListItem className="column is-offset-7-mobile cart-mobile">
            <span className="icon">
              <Link to="/cart/">
                <i className="fas fa-shopping-cart fas"></i>
              </Link>
            </span>
            <span> {props.cartProps.cartElements}</span>
          </ListItem>

          <Ul
            className="columns"
            css={`
              @media (min-width: 769px) and (max-width: 1023px) {
                font-size: 0.25em;
              }
            `}
          >
            <li className="column">
              <Link to="/brands/">Tienda</Link>
            </li>
            <li className="column">
              <a href="#foot">Contácto</a>
            </li>
            <li className="column">
              <Link to="/about/">Acerca</Link>
            </li>
            <li className="column is-4-desktop is-4-tablet">
              <Link to="/howto/">Como comprar</Link>
            </li>
            <li className="column cart-desktop">
              <Link to="/cart/">
                <i className="fas fa-shopping-cart fas"></i>
                <span> {props.cartProps.cartElements}</span>
              </Link>
            </li>
          </Ul>
        </nav>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
