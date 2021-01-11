import styled from "styled-components";

const Title = styled.h1`
  color: rgb(142, 45, 34);
  font-family: "Kameron", serif;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-top: 10%;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.65rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.65rem;
  }
`;

const ImgContainer = styled.div`
  margin-top: 2%;
  justify-content: center;
  text-align: center;
`;

const Img = styled.img`
  height: 350px;

  @media (min-width: 300px) and (max-width: 768px) {
    height: 250px;
    margin-left: 1.6rem;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    height: 250px;
  }
`;

const TextContainer = styled(ImgContainer)`
  margin-top: 2%;
`;

const Textual = styled.p`
  color: #3b3b3b;
  font-family: "Kameron", serif;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const Carousel = () => {
  return (
    <div>
      <div className="columns">
        <Title className="column">Tiendas Físicas</Title>
      </div>
      <ImgContainer>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <Img src="/store_one.jpeg" alt="store_1" />
              </li>
              <li className="glide__slide">
                <Img src="/store_two.jpeg" alt="store_2" />
              </li>
              <li className="glide__slide">
                <Img src="/store_three.jpeg" alt="store_3" />
              </li>
              <li className="glide__slide">
                <Img src="/store_four.jpeg" alt="store_4" />
              </li>
              <li className="glide__slide">
                <Img src="/store_five.jpeg" alt="store_5" />
              </li>
              <li className="glide__slide">
                <Img src="/store_six.jpeg" alt="store_6" />
              </li>
            </ul>
          </div>
        </div>
      </ImgContainer>
      <TextContainer className="columns">
        <Textual className="column is-6-dekstop">
          Blvd. Adolfo López Mateos 1601, <br />
          Los Gavilanes, Local: #26 37270 <br />
          León, Gto.
        </Textual>
        <Textual className="column is-6-desktop">
          5 de Mayo 216, Centro, 37000 <br />
          León, Gto.
        </Textual>
      </TextContainer>
    </div>
  );
};

export default Carousel;
