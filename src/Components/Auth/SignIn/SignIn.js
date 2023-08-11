import React, { useState } from "react";
import "./SignIn.scss";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("This user does not exist");
      } else {
        setErrorMessage("An error occurred during login.");
      }
    }
  };

  return (
    <>
      <div className="from">
        <div className="signup-heading">
          <h2>Sign In</h2>
        </div>
        <div className="input-wrapper">
          <div className="email-wrapper">
            <input
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="email"
              onChange={(e) => {
                setLoginEmail(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>
          <div className="password-wrapper">
            <input
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              className="password"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          </div>
          <div className="button">
            <button className="btn" onClick={login}>
              Login
            </button>
          </div>
          <div className="small-text">
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
          {errorMessage && (
            <p severity="error" className="error">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
