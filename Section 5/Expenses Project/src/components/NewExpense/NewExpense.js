import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = props => {
  const [formState, setFormState] = useState(false);

  const receiveDataHandler = expenseData => {
    const expense = {
      ...expenseData,
      id: Math.random(),
    };

    props.onReceiveData(expense);
  };

  const showFormExpense = () => {
    setFormState(true);
  };

  const hideFormExpense = () => {
    setFormState(false);
  };

  if (!formState) {
    return (
      <div className="new-expense">
        <button onClick={showFormExpense}>Add New Expense</button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm onHide={hideFormExpense} onSaveData={receiveDataHandler}/>
    </div>
  )
};

export default NewExpense;