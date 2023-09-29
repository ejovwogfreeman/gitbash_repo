import React, { useState } from "react";
import Form from "./comps/Form";
import Account from "./comps/Account";
import Transactions from "./comps/Transactions";
import Transaction from "./comps/Transaction";
import "./App.css";
import Toastify from "./comps/Toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  let localData = JSON.parse(localStorage.getItem("transactions"));

  const [transactions, setTransaction] = useState(localData ? localData : []);

  const addTransaction = (transaction) => {
    setTransaction([transaction, ...transactions]);
  };

  localStorage.setItem("transactions", JSON.stringify(transactions));

  const deleteTransaction = (id) => {
    setTransaction(transactions.filter((x) => x.id !== id));
  };

  const income = transactions
    .filter((x) => x.type === "income")
    .map((x) => x.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);
  const expense = transactions
    .filter((x) => x.type === "expense")
    .map((x) => x.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);

  const balance = income - expense;

  return (
    <BrowserRouter>
      <div className="app">
        <Toastify />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Form addTransaction={addTransaction} />
                <Account balance={balance} income={income} expense={expense} />
                <Transactions
                  transactions={transactions}
                  deleteTransaction={deleteTransaction}
                />
              </>
            }
          />
          <Route
            path="/trx/:id"
            element={<Transaction transactions={transactions} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
