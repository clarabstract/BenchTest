import {createElement} from 'react';
import PropTypes from 'prop-types';
import css from './TransactionList.less';

function transactionsTotal(transactions) {
  return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
}

export default function TransactionList ({transactions=[]}) {
    console.log(transactions)
  return <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Company</th>
        <th>Account</th>
        <th>{transactionsTotal(transactions)}</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction, idx) => <tr key={idx}>
        <td>{transaction.date.toString()}</td>
        <td>{transaction.companyName}</td>
        <td>{transaction.ledgerName}</td>
        <td>{transaction.amount}</td>
      </tr>)}
    </tbody> 
  </table>;
}

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    ledgerName: PropTypes.string,
    amount: PropTypes.number,
    companyName: PropTypes.string,
  }))
};