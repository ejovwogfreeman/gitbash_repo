import React from "react";
import "../css/Transaction.css";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Transaction = ({ transactions, deleteTransaction }) => {
  const params = useParams();

  return (
    <div className="trx">
      <Link to="/" className="back">
        <BsFillArrowLeftCircleFill />
      </Link>
      <br /> <br />
      {transactions.map((x) =>
        Number(x.id) === Number(params.id) ? (
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
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Transaction;
