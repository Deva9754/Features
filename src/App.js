import "./App.css";
import Menu from "./components/Animatedtab/Menu";
import Card from "./components/card/Card";
import Carousel from "./components/carousel/Carousel";
import CircularLink from "./components/circular-link-menu/CircularLink";
import CreativeNavbar from "./components/creativeNavbar/Creative";
import Dropdown from "./components/dropDown-darkLight/Dropdown";
import Emailvalidation from "./components/email-validation/Email";
import Loader from "./components/loaderBlur/Loader";
// import ProductCard from "./components/product-card/ProductCard";
import ToggleSwitch from "./components/toggleSwitch/ToggleSwitch";

function App() {
  return (
    <div className="App">
      <Menu />
      <Card />
      <ToggleSwitch />
      <CircularLink />
      <Carousel />
      <CreativeNavbar />
      <Loader />
      <Emailvalidation />
      <Dropdown />
      {/* <ProductCard /> */}
    </div>
  );
}

export default App;
