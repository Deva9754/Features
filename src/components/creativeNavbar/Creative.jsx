import "./Creative.css";

const CreativeNavbar = () => {
  return (
    <div className="creative-navbar-container">
      <h2>Creative-NavBar</h2>
      <nav>
        <ul>
          <li className="link1">
            <a href="#0"> Home </a>
          </li>
          <li className="link1">
            <a href="#1"> Features </a>
          </li>
          <li className="link1">
            <a href="#2"> Pricing </a>
          </li>
          <li className="link1">
            <a href="#3"> About </a>
          </li>
          <li className="link1">
            <a href="#4"> Contact </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CreativeNavbar;
