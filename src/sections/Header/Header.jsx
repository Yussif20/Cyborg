import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const Header = () => {
  return (
    <nav
      style={{ minHeight: 100 }}
      className="navbar navbar-expand-lg navbar-dark "
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse">
                Browse
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Details
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Streams
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/#">
                    Call Of Duty
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Fortnight
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
