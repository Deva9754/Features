import "./App.css";
import Menu from "./components/Animatedtab/Menu";
import Card from "./components/card/Card";
import CircularLink from "./components/circular-link-menu/CircularLink";
import ToggleSwitch from "./components/toggleSwitch/ToggleSwitch";

function App() {
  return (
    <div className="App">
      <Menu />
      <Card />
      <ToggleSwitch />
      <CircularLink />
    </div>
  );
}

export default App;
