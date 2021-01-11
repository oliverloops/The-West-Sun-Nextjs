import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
// UI Components
import Metadata from "../components/Metadata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Category = styled.h1`
  color: rgb(142, 45, 34);
  font-family: "Kameron", serif;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  justify-content: center;
  margin-top: 9rem;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.55rem;
  }
`;

const BoxContainer = styled.div`
  margin-top: 5rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const Box = styled.a`
  color: #fff;
`;

const Img = styled(Image)`
  height: 24rem;
  z-index: 0;

  &:hover {
    border: solid rgb(142, 45, 34) 8px;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    height: 20rem;
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
  margin-top: 18rem;
  font-size: 1rem;

  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 15.5rem;
  }
`;

const Categories = () => {
  //const elements = data.categorias;

  return (
    <>
      <Category className="columns is-12 is-offset-1-desktop">
        Selecciona una Categoría
      </Category>
      <BoxContainer className="columns is-2-offset-desktop is-half-tablet">
        <>
          <Box className="column is-4-desktop is-5-tablet is-10-mobile is-offset-1-mobile">
            <Link href="/store-men/">
              <Title className="column is-4-desktop is-5-tablet is-10-mobile">
                <span>Calzado </span>para <span>Caballero</span>
              </Title>
              <Desc className="column is-4-desktop is-5-tablet is-10-mobile">
                Suspendisse tempus nibh vel <br />
                erat lacinia interdum.
              </Desc>
              {/* <Img fluid={element.izquierda.fluid} alt="Men Category" /> */}
            </Link>
          </Box>
          <Box
            href="/store.html"
            className="column is-4-desktop is-5-tablet is-10-mobile is-offset-1-mobile"
          >
            <Link href="/store-women">
              <Title className="column is-4-desktop is-5-tablet is-10-mobile">
                <span>Calzado </span>para <span>Dama</span>
              </Title>
              <Desc className="column is-4-desktop is-5-tablet is-10-mobile">
                Suspendisse tempus nibh vel <br />
                erat lacinia interdum.
              </Desc>
              {/* <Image fluid={element.derecha.fluid} alt="Women Category" /> */}
            </Link>
          </Box>
        </>
      </BoxContainer>
    </>
  );
};

const Options = () => {
  return (
    // <Provider store={store}>
    <div>
      <Metadata />
      <Navbar />
      <Categories />
      <Footer />
    </div>
    // </Provider>
  );
};

export default Options;
