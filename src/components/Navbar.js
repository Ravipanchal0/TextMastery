// import Reacts from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`} id="nav">
        <div className="container-fluid">
          <a className="navbar-brand fw-semibold" href="#">
            {props.brandName}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="mode" onClick={props.enableMode} />
            <label className="form-check-label" htmlFor="mode">
              {props.mode} mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
};
Navbar.defaultProps = { brandName: "Default Title", mode: "Light" };
