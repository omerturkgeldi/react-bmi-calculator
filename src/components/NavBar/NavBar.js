import "./NavBar.css";

function NavBar(props) {
  function hamburgerToggle(e) {
    if (e.target.parentElement.parentElement.children[1]) {
      e.target.parentElement.parentElement.children[1].classList.toggle(
        "active"
      );
      e.target.classList.toggle("active");
    }
  }

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          BMI Calculator
        </a>
        <ul id="navId" className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/info" className="nav-link">
              Info
            </a>
          </li>
          <li className="nav-item">
            <a href="/dietplan" className="nav-link">
              Diet Plan
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={(e) => hamburgerToggle(e)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
