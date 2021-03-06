import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Div = styled.div`
  margin: 12% 10% 0 10%;
  width: 80%;
`;

const Img = styled(Image)`
  height: 500px;
  margin-left: 0;

  @media (min-width: 300px) and (max-width: 768px) {
    height: 470px;
    margin-left: 0;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    height: 415px;
    margin-left: 10%;
  }
`;

const Elements = styled.div`
  @media (min-width: 769px) and (max-width: 1023px) {
    margin-left: 3%;
    margin-top: -2%;
  }
`;

const Container = styled(Div)`
  margin-top: 0.15rem;
`;

const Title = styled.h1`
  color: rgb(142, 45, 34);
  font-family: "Kameron", serif;
  font-size: 2rem;
  font-weight: 800;
  text-align: left;
  padding-right: 300px;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.8rem;
    padding-right: 25px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.5rem;
    padding-right: 125px;
  }
`;

const Content = styled.p`
  color: rgb(142, 45, 34);
  font-family: "Kameron", serif;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: left;
  padding-right: 55px;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.35rem;
    padding-right: 50px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
    text-align: left;
    padding-right: 75px;
  }
`;

const Element = styled.span`
  color: rgb(43, 71, 137);
  font-family: "Kameron", serif;
  font-size: 1.45rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: rgb(43, 71, 137);
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const Underline = styled.u`
  color: rgb(43, 71, 137);
  font-family: "Kameron", serif;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Extra = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     extra: allDatoCmsExtra {
  //       edges {
  //         node {
  //           titulo
  //           descripcion
  //           imagen {
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
    <Div className="columns is-half-desktop">
      <>
        <div className="column is-4-desktop is-offset-2-desktop is-4-tablet is-10-mobile is-offset-1-mobile">
          <Img src={"/2.jpg"} height="500px" width="300px" alt="Shoes" />
        </div>

        <Elements className="column is-8-desktop">
          <Container className="columns is-7-desktop is-4-tablet is-10-mobile is-offset-1-mobile">
            <Title className="column is-12-desktop is-10-tablet is-10-mobile is-offset-1-mobile">
              Un gran título
            </Title>
          </Container>
          <Container className="columns is-3-desktop is-5-tablet">
            <Content className="column is-6-desktop is-8-tablet is-10-mobile is-offset-1-mobile">
              Una super descripción de prueba Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris ut luctus velit. Duis lobortis
              euismod tellus quis commodo.
            </Content>
          </Container>
          <Container className="columns is-3-desktop">
            <Element className="column is-6-desktop is-8-tablet is-10-mobile is-offset-1-mobile">
              <Link href="/brands/">
                <a>
                  <Underline>Ver Catálogo Completo</Underline>
                </a>
              </Link>
            </Element>
          </Container>
          <Container className="columns is-3-desktop">
            <Element className="column is-6-desktop is-8-tablet is-10-mobile is-offset-1-mobile">
              <Link href="/brands/">
                <a>
                  <Underline>Artículos de Temporada</Underline>
                </a>
              </Link>
            </Element>
          </Container>
        </Elements>
      </>
    </Div>
  );
};

export default Extra;
