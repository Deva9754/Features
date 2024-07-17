import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div class="container">
        <nav class="nav">
          <input type="checkbox" id="menu" />
          <label for="menu">Menu</label>
          <ul class="menu">
            <li>
              <a href="#0">
                <span>About</span>
                <i class="ri-user-location-line"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <span>Projects</span>
                <i class="ri-list-check-3"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <span>Clients</span>
                <i class="ri-team-line"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <span>Contact</span>
                <i class="ri-contacts-line"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p class="notification">Click on the Menu</p>
    </>
  );
};
export default Menu;
