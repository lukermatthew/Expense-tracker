import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { number } from "../utils/number";

const IncomeExpenses = () => {
  const { transactions } = useContext(TransactionContext);
  // display the transactions
  const amounts = transactions.map((transaction) => transaction.amount);

  // get all the positive amount
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  // get all the negative amount
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${number(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${number(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
