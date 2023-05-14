import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
  if (props.items.length === 0) {
    return (<h2 className="expenses-list__fallback">There is no expens for this year!</h2>);
  }

  return (
    <ul className="expenses-list">
      {props.items.map(item => (
        <ExpenseItem
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;