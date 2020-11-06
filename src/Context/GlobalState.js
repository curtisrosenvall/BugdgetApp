import React, { createContext, useReducer } from "react";
import BankReducer from "./BankReducer";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BankReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const initializeTransactions = (list) => {
    dispatch({
      type: "INITIALIZE_TRANSACTIONS",
      payload: list,
    });
  };
  

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        initializeTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
