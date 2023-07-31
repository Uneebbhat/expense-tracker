import React, { useState } from "react";
import "./ExpenseHistory.scss";

export default function ExpenseHistory() {
  const itemName = localStorage.getItem("ItemName");
  const itenPrice = localStorage.getItem("ItemPrice");
  const [historyBox, setHistoryBox] = useState([]);

  return (
    <>
      <div className="expense-history-section">
        <div className="expense-history-wrapper">
          <h2 className="small-heading">History</h2>
          <hr className="hr" />
          <div className="history-wrapper">
            {historyBox.map((item, id) => (
              <div className="history-box" key={id}>
                <div className="history-item-name">
                  <p className="para">{item.itemName}</p>
                </div>
                <div className="history-item-price">
                  <p className="para">${item.itenPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
