import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import PieChart from "./components/PieChart/PieChart";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Wash",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "For React Training", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Laptops",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "Table-Chair",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];



const App = ()=> {

  const[expenses, setExpenses]= useState(DUMMY_EXPENSES);

 
  const addExpenseHandler=expense=> {
    setExpenses((prevExpenses)=>{
      return[expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses item={expenses} />
    </div>
  );
}

export default App;
