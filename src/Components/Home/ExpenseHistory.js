import React from "react";
import "./ExpenseHistory.scss";

export default function ExpenseHistory() {
  const itemName = localStorage.getItem("ItemName");
  const itenPrice = localStorage.getItem("ItemPrice");

  return (
    <>
      <div className="expense-history-section">
        <div className="expense-history-wrapper">
          <h2 className="small-heading">History</h2>
          <hr className="hr" />
          <div className="history-wrapper">
            <div className="history-box">
              <div className="history-item-name">
                <p className="para">{itemName}</p>
              </div>
              <div className="history-item-price">
                <p className="para">${itenPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
