import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter((expenseData) => {
    return expenseData.date.getFullYear().toString() === filteredYear;
  });
  let contents = <p>No expewnses found.</p>;
  if (filterExpenses.length > 0) {
    contents = filterExpenses.map((item, idx) => (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={idx}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {contents}
    </Card>
  );
};

export default Expenses;
