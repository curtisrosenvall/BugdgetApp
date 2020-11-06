import React from "react";
import "./Bank.scss";
import BankHeader from "./BankComponents/BankHeader/BankHeader";
import Balance from "./BankComponents/Balance/Balance";
import AddTransaction from "./BankComponents/AddTransaction/AddTransaction";
import TransactionList  from "./BankComponents/TransactionList/TransactionList";
import {
  GlobalContext,
  GlobalContextProvider,
} from "../../Context/GlobalState";
import {useEffect} from 'react';
import Axios from "axios";




const Bank = () => {
  
  return (
    <GlobalContextProvider>
      <div className="bank-container">
        <div className="bank-wrapper">
          <BankHeader />
          <Balance />
          <AddTransaction />
          <TransactionList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default Bank;
