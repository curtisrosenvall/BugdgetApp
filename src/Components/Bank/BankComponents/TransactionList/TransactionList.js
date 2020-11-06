import React, {useContext} from 'react';
import {GlobalContext} from '../../../../Context/GlobalState'
import Transaction from '../TransactionList/Transaction';
import {useEffect} from 'react';
import Axios from 'axios';


const TransactionList = () => {
    const {transactions, initializeTransactions} = useContext(GlobalContext)

    useEffect(() => {
        Axios.get('/api/transaction/list')
        .then(res => {
            console.log(res)
          initializeTransactions(res.data.map(tran => {
              return {...tran, amount: +tran.amount}
          }))
        })
      },[]) 
      console.log(transactions)
    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;
