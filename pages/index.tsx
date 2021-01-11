//Modular Home Components
import Metadata from "../components/Metadata";
import NavbarHome from "../components/NavbarHome";
import MainCarousel from "../components/MainCarousel";
import Categories from "../components/Categories";
import Landing from "../components/Landing";
import Extra from "../components/Extra";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Main = () => (
  <>
    <NavbarHome />
    <MainCarousel />
    <Categories />
    <Landing />
    <Extra />
    <Carousel />
    <Footer />
  </>
);

export default () => (
  <>
    <Main />
  </>
);
