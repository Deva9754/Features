import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <div>
      <input type="checkbox" className="toggle" />
      <input type="checkbox" style={{ "--s": "60px" }} className="toggle" />
    </div>
  );
};
export default ToggleSwitch;
