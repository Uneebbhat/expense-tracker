import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
            <button className="header-btn">
              <Link to="/signin">Sign out</Link>
            </button>
          </nav>
        </header>
      </div>
    </>
  );
}
