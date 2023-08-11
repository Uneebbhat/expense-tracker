import React from "react";
import "./ExpenseBalance.scss";

export default function ExpenseBalance() {
  const userBalance = localStorage.getItem("User Balance");
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];

  // Extract the prices from the items
  const prices = storedItems.map((item) => item.price);

  // Calculate the total price
  const totalPrice = prices.reduce((acc, price) => acc + parseFloat(price), 0);

  // console.log(totalPrice);

  return (
    <>
      <div className="expense-balance-section">
        <div className="expense-balance-wrapper">
          <div className="total-balance card">
            <h3 className="card-heading">Balance</h3>
            <h2>${userBalance}</h2>
          </div>
          <div className="expense card">
            <h3 className="card-heading">Expense</h3>
            <h2>${totalPrice}</h2>
          </div>
          <div className="remaining-balance card">
            <h3 className="card-heading">Remaining Balance</h3>
            <h2>${userBalance - totalPrice}</h2>
          </div>
          <div className="cash-saved card">
            <h3 className="card-heading">Cash Saved</h3>
            <h2>$0</h2>
          </div>
        </div>
      </div>
    </>
  );
}
