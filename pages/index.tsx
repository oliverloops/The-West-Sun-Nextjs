//Modular Home Components
import Metadata from "../components/Metadata";
import NavbarHome from "../components/NavbarHome";
import MainCarousel from "../components/MainCarousel";
import Categories from "../components/Categories";
import Landing from "../components/Landing";
import Extra from "../components/Extra";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
// Exported Views --->
//Pages
import Options from "./options";
import MenStore from "./store-men";
import WomenStore from "./store-women";
import MyCart from "./cart";
import Howto from "./howto";
import About from "./about";
// <---

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
  // <Provider store={store}>
  <>
    <Metadata />
    <Main />
    <Options />
    <MenStore />
    <WomenStore />
    <MyCart />
    <Howto />
    <About />
  </>
  // </Provider>
);
