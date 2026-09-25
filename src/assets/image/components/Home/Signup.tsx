import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="signup-section">

      <div className="container">

        <div className="row min-vh-100 align-items-center justify-content-center">

          <div className="col-lg-10">

            <div className="signup-card">

              <div className="row g-0">

                {/* Left Side */}

                <div className="col-lg-6 left-panel">

                  <span className="badge bg-primary mb-3">
                    TechWrap Solution
                  </span>

                  <h1>Create Your Account</h1>

                  <p>
                    Join TechWrap Solution and start building modern digital
                    experiences with our software development experts.
                  </p>

                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                    alt="signup"
                    className="img-fluid rounded-4 mt-4"
                  />

                </div>

                {/* Right Side */}

                <div className="col-lg-6 right-panel">

                  <h3 className="mb-4">Sign Up</h3>

                  <form>

                    <div className="mb-3">

                      <label className="form-label">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="John Doe"
                      />

                    </div>

                    <div className="mb-3">

                      <label className="form-label">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="john@gmail.com"
                      />

                    </div>

                    <div className="mb-3">

                      <label className="form-label">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+91 9876543210"
                      />

                    </div>

                    <div className="mb-3">

                      <label className="form-label">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="********"
                      />

                    </div>

                    <div className="mb-4">

                      <label className="form-label">
                        Confirm Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="********"
                      />

                    </div>

                    <Link className="btn btn-primary w-100 btn-lg" to='/Login'>
                      Create Account
                    </Link>

                  </form>

                  <div className="divider">
                    <span>OR</span>
                  </div>

                  <button className="btn btn-outline-dark w-100 mb-3">
                    Continue with Google
                  </button>

                  <p className="text-center mt-4">

                    Already have an account?

                    <Link to="/login" className="login-link">
                      Sign In
                    </Link>

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Signup;