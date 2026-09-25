import { useState } from "react";
import type { FormEvent } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../../Firebase/Firebase";

import "./Register.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* =========================================================
     SUCCESS POPUP
  ========================================================= */

  const [showSuccessPopup, setShowSuccessPopup] =
    useState(false);

  /* =========================================================
     PASSWORD REQUIREMENTS
  ========================================================= */

  const hasMinimumLength =
    password.length >= 8;

  const hasLetter =
    /[A-Za-z]/.test(password);

  const hasNumber =
    /\d/.test(password);

  const hasSpecialCharacter =
    /[^A-Za-z\d]/.test(password);

  const isStrongPassword =
    hasMinimumLength &&
    hasLetter &&
    hasNumber &&
    hasSpecialCharacter;

  /* =========================================================
     PASSWORD STATUS MESSAGE
  ========================================================= */

  const getPasswordStatus = () => {
    if (!password) {
      return "Minimum 8 characters with a letter, number & special character.";
    }

    if (isStrongPassword) {
      return "Strong password ✓";
    }

    const missingRequirements: string[] = [];

    if (!hasMinimumLength) {
      const remainingCharacters =
        8 - password.length;

      missingRequirements.push(
        `${remainingCharacters} more character${
          remainingCharacters === 1
            ? ""
            : "s"
        }`
      );
    }

    if (!hasLetter) {
      missingRequirements.push(
        "a letter"
      );
    }

    if (!hasNumber) {
      missingRequirements.push(
        "a number"
      );
    }

    if (!hasSpecialCharacter) {
      missingRequirements.push(
        "a special character"
      );
    }

    return `Need ${missingRequirements.join(
      ", "
    )}.`;
  };

  /* =========================================================
     REGISTER
  ========================================================= */

  const handleRegister = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    /* -------------------------------------------------------
       PASSWORD MATCH
    ------------------------------------------------------- */

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    /* -------------------------------------------------------
       STRONG PASSWORD VALIDATION
    ------------------------------------------------------- */

    if (!isStrongPassword) {
      setError(
        "Password must contain at least 8 characters, one letter, one number, and one special character."
      );
      return;
    }

    setLoading(true);

    try {
      /* -----------------------------------------------------
         CREATE FIREBASE ACCOUNT
      ----------------------------------------------------- */

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      /* -----------------------------------------------------
         UPDATE DISPLAY NAME
      ----------------------------------------------------- */

      await updateProfile(user, {
        displayName: name,
      });

      /* -----------------------------------------------------
         CREATE FIRESTORE PROFILE
         PUBLIC REGISTRATION = USER
      ----------------------------------------------------- */

      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          name: name,
          email: email,
          role: "user",
          createdAt: serverTimestamp(),
        }
      );

      /* -----------------------------------------------------
         SHOW CUSTOM SUCCESS POPUP
      ----------------------------------------------------- */

      setShowSuccessPopup(true);

    } catch (error: any) {
      console.error(
        "Registration error:",
        error
      );

      switch (error?.code) {
        case "auth/email-already-in-use":
          setError(
            "An account already exists with this email."
          );
          break;

        case "auth/invalid-email":
          setError(
            "Please enter a valid email address."
          );
          break;

        case "auth/weak-password":
          setError(
            "Password is too weak. Use at least 8 characters with a letter, number, and special character."
          );
          break;

        default:
          setError(
            "Registration failed. Please try again."
          );
      }
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     LIVE INPUT VALIDATION STATES
  ========================================================= */

  const passwordHasError =
    password.length > 0 &&
    !isStrongPassword;

  const confirmPasswordHasError =
    confirmPassword.length > 0 &&
    password !== confirmPassword;

  const confirmPasswordMatches =
    confirmPassword.length > 0 &&
    password === confirmPassword;

  /* =========================================================
     BACK TO HOME
  ========================================================= */

  const handleBackToHome = () => {
    setShowSuccessPopup(false);

    navigate("/", {
      replace: true,
    });
  };

  return (
    <section className="signup-page">

      {/* =====================================================
          CENTERED SIGNUP CARD
      ===================================================== */}

      <main className="signup-center">

        <div className="signup-card">

          {/* =================================================
              TOP ACCENT
          ================================================= */}

          <div className="signup-card-top-line"></div>

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="signup-card-header">

            <div className="mobile-logo-mark">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h2>
              Create your account
            </h2>

            <p>
              Enter your details to get started.
            </p>

          </div>

          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <div
              className="signup-error"
              role="alert"
            >
              <span>!</span>

              <p>
                {error}
              </p>
            </div>
          )}

          {/* =================================================
              FORM
          ================================================= */}

          <form onSubmit={handleRegister}>

            {/* ===============================================
                FULL NAME
            =============================================== */}

            <div className="input-group">

              <label htmlFor="name">
                Name
              </label>

              <div className="input-wrapper">

                <span
                  className="input-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="3.5"
                    />

                    <path d="M5 20c.7-3.5 3.2-5.5 7-5.5s6.3 2 7 5.5" />
                  </svg>
                </span>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => {
                    setName(
                      e.target.value
                    );
                    setError("");
                  }}
                  required
                  disabled={loading}
                  autoComplete="name"
                />

              </div>

            </div>

            {/* ===============================================
                EMAIL
            =============================================== */}

            <div className="input-group">

              <label htmlFor="email">
                Work email
              </label>

              <div className="input-wrapper">

                <span
                  className="input-icon"
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

                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>

                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(
                      e.target.value
                    );
                    setError("");
                  }}
                  required
                  disabled={loading}
                  autoComplete="email"
                />

              </div>

            </div>

            {/* ===============================================
                PASSWORD
            =============================================== */}

            <div className="input-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">

                <span
                  className="input-icon"
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

                    <path d="M8 10V7a4 4 0 018 0v3" />
                  </svg>
                </span>

                <input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => {
                    setPassword(
                      e.target.value
                    );
                    setError("");
                  }}
                  required
                  disabled={loading}
                  autoComplete="new-password"
                  className={
                    passwordHasError
                      ? "input-error"
                      : ""
                  }
                />

              </div>

              {/* =============================================
                  LIVE PASSWORD STATUS
              ============================================= */}

              {password &&
              isStrongPassword ? (
                <div className="password-match">

                  <span>✓</span>

                  Strong password

                </div>
              ) : (
                <span
                  className={
                    passwordHasError
                      ? "input-hint input-hint-error"
                      : "input-hint"
                  }
                >
                  {getPasswordStatus()}
                </span>
              )}

            </div>

            {/* ===============================================
                CONFIRM PASSWORD
            =============================================== */}

            <div className="input-group">

              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="input-wrapper">

                <span
                  className="input-icon"
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

                    <path d="M8 10V7a4 4 0 018 0v3" />
                  </svg>
                </span>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(
                      e.target.value
                    );
                    setError("");
                  }}
                  required
                  disabled={loading}
                  autoComplete="new-password"
                  className={
                    confirmPasswordHasError
                      ? "input-error"
                      : ""
                  }
                />

              </div>

              {/* =============================================
                  CONFIRM PASSWORD STATUS
              ============================================= */}

              {confirmPasswordMatches && (
                <div className="password-match">

                  <span>✓</span>

                  Passwords match

                </div>
              )}

              {confirmPasswordHasError && (
                <span className="input-hint input-hint-error">

                  Passwords do not match.

                </span>
              )}

            </div>

            {/* ===============================================
                TERMS
            =============================================== */}

            <label className="terms-checkbox">

              <input
                type="checkbox"
                required
                disabled={loading}
              />

              <span className="custom-checkbox">
                ✓
              </span>

              <span className="terms-text">

                I agree to TechWrap's{" "}

                <a href="#">
                  Terms of Service
                </a>{" "}

                and{" "}

                <a href="#">
                  Privacy Policy
                </a>
                .

              </span>

            </label>

            {/* ===============================================
                CREATE ACCOUNT BUTTON
            =============================================== */}

            <button
              type="submit"
              className="create-account-button"
              disabled={
                loading ||
                !isStrongPassword ||
                password !== confirmPassword
              }
            >

              {loading ? (
                <>
                  <span className="button-spinner"></span>

                  Creating account...
                </>
              ) : (
                <>
                  Create Account

                  <span className="button-arrow">
                    →
                  </span>
                </>
              )}

            </button>

          </form>

          {/* =================================================
              LOGIN
          ================================================= */}

          <p className="login-bottom">

            Already have an account?{" "}

            <Link to="/login">
              Sign in
            </Link>

          </p>

          {/* =================================================
              SECURITY
          ================================================= */}

          <div className="secure-note"></div>

        </div>

      </main>

      {/* =====================================================
          ACCOUNT CREATED SUCCESS POPUP
      ===================================================== */}

      {showSuccessPopup && (
        <div
          className="success-popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-popup-title"
        >

          <div className="success-popup">

            {/* ---------------------------------------------
                SUCCESS ICON
            --------------------------------------------- */}

            <div className="success-popup-icon">
              <span>✓</span>
            </div>

            {/* ---------------------------------------------
                TECHWRAP BRAND
            --------------------------------------------- */}

            <h2
              className="success-popup-brand"
              id="success-popup-title"
            >
              TechWrap
            </h2>

            {/* ---------------------------------------------
                SUCCESS MESSAGE
            --------------------------------------------- */}

            <h3>
              Account created successfully!
            </h3>

            <p className="success-popup-text">
              Your TechWrap account has been created
              successfully. Welcome to TechWrap.
            </p>

            {/* ---------------------------------------------
                BACK BUTTON
            --------------------------------------------- */}

            <button
              type="button"
              className="success-popup-button"
              onClick={handleBackToHome}
            >
              Back to Home
              <span>→</span>
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Signup;