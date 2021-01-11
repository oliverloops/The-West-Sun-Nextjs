import styled from "styled-components";

const Div = styled.div`
  margin-top: 10%;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 15%;
  }
`;

const Icons = styled(Div)`
  margin-top: 1%;
`;

const Title = styled.h1`
  color: rgb(142, 45, 34);
  font-family: "Kameron", serif;
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: 300px) and (max-width: 768px) {
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.3rem;
  }
`;

const Fig = styled.figure`
  margin-top: 3%;
  font-family: "Kameron", serif;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 65px;
    height: 65px;
  }
`;

const Figcap = styled.figcaption`
  color: rgb(142, 45, 34);
  font-size: 1.05rem;
  font-weight: 600;

  margin-top: 0.8rem;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const Landing = () => {
  return (
    <div>
      <Div className="columns is-5-desktop">
        <Title className="column is-half-desktop is-7-tablet is-12-mobile">
          Tenemos la mejor calidad y garantía en calzado.
        </Title>
      </Div>
      <Icons className="columns is-6-desktop">
        <Fig className="column is-2">
          <Img src="/shoe_icon.png" alt="iconOne" />
          <Figcap>
            Modelos <br />
            íncreibles que
            <br />
            te encantarán
          </Figcap>
        </Fig>
        <Fig className="column is-2-desktop is-3-tablet">
          <Img src="/order_icon.png" alt="iconTwo" />
          <Figcap>
            Contamos con <br /> disponibilidad <br />
            para envíos
          </Figcap>
        </Fig>
        <Fig className="column is-2-desktop is-3-tablet">
          <Img src="/quality.png" alt="iconThree" />
          <Figcap>
            Usamos <br /> materiales de la <br /> mejor calidad
          </Figcap>
        </Fig>
        <Fig className="column is-2">
          <Img src="/mexico_icon.png" alt="iconFour" />
          <Figcap>
            Hechos <br /> completamente <br />
            en México
          </Figcap>
        </Fig>
      </Icons>
    </div>
  );
};

export default Landing;
