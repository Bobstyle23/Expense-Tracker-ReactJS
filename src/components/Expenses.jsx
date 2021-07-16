import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import expenses from "../expenses";
import ExpenseFilter from "./ExpenseFilter";

function Expenses() {
  const [filteredYear, setFilteredYear] = useState("2021");
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default Expenses;
