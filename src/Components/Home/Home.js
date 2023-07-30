import React from "react";
import "./Home.scss";
import ExpenseBalance from "./ExpenseBalance";
import ExpenseHistory from "./ExpenseHistory";
import NewTransactionForm from "./NewTransactionForm";

export default function Home() {
  return (
    <>
      <section className="main-section">
        <div className="main-section-wrapper">
          <h1 className="large-heading">Expense Tracker</h1>
          <ExpenseBalance />
          <ExpenseHistory />
          <NewTransactionForm />
        </div>
      </section>
    </>
  );
}
