import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id:"1", title: "Car Insurance1", amount: 10, date: new Date(2019, 2, 28) },
  { id:"2", title: "Car Insurance2", amount: 11, date: new Date(2022, 3, 28) },
  {id:"3", title: "Car Insurance3", amount: 12, date: new Date(2022, 4, 28) },
  {id:"4", title: "Car Insurance4", amount: 13, date: new Date(2020, 5, 28) },
  {id:"5", title: "Car Insurance5", amount: 12, date: new Date(2029, 6, 28) },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {return [expense, ...prevExpenses];}
    );
    //console.log("In App.js");
    //console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses exp={expenses} />
    </div>
  );
}

export default App;
