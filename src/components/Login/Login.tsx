import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import emailjs from "@emailjs/browser";

import { auth, db } from "../../Firebase/Firebase";

import "./Login.css";

// =========================================================
// EMAILJS — LOGIN PAGE CONFIGURATION
// =========================================================

const LOGIN_EMAILJS_SERVICE_ID = "service_8q75dul";
const LOGIN_EMAILJS_TEMPLATE_ID = "template_jq46q4k";
const LOGIN_EMAILJS_PUBLIC_KEY = "Ptm4BlZ3ixUoMAxZW";

// =========================================================
// LOGIN COMPONENT
// =========================================================

const Login: React.FC = () => {
  const navigate = useNavigate();

  // ==============================
  // FORM STATE
  // ==============================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ==============================
  // UI STATE
  // ==============================
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Clear any browser-autofilled/stored login values whenever this page loads.
  useEffect(() => {
    setEmail("");
    setPassword("");
    setError("");
    setShowPassword(false);

    // Some browsers/password managers can autofill after React mounts.
    // Clear the actual input elements as well.
    const clearLoginFields = () => {
      const emailInput = document.getElementById(
        "login-email"
      ) as HTMLInputElement | null;
      const passwordInput = document.getElementById(
        "login-password"
      ) as HTMLInputElement | null;

      if (emailInput) emailInput.value = "";
      if (passwordInput) passwordInput.value = "";
    };

    clearLoginFields();
    const timer = window.setTimeout(clearLoginFields, 100);

    return () => window.clearTimeout(timer);
  }, []);

  // ==============================
  // LOGIN SUCCESS STATE
  // ==============================
  const [loginSuccess, setLoginSuccess] = useState(false);

  // ==============================
  // LOGIN HANDLER
  // ==============================
  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    // ----------------------------------
    // STEP 1: VALIDATE INPUT
    // ----------------------------------
    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password) {
      setError(
        "Please enter your email and password."
      );
      return;
    }

    setLoading(true);

    try {
      // ----------------------------------
      // STEP 2: FIREBASE AUTHENTICATION
      // ----------------------------------
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          trimmedEmail,
          password
        );

      const user = userCredential.user;

      console.log(
        "Firebase authentication successful."
      );

      console.log(
        "Authenticated UID:",
        user.uid
      );

      // ----------------------------------
      // STEP 3: GET USER PROFILE
      // ----------------------------------
      const userRef = doc(
        db,
        "users",
        user.uid
      );

      const userSnapshot =
        await getDoc(userRef);

      // ----------------------------------
      // STEP 4: CHECK FIRESTORE PROFILE
      // ----------------------------------
      if (!userSnapshot.exists()) {
        console.error(
          "No Firestore profile found for UID:",
          user.uid
        );

        setError(
          "Your account was authenticated, but your user profile was not found."
        );

        return;
      }

      // ----------------------------------
      // STEP 5: GET USER DATA
      // ----------------------------------
      const userData =
        userSnapshot.data();

      console.log(
        "User profile loaded successfully."
      );

      // ----------------------------------
      // STEP 6: SEND LOGIN SUCCESS EMAIL
      // ----------------------------------
      try {
        const userName =
          typeof userData.name === "string"
            ? userData.name
            : user.displayName ||
              "TechWrap User";

        // Use the email entered during login.
        const userEmail = trimmedEmail;

        // ----------------------------------
        // EMAILJS PARAMETERS
        // Matches the simplified login
        // email template.
        // ----------------------------------
        const templateParams = {
          subject:
            "TechWrap Login Successful",

          name: userName,

          email: userEmail,

          // Send email to the same address
          // used for login.
          to_email: userEmail,

          // Reply address.
          reply_to: userEmail,
        };

        console.log(
          "EmailJS recipient:",
          userEmail
        );

        // ----------------------------------
        // SEND LOGIN SUCCESS EMAIL
        // ----------------------------------
        if (
          LOGIN_EMAILJS_SERVICE_ID &&
          LOGIN_EMAILJS_TEMPLATE_ID &&
          LOGIN_EMAILJS_PUBLIC_KEY
        ) {
          const emailResponse =
            await emailjs.send(
              LOGIN_EMAILJS_SERVICE_ID,
              LOGIN_EMAILJS_TEMPLATE_ID,
              templateParams,
              LOGIN_EMAILJS_PUBLIC_KEY
            );

          console.log(
            "Login success email sent successfully.",
            emailResponse
          );

          console.log(
            "Login success email sent to:",
            userEmail
          );
        } else {
          console.warn(
            "Login EmailJS configuration is missing."
          );
        }
      } catch (emailError) {
        console.error(
          "Login success email failed:",
          emailError
        );
      }

      // ----------------------------------
      // STEP 7: CLEAR LOGIN FORM
      // ----------------------------------
      setEmail("");
      setPassword("");
      setShowPassword(false);

      // ----------------------------------
      // STEP 8: SHOW SUCCESS PAGE
      // ----------------------------------
      setLoginSuccess(true);

    } catch (error: any) {
      console.error(
        "Login error:",
        error
      );

      switch (error?.code) {
        case "auth/invalid-credential":
          setError(
            "Invalid email or password. Please check your credentials and try again."
          );
          break;

        case "auth/user-not-found":
          setError(
            "No account exists with this email address."
          );
          break;

        case "auth/wrong-password":
          setError(
            "Incorrect password. Please try again."
          );
          break;

        case "auth/invalid-email":
          setError(
            "Please enter a valid email address."
          );
          break;

        case "auth/user-disabled":
          setError(
            "This account has been disabled. Please contact support."
          );
          break;

        case "auth/too-many-requests":
          setError(
            "Too many unsuccessful login attempts. Please try again later."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection and try again."
          );
          break;

        case "failed-precondition":
          setError(
            "Unable to access your user profile. Please check your Firestore configuration."
          );
          break;

        case "unavailable":
          setError(
            "Firebase is temporarily unavailable. Please check your internet connection and try again."
          );
          break;

        default:
          setError(
            error?.message ||
              "Unable to login. Please try again."
          );
      }
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // BACK TO HOME
  // ==============================
  const handleBackToHome = () => {
    setLoginSuccess(false);

    navigate("/", {
      replace: true,
    });
  };

  // =========================================================
  // LOGIN SUCCESS PAGE
  // =========================================================

  if (loginSuccess) {
    return (
      <section className="login-success-page">

        {/* =================================================
            SUCCESS BACKGROUND
        ================================================= */}

        <div
          className="login-success-background"
          aria-hidden="true"
        >
          <span className="success-orb success-orb-one"></span>

          <span className="success-orb success-orb-two"></span>

          <span className="success-orb success-orb-three"></span>

          <span className="success-grid"></span>

          <span className="success-floating-shape success-shape-one"></span>

          <span className="success-floating-shape success-shape-two"></span>

          <span className="success-particle success-particle-one"></span>

          <span className="success-particle success-particle-two"></span>

          <span className="success-particle success-particle-three"></span>

          <span className="success-particle success-particle-four"></span>

          <span className="success-particle success-particle-five"></span>

          <span className="success-particle success-particle-six"></span>
        </div>

        {/* =================================================
            SUCCESS CONTAINER
        ================================================= */}

        <main className="login-success-container">

          <div
            className="login-success-card"
            role="status"
            aria-live="polite"
          >

            {/* =================================================
                TOP ACCENT
            ================================================= */}

            <div className="success-card-accent"></div>

            {/* =================================================
                SUCCESS HEADER
            ================================================= */}

            <div className="success-header">

              <div className="success-badge">
                <span className="success-badge-dot"></span>

                Authentication Complete
              </div>

              {/* =============================================
                  SUCCESS ICON
              ============================================= */}

              <div className="success-icon">

                <span className="success-icon-ring"></span>

                <span className="success-icon-ring-two"></span>

                <span className="success-check">
                  ✓
                </span>

              </div>

              {/* =============================================
                  BRAND
              ============================================= */}

              <h1 className="success-brand">
                TechWrap
              </h1>

              <p className="success-eyebrow">
                Welcome to your technology workspace
              </p>

            </div>

            {/* =================================================
                SUCCESS CONTENT
            ================================================= */}

            <div className="success-content">

              <h2>
                Login successful!
              </h2>

            </div>

            {/* =================================================
                DASHBOARD STATUS
            ================================================= */}

            <div className="dashboard-status">

              <div className="status-icon">

                <span className="status-gear">
                  ⚙
                </span>

              </div>

              <div className="status-content">

                <div className="status-title-row">

                  <strong>
                    Dashboard coming soon
                  </strong>

                </div>

                <p>
                  Your TechWrap Dashboard is
                  currently under development.
                  It will be available as soon
                  as it is released.
                </p>

              </div>

            </div>

            {/* =================================================
                THANK YOU MESSAGE
            ================================================= */}

            <div className="success-thanks">

              <span className="thanks-line"></span>

              <p>
                Thanks for logging in and being
                part of TechWrap.
              </p>

              <span className="thanks-line"></span>

            </div>

            {/* =================================================
                BACK BUTTON
            ================================================= */}

            <button
              type="button"
              className="success-back-button"
              onClick={handleBackToHome}
            >

              <span className="button-label">
                Back to Home
              </span>

              <span className="button-arrow">
                →
              </span>

            </button>

            {/* =================================================
                SMALL FOOTER
            ================================================= */}

            <p className="success-footer">
              TechWrap · Build. Integrate. Scale.
            </p>

          </div>

        </main>

      </section>
    );
  }

  // =========================================================
  // LOGIN PAGE
  // =========================================================

  return (
    <section className="login-section">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="login-background"
        aria-hidden="true"
      >

        <span className="login-orb login-orb-one"></span>

        <span className="login-orb login-orb-two"></span>

        <span className="login-orb login-orb-three"></span>

        <span className="login-grid"></span>

        <span className="login-floating-square square-one"></span>

        <span className="login-floating-square square-two"></span>

        <span className="login-floating-square square-three"></span>

      </div>

      {/* =====================================================
          LOGIN CONTAINER
      ===================================================== */}

      <div className="login-container">

        <div className="login-card">

          {/* =================================================
              TOP ACCENT
          ================================================= */}

          <div className="login-card-accent"></div>

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="login-header">

            <div className="login-logo">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="login-security-pill">

              <span className="security-dot"></span>

              Techwrap

            </div>

            <h1 className="brand-title">
              Login
            </h1>

            <p className="login-subtitle">
              Sign in to continue your
              TechWrap workspace.
            </p>

          </div>

          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {error && (
            <div
              className="login-error"
              role="alert"
            >

              <span className="login-error-icon">
                !
              </span>

              <p>
                {error}
              </p>

            </div>
          )}

          {/* =================================================
              LOGIN FORM
          ================================================= */}

          <form
            onSubmit={handleLogin}
            className="login-form"
            autoComplete="off"
          >

            {/* EMAIL */}

            <div className="login-field">

              <label htmlFor="login-email">
                Email Address
              </label>

              <div className="login-input-wrapper">

                <span
                  className="login-input-icon"
                  aria-hidden="true"
                >

                  <svg
                    viewBox="0 0 24 24"
                  >

                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path
                      d="M3 7l9 6 9-6"
                    />

                  </svg>

                </span>

                <input
                  id="login-email"
                  type="email"
                  className="login-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(
                      e.target.value
                    );

                    setError("");
                  }}
                  autoComplete="email"
                  required
                  disabled={loading}
                />

                {email && (
                  <span
                    className="input-check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                )}

              </div>

            </div>

            {/* PASSWORD */}

            <div className="login-field">

              <div className="password-label-row">

                <label htmlFor="login-password">
                  Password
                </label>

              </div>

              <div className="login-input-wrapper">

                <span
                  className="login-input-icon"
                  aria-hidden="true"
                >

                  <svg
                    viewBox="0 0 24 24"
                  >

                    <rect
                      x="5"
                      y="10"
                      width="14"
                      height="10"
                      rx="2"
                    />

                    <path
                      d="M8 10V7a4 4 0 018 0v3"
                    />

                  </svg>

                </span>

                <input
                  id="login-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  className="login-input password-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(
                      e.target.value
                    );

                    setError("");
                  }}
                  autoComplete="current-password"
                  required
                  disabled={loading}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  disabled={loading}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >

                  {showPassword ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >

                      <path
                        d="M3 3l18 18"
                      />

                      <path
                        d="M10.6 10.6a2 2 0 002.8 2.8"
                      />

                      <path
                        d="M9.9 4.3A10.8 10.8 0 0112 4c5.2 0 8.7 4.1 9.8 6a17.7 17.7 0 01-3.2 3.8"
                      />

                      <path
                        d="M6.1 6.1C3.8 7.7 2.5 9.7 2.2 10.2 3.3 12.1 6.8 16 12 16c1.2 0 2.3-.2 3.3-.6"
                      />

                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >

                      <path
                        d="M2.2 10.2C3.3 8.3 6.8 4 12 4s8.7 4.3 9.8 6.2C20.7 12.1 17.2 16 12 16S3.3 12.1 2.2 10.2z"
                      />

                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                      />

                    </svg>
                  )}

                </button>

              </div>

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              <span className="login-button-content">

                {loading ? (
                  <>
                    <span className="login-spinner"></span>

                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In

                    <span className="login-arrow">
                      →
                    </span>
                  </>
                )}

              </span>

            </button>

          </form>

          {/* =================================================
              REGISTER
          ================================================= */}

          <p className="register-bottom">

            Don't have an account?{" "}

            <Link
              to="/pages/Authentication/Register"
              className="signup-link"
            >
              Create Account
            </Link>

          </p>

          {/* =================================================
              SECURITY NOTE
          ================================================= */}

          <div className="login-secure-note">

            <span className="secure-lock">
              ●
            </span>

            Your account information is
            protected by Techwrap
            authentication.

          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;