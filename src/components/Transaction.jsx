import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const status = transaction.amount < 0 ? "minus" : "plus";

  return (
    <div>
      <li className={status}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
