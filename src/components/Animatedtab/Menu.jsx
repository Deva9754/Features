import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <input type="checkbox" id="menu" />
          <label for="menu">Menu</label>
          <ul className="menu">
            <li>
              <a href="#0">
                <span>About</span>
                <i className="ri-user-location-line"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <span>Projects</span>
                <i className="ri-list-check-3"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <span>Clients</span>
                <i className="ri-team-line"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <span>Contact</span>
                <i className="ri-contacts-line"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="notification">Click on the Menu</p>
    </>
  );
};
export default Menu;
