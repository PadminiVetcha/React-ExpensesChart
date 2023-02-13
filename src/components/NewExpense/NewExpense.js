import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const showExpenseFormHandler = () => {
    setIsEditing(true);
  }

  const cancelExpenseFormHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="submit" onClick={showExpenseFormHandler} >
        Add New Expense
      </button> }
      { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseForm={cancelExpenseFormHandler}></ExpenseForm>}
    </div>
  );
}

export default NewExpense;
