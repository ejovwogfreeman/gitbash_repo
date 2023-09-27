import React from "react";
import "../css/Account.css";

const Account = ({ balance, income, expense }) => {
  return (
    <div className="account">
      <div>Bal: {balance}</div>
      <div>
        <span>Income: {income}</span>
        <span>Expense: {expense}</span>
      </div>
    </div>
  );
};

export default Account;
