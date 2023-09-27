import React, { useState } from "react";
import Form from "./comps/Form";
import Account from "./comps/Account";
import Transaction from "./comps/Transaction";
import "./App.css";

const App = () => {
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (trx) => {
    setTransaction([trx, ...transaction]);
  };

  const deleteTransaction = (id) => {
    setTransaction(transaction.filter((x) => x.id !== id));
  };

  const income = transaction
    .filter((x) => x.type === "income")
    .map((x) => x.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);
  const expense = transaction
    .filter((x) => x.type === "expense")
    .map((x) => x.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);

  const balance = income - expense;

  console.log(transaction);
  return (
    <div className="app">
      <Form addTransaction={addTransaction} />
      <Account balance={balance} income={income} expense={expense} />
      <Transaction
        transaction={transaction}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;
