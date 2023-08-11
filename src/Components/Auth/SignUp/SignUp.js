import React, { useState, useEffect } from "react";
import "./SignUp.scss";
import { auth } from "../../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [registerEmail, setReisterEmail] = useState("");
  const [registerPassowrd, setReisterPassowrd] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassowrd
      );
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already in use");
      } else {
        setErrorMessage("An error occurred during registration.");
      }
    }
  };

  return (
    <>
      <div className="from">
        <div className="signup-heading">
          <h2>Sign Up</h2>
        </div>
        <div className="input-wrapper">
          <div className="email-wrapper">
            <input
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="email"
              onChange={(e) => {
                setReisterEmail(e.target.value);
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
                setReisterPassowrd(e.target.value);
              }}
            />
          </div>
          <div className="button">
            <button className="btn" onClick={register}>
              Register
            </button>
          </div>
          <div className="small-text">
            <p>
              Already have an account? <Link to="/signin">Sign in here</Link>
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
