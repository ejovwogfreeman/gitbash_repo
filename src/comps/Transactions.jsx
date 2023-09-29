import React from "react";
import "../css/Transaction.css";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Transactions = ({ transactions, deleteTransaction }) => {
  return (
    <div className="trx">
      {transactions.length > 0
        ? transactions.map((x) => {
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
                <Link to={`/trx/${x.id}`} className="details">
                  see details
                </Link>
              </div>
            );
          })
        : "You have no transaction yet"}
    </div>
  );
};

export default Transactions;
