import React, { useState } from "react";
import "../styles/AuthModal.css";

function AuthModal({ onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => setIsSignUp((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isSignUp ? "Account Created!" : "Logged In!");
    onClose();
  };

  return (
    <div
      className="overlay-panel"
      role="dialog"
      aria-modal="true"
      onClick={(e) =>
        e.target.classList.contains("overlay-panel") && onClose()
      }
    >
      <button className="popup-close" onClick={onClose}>
        ×
      </button>

      <div className={`auth-popup ${isSignUp ? "signup-mode" : "login-mode"}`}>
        <div className="form-wrapper">
          {/* Login Form */}
          <form
            className={`auth-form login-form ${
              !isSignUp ? "active" : "hidden"
            }`}
            onSubmit={handleSubmit}
          >
            <h3>Login</h3>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="btn-submit">
              Login
            </button>
            <p>
              Don’t have an account?{" "}
              <span className="link" onClick={handleSwitch}>
                Sign Up
              </span>
            </p>
          </form>

          {/* Sign Up Form */}
          <form
            className={`auth-form signup-form ${
              isSignUp ? "active" : "hidden"
            }`}
            onSubmit={handleSubmit}
          >
            <h3>Sign Up</h3>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="btn-submit">
              Create Account
            </button>
            <p>
              Already have an account?{" "}
              <span className="link" onClick={handleSwitch}>
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
