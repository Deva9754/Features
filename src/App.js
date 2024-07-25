import "./App.css";
import Menu from "./components/Animatedtab/Menu";
import Card from "./components/card/Card";
import Carousel from "./components/carousel/Carousel";
import CircularLink from "./components/circular-link-menu/CircularLink";
import CreativeNavbar from "./components/creativeNavbar/Creative";
import Loader from "./components/loaderBlur/Loader";
import ToggleSwitch from "./components/toggleSwitch/ToggleSwitch";

function App() {
  return (
    <div className="App">
      <Menu />
      <Card />
      <ToggleSwitch />
      <CircularLink />
      <CreativeNavbar />
      <Carousel />
      <Loader />
    </div>
  );
}

export default App;
