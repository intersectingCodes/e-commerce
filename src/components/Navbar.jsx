import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ cardTotal }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar fixed-top navbar-expand-lg fixed-top bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="home#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="home#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="home#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="home#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
          <button
            onClick={() => navigate("/cart")}
            className="btn btn-xl btn-success nav-cart"
          >
            Sepetim
            <span className="badge text-bg-danger ms-2">{cardTotal}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
