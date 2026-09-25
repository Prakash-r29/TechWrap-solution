import "./Navbar.css";
import logo from "../../assets/image/techwrap-logo.png";
import { Link } from "react-router-dom";
function Navbar(){
    return(<>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container-fluid px-5">
          <i className="bi bi-list"></i>
          <a href="/" className="navbar-brand">
                  <img
                      src={logo}
                      alt="TechWrap Solution"
                      className="company-logo"
                      width={250}
                      ></img>
              </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarMenu"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Product</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Solutions</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Resource</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Company</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <Link className="login-link" to="/login">
                Login
              </Link>
              <Link className="btn signup-btn" to="/signup">
                Sign up
              </Link>
              {/* <button className="btn project-btn">
                Start a project
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;



