import styled from "styled-components";
import Link from "next/link";
//Styles
import "../styles/main.scss";

const BoxContainer = styled.div`
  margin-top: 10rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 15%;
  }
`;

const Box = styled.div`
  color: #fff;
`;

const ImgOne = styled(Img)`
  height: 24rem;

  @media (min-width: 769px) {
    &:hover {
      -webkit-box-shadow: -18px 21px 0px -2px rgb(142, 45, 34);
      -moz-box-shadow: -18px 21px 0px -2px rgb(142, 45, 34);
      box-shadow: -18px 21px 0px -2px rgb(142, 45, 34);

      transition: 0.25s ease-in-out;
    }
  }

  @media (min-width: 300px) and (max-width: 768px) {
    height: 20rem;
  }
`;

const ImgTwo = styled(ImgOne)`
  @media (min-width: 769px) {
    &:hover {
      -webkit-box-shadow: 18px 21px 0px -2px rgb(142, 45, 34);
      -moz-box-shadow: 18px 21px 0px -2px rgb(142, 45, 34);
      box-shadow: 18px 21px 0px -2px rgb(142, 45, 34);

      transition: 0.25s ease-in-out;
    }
  }
`;

const Title = styled.p`
  color: #fff;
  font-family: "Courier Prime", monospace;
  font-size: 1.25rem;
  font-weight: 400;
  justify-content: center;
  text-align: center;
  position: absolute;
  margin-top: 15rem;
  z-index: 1;

  & > span {
    font-weight: 800;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 12rem;
  }
`;

const Desc = styled(Title)`
  font-size: 1rem;
  margin-top: 18rem;

  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 15rem;
  }
`;

const TextContainer = styled.div`
  justify-content: center;
`;

const Text = styled.p`
  font-family: "Kameron", serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: rgb(142, 45, 34);
  text-align: center;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.6rem;
  }
`;

const Bar = styled.hr`
  width: 60%;
  height: 7px;
  background-color: rgb(142, 45, 34);
  margin-top: 1.5rem;
  justify-content: center;
  margin-left: 20%;

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 50%;
    margin-left: 25%;
  }
`;

const Categories = () => {
  return (
    <div>
      <BoxContainer className="columns is-2-offset-desktop is-half-tablet">
        {data.categorias.edges.map(({ node: element }) => (
          <>
            <Box className="column is-4-desktop is-5-tablet is-10-mobile is-offset-1-mobile">
              <Link to="/store-men/">
                <Title className="column is-4-desktop is-5-tablet is-10-mobile">
                  <span>Calzado </span>para <span>Caballero</span>
                </Title>
                <Desc className="column is-4-desktop is-5-tablet is-10-mobile">
                  Suspendisse tempus nibh vel <br />
                  erat lacinia interdum.
                </Desc>
                <ImgOne fluid={element.izquierda.fluid} alt="Men Category" />
              </Link>
            </Box>
            <Box className="column is-4-desktop is-5-tablet is-10-mobile is-offset-1-mobile">
              <Link to="/store-women/">
                <Title className="column is-4-desktop is-5-tablet is-10-mobile">
                  <span>Calzado </span>para <span>Dama</span>
                </Title>
                <Desc className="column is-4-desktop is-5-tablet is-10-mobile">
                  Suspendisse tempus nibh vel <br /> erat lacinia interdum.
                </Desc>
                <ImgTwo fluid={element.derecha.fluid} alt="Women Category" />
              </Link>
            </Box>
          </>
        ))}
      </BoxContainer>

      <TextContainer className="columns is-5-desktop">
        {data.categorias.edges.map(({ node: element }) => (
          <Text className="column is-5-desktop is-5-tablet is-10-mobile is-offset-1-mobile">
            “{element.frase}”
          </Text>
        ))}
      </TextContainer>
      <Bar />
    </div>
  );
};

export default Categories;
