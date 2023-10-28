import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = (props) => {
  let contents = <p>No expewnses found.</p>;
  if (props.filterExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filterExpenses.map((item, idx) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={idx}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
