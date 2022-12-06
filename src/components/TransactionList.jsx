import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
