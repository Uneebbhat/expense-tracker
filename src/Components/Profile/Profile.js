import React, { useState, useEffect } from "react";
import "./Profile.scss";
import img from "../../assets/user.png";

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [userBalance, setUserBalance] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedBalance = localStorage.getItem("balance");

    if (storedName) {
      setUserName(storedName);
    }

    if (storedBalance) {
      setUserBalance(storedBalance);
    }
  }, []);

  const updateProfile = () => {
    localStorage.setItem("name", userName);
    localStorage.setItem("balance", userBalance);
  };

  return (
    <>
      <section className="profile-section">
        <div className="profile-section-wrapper">
          <div className="user-img">
            <img src={img} alt="user" />
          </div>
          <div className="user-name">
            <h2 className="user-name">{userName}</h2>
            <p>${userBalance}</p>
          </div>
          <div className="profile-update-form">
            <div className="form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Update name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="number"
                name="balance"
                id="balance"
                placeholder="Update balance"
                value={userBalance}
                onChange={(e) => setUserBalance(e.target.value)}
              />
              <div className="button">
                <button className="update-btn" onClick={updateProfile}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
