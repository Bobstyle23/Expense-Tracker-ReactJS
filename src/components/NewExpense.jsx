import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../styles/NewExpense.css";

function NewExpense(props) {
  const [addExpense, setAddExpense] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  }

  function addExpenseHandler() {
    setAddExpense(true);
  }
  function stopAddExpenseHandler() {
    setAddExpense(false);
  }
  return (
    <div className="new-expense">
      {!addExpense && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
