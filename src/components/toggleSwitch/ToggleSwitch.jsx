import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <div>
      <h2>Toggle</h2>
      <input type="checkbox" />
      <input type="checkbox" style={{ "--s": "60px" }} />
    </div>
  );
};
export default ToggleSwitch;
