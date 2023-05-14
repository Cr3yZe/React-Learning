import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = props => {
  const receiveDataHandler = expenseData => {
    const expense = {
      ...expenseData,
      id: Math.random(),
    };

    props.onReceiveData(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={receiveDataHandler}/>
    </div>
  )
};

export default NewExpense;