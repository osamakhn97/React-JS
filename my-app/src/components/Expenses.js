
import ExpensesFilter from "./newExpanses/ExpensesFilter.js";
import { useState } from "react";
import "./Expenses.css";
import Card from "./Card.js";
import ExpensesList from "./ExpensesList.js";
import ExpenseChart from "./ExpensesChart.js";

function Expenses(props) {
  const [fil, setFil] = useState("2019");

  // const exp = props.items;
  const filterChangeHandler = (filter) => {
    console.log(filter);
    setFil(filter);
  };
const filteredExpenses = props.items.filter(expenses=>{
  return expenses.date.getFullYear().toString() === fil

})



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={fil} filterChange={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses}/>

        <ExpensesList items = {filteredExpenses}/>
        {/* <ExpenseItem title = {exp[0].title} amount={exp[0].amount} date ={exp[0].date}></ExpenseItem>
      <ExpenseItem title = {exp[1].title} amount={exp[1].amount} date ={exp[1].date}></ExpenseItem>
      <ExpenseItem title = {exp[2].title} amount={exp[2].amount} date ={exp[2].date}></ExpenseItem>
      <ExpenseItem title = {exp[3].title} amount={exp[3].amount} date ={exp[3].date}></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
