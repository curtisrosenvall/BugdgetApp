import React, { useContext } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  const amounts = transactions.map((transaction) => transaction.amount);
  let totalIncome = amounts.reduce((acc, item) => {
    if (item > 0) {
      return (acc += +item);
    } else {
      return acc;
    }
  }, 0);
  let totalExpense = amounts.reduce((acc, item) => {
    if (item < 0) {
      return (acc += +item);
    } else {
      return acc;
    }
  }, 0);
  
  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${+totalIncome + +totalExpense}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>${totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
