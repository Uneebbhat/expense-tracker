import React from "react";
import "./ExpenseBalance.scss";

export default function ExpenseBalance() {
  const userBalance = localStorage.getItem("User Balance");

  return (
    <>
      <div className="expense-balance-section">
        <div className="expense-balance-wrapper">
          <div className="total-balance card">
            <h3 className="card-heading">Total Balance</h3>
            <h2>${userBalance}</h2>
          </div>
          <div className="expense card">
            <h3 className="card-heading">Expense</h3>
            <h2>$0</h2>
          </div>
          <div className="remaining-balance card">
            <h3 className="card-heading">Remaining Balance</h3>
            <h2>$0</h2>
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
