import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import "../src/styles/Expenses.css";
import expenses from "./expenses";

function App() {
  const [userExpenses, setUserExpenses] = useState(expenses);
  function addExpenseHandler(expense) {
    setUserExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={userExpenses} />
    </div>
  );
}

export default App;
