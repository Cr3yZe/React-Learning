import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense"
import Expenses from "./components/Expenses/Expenses";

function App() {
  const [allExpenses, changeStateExpenses] = useState([]);

  const saveDataHandler = expenseData => {
    changeStateExpenses(prevState => {
      return [
        expenseData,
        ...prevState,
      ]
    })
  };
  

  return (
    <div>
      <NewExpense onReceiveData={saveDataHandler}/> 
      <Expenses expenses={allExpenses} />
    </div>
  );
};

export default App;
