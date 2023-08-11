import React, { useState } from "react";
import "./NewTransactionForm.scss";

export default function NewTransactionForm() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const addExpense = () => {
    const existingItem = JSON.parse(localStorage.getItem('items')) || [];

    const newItem = { name: itemName, price: itemPrice}

    const updateItem = [...existingItem, newItem]

    localStorage.setItem('items', JSON.stringify(updateItem))

    setItemName("")
    setItemPrice(0)
  }


  return (
    <>
      <div className="new-transaction-section">
        <div className="new-transaction-wrapper">
          <div className="heading">
            <h2 className="small-heading">Add New Transaction</h2>
          </div>
          <hr className="hr" />
          <div className="from-wrapper">
            <div className="form-heading">
              <h2 className="small-heading">Item Details</h2>
              <div className="form">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter item name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Enter ammount"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                />
                <div className="buttons">
                  <button className="add-cash">Add cash</button>
                  <button className="add-expense" onClick={addExpense}>Add expense</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
