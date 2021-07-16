import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import "../src/styles/Expenses.css";

function App() {
  function addExpenseHandler(expense) {
    console.log(expense);
  }
  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
}

export default App;
