import React, { useState } from "react";
import "./Profile.scss";
import img from "../../assets/user.png";

export default function Profile() {
  const [userName, setUseName] = useState("");
  const [userBalance, setUseBalance] = useState("");

  const updateProfile = () => {
    const newName = userName;
    const newBalance = userBalance;
    localStorage.setItem("userName", newName);
    localStorage.setItem("userBalance", newBalance);
    setUseName(newName);
    setUseBalance(newBalance);
    console.log("updated");
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
                onChange={(e) => {
                  setUseName(e.target.value);
                }}
              />
              <input
                type="number"
                name="balance"
                id="balance"
                placeholder="Update balance"
                value={userBalance}
                onChange={(e) => {
                  setUseBalance(e.target.value);
                }}
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
