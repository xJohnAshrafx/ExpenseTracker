import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from './context/GlobalState';

function Transactions({ transactions }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transactions.amount < 0 ? '-' : '+';

  return (
    <div>
      <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
        {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
        <button onClick={() => deleteTransaction(transactions.id)} className='delete-btn'>x</button>
      </li>
    </div>
  );
}

export default Transactions;
