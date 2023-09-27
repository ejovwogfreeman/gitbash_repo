import React, { useState } from "react";
import "../css/Form.css";

const Form = ({ addTransaction }) => {
  const [desc, setSDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      desc: desc,
      amount: amount,
      type: type,
      id: Math.random(),
      date: new Date(),
    };
    addTransaction(transaction);
    setSDesc("");
    setAmount("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Transaction</h2>
      <label htmlFor="">Description</label>
      <input
        type="text"
        value={desc}
        placeholder="Enter description"
        onChange={(e) => setSDesc(e.target.value)}
      />
      <label htmlFor="">Amount</label>
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor="">Type</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">income</option>
        <option value="expense">expense</option>
      </select>
      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
