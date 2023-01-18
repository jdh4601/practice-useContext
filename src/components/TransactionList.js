import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transactions';

function TransactionList() {
  // 전역적으로 사용할 transaction state를
  // useContext hook을 이용해서 멀리서도 가져올 수 있다!
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
