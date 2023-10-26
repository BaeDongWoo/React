import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onExpenseData = (expenses) => {
    const expenseData = {
      ...expenses,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.addExpenseData(expenses);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseData={onExpenseData} />
    </div>
  );
};

export default NewExpense;
