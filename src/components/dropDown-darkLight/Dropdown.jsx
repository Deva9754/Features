import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown-box">
      <input
        type="checkbox"
        name="dark-light"
        id="dark-light"
        className="dark-light"
      />
      <label for="dark-light"></label>

      <div className="dark-back"></div>

      <div className="sec-center">
        <input
          type="checkbox"
          id="dropdown"
          name="dropdown"
          className="dropdown"
        />
        <label For="dropdown" className="for-dropdown">
          {" "}
          Dropdown Menu <i class="uil uil-arrow-down "></i>{" "}
        </label>

        <div class="section-dropdown">
          <a href="#1">
            Dropdown Link <i class="uil uil-arrow-right"></i>
          </a>
          <input
            class="dropdown-sub"
            type="checkbox"
            id="dropdown-sub"
            name="dropdown-sub"
          />
          <label class="for-dropdown-sub" for="dropdown-sub">
            Dropdown Sub <i class="uil uil-plus"></i>
          </label>
          <div class="section-dropdown-sub">
            <a href="#2">
              Dropdown Link <i class="uil uil-arrow-right"></i>
            </a>
            <a href="3#">
              Dropdown Link <i class="uil uil-arrow-right"></i>
            </a>
          </div>
          <a href="#4">
            Dropdown Link <i class="uil uil-arrow-right"></i>
          </a>
          <a href="#5">
            Dropdown Link <i class="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
