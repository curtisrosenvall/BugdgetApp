import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";
import Axios from 'axios';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  let [incomeTransaction, setIncomeTransaction] = useState({
    incomeDescription: "",
    incomeAmount: 0,
  });
  let { incomeDescription, incomeAmount } = incomeTransaction;

  let [expenseTransaction, setExpenseTransaction] = useState({
    expenseDescription: "",
    expenseAmount: 0,
  });
  let { expenseDescription, expenseAmount } = expenseTransaction;

  const onChangeTransaction = (e, type) => {
    if (type === 'expense'){
      setExpenseTransaction({ ...expenseTransaction, [e.target.name]: e.target.value });
    } else {
      setIncomeTransaction({ ...incomeTransaction, [e.target.name]: e.target.value });
    }
  };
  const onSubmitTransaction = (e, type) => {
    e.preventDefault();
    let newTransaction = {
      description: incomeDescription,
      amount: +incomeAmount,
    };
    if (type === 'expense'){
      newTransaction = {
        description: expenseDescription,
        amount: expenseAmount * -1,
      };
    }

    Axios.post(`/api/transaction/create`, newTransaction)
    .then(res => {
      console.log(res)
      addTransaction(res.data);
  
      if (type === 'expense'){
        setExpenseTransaction({
          expenseDescription: "",
          expenseAmount: 0,
      });
      } else {
        setIncomeTransaction({
          incomeDescription: "",
          incomeAmount: 0,
      });
      }
    })

  };

  return (
    <div className="form-wrapper">
      <form onSubmit={(e) => onSubmitTransaction(e, 'income')}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeDescription"
            value={incomeDescription}
            placeholder="Add Income"
            autoComplete="off"
            onChange={(e) => onChangeTransaction(e, "income")}
          />
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={(e) => onChangeTransaction(e, "income")}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={(e) => onSubmitTransaction(e, 'expense')}> 
        <div className="input-group expense">
          <input
            type="text"
            name="expenseDescription"
            value={expenseDescription}
            placeholder="Add Expense"
            autoComplete="off"
            onChange={(e) => onChangeTransaction(e, "expense")}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={(e) => onChangeTransaction(e, "expense")}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
