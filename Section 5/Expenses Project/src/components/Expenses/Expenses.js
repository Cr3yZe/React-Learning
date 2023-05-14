import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = props => {
  const [newYear, changeYear] = useState('2019');

  const saveNewYearHandler = year => {
    changeYear(year);
  };

  const yearFilteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === newYear);

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selectedYear={newYear} onSelectingNewYear={saveNewYearHandler} />
        <ExpensesChart expenses={yearFilteredExpenses}/>
        <ExpensesList items={yearFilteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses