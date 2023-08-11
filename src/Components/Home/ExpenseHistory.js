import React, { useState, useEffect } from "react";
import "./ExpenseHistory.scss";

export default function ExpenseHistory() {
  const itemName = localStorage.getItem("name");
  const itemPrice = localStorage.getItem("price");
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setHistoryItems(storedItems);
  }, []);
  return (
    <>
      <div className="expense-history-section">
        <div className="expense-history-wrapper">
          <h2 className="small-heading">History</h2>
          <hr className="hr" />
          <div className="history-wrapper">
            {historyItems.length > 0 ? (
                historyItems.map((item, index) => (
                    <div key={index} className="history-box">
                      <div className="history-item-name">
                        <p className="para">{item.name}</p>
                      </div>
                      <div className="history-item-price">
                        <p className="para">${item.price}</p>
                      </div>
                    </div>
                ))
            ) : (
                <h2 className="history-message">No history items available.</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
