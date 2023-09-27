import React from "react";
import "../css/Transaction.css";
import { BsTrash } from "react-icons/bs";

const Transaction = ({ transaction, deleteTransaction }) => {
  return (
    <div className="trx">
      {transaction.length > 0
        ? transaction.map((x) => {
            return (
              <div key={Math.random()}>
                <section>
                  <h3>{x.desc}</h3>
                  <span className={x.type === "expense" ? "exp" : "inc"}>
                    {x.type === "expense" ? "-" : "+"}
                    {x.amount}
                  </span>
                </section>
                <BsTrash onClick={() => deleteTransaction(x.id)} />
              </div>
            );
          })
        : "You have no transaction yet"}
    </div>
  );
};

export default Transaction;
