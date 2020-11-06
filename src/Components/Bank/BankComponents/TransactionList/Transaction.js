import React, { useContext } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";
import { useEffect } from "react";
import Axios from 'axios';

const Transaction = ({ transaction }) => {
  useEffect(() => {
    console.log(transaction);
  });

  const { deleteTransaction } = useContext(GlobalContext);

  let handleDeleteTransaction = (id) => {
    Axios.delete(`/api/transaction/${id}`).then(res => {
      console.log(res.data)
    })

    deleteTransaction(id);
  };
  return (
    <li
      className={
        transaction.amount > 0
          ? "transaction income-green"
          : "transaction expense-red"
      }
    >
      <span className="transaction-text">{transaction.description}</span>
      <span className="transaction-amount">${transaction.amount}</span>
      <button
        className="delete-btn"
        onClick={() => handleDeleteTransaction(transaction.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Transaction;
