import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddNewTransaction from "./components/AddNewTransaction";

import { TransactionProvider } from "./context/TransactionContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <TransactionProvider>
        <div className="App">
          <div className="container">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddNewTransaction />
          </div>
        </div>
      </TransactionProvider>
    </UserProvider>
  );
}

export default App;
