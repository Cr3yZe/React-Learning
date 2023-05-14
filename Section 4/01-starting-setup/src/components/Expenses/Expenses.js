import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = props => {
  const [newYear, changeYear] = useState('2019');

  const saveNewYearHandler = year => {
    changeYear(year);
  };

  const showExpensesOnYear = () => {
    const yearFilteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === newYear);

    return yearFilteredExpenses;
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selectedYear={newYear} onSelectingNewYear={saveNewYearHandler} />
        {showExpensesOnYear().map(item => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />)
        )}
      </Card>
    </div>
  )
}

export default Expenses