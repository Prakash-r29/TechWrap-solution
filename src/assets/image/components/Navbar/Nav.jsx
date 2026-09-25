import React from "react";
import "./Navbar.css";
import logo from "../../assets/image/techwrap-logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">

        <div className="container-fluid px-4">

          {/* Left Side */}

          <div className="d-flex align-items-center">

            {/* Hamburger */}

          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
          >
          ☰
          </button>

            {/* Logo */}

            <a href="/" className="navbar-brand mb-0">
              <img
                src={logo}
                alt="TechWrap"
                className="company-logo"
              />
            </a>

          </div>

          {/* Right Side */}

          <div className="d-flex align-items-center gap-3">

            <a href="/" className="login-link">
              Log In
            </a>

            <button className="btn signup-btn">
              Sign Up
            </button>

          </div>

        </div>

      </nav>

      {/* Sidebar */}

      <div
        className="offcanvas offcanvas-start"
        id="sidebar"
        tabIndex="-1"
      >

        <div className="offcanvas-header">

          <h4>TechWrap Solution</h4>

          <button
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>

        </div>

        <div className="offcanvas-body">

          <ul className="list-unstyled">

            <li className="mb-3">
              <a href="/" className="sidebar-link">
                🏠 Home
              </a>
            </li>

            <li className="mb-3">
              <a href="/" className="sidebar-link">
                💼 Services
              </a>
            </li>

            <li className="mb-3">
              <a href="/" className="sidebar-link">
                📂 Work
              </a>
            </li>

            <li className="mb-3">
              <a href="/" className="sidebar-link">
              
              </a>
            </li>

            <li className="mb-3">
              <a href="/" className="sidebar-link">
                ⭐ Testimonials
              </a>
            </li>

            <li className="mb-3">
              <a href="/" className="sidebar-link">
                📞 Contact
              </a>
            </li>

          </ul>

        </div>

      </div>

    </>
  );
}

export default Navbar;