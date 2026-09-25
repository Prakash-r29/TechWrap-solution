import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <section className="login-section">

      <div className="container">

        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-5 col-md-8">

            <div className="login-card">
                <div className="login-card">

                    <Link to="/" className="close-btn">
                        &times;
                    </Link>

                    {/* Rest of your login content */}

                </div>

              <div className="text-center mb-4">

                <h1 className="brand-title">
                  TechWrap Solution
                </h1>

                <p className="text-muted">
                  Welcome back! Sign in to continue.
                </p>

              </div>

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="d-flex justify-content-between mb-4">

                  <div className="form-check">

                    <input
                      className="form-check-input"
                      type="checkbox"
                    />

                    <label className="form-check-label">
                      Remember me
                    </label>

                  </div>

                  <a href="/" className="forgot-link">
                    Forgot Password?
                  </a>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  Login
                </button>

              </form>

              <div className="divider">
                <span>OR</span>
              </div>

              <button className="btn btn-outline-dark w-100 mb-3">
                Continue with Google
              </button>

              <p className="text-center mt-4">

                Don't have an account?

                <a href="/" className="signup-link">
                  Sign Up
                </a>

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;