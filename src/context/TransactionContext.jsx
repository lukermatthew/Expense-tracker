import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: 100 },
    { id: 2, text: "Electricity", amount: -1400 },
    { id: 3, text: "Water", amount: -500 },
    { id: 4, text: "Utilities", amount: 3000 },
  ],
};

// Create context
export const TransactionContext = createContext(initialState);

// Provider component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
