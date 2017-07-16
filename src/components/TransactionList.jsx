import {createElement} from 'react';
import PropTypes from 'prop-types';
import css from './TransactionList.less';

function transactionsTotal(transactions) {
  return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
}

export default function TransactionList ({transactions=[]}) {
  return <table className={css.TransactionList}>
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
        <td className={css.Date}>{transaction.date.toString()}</td>
        <td className={css.Company}>{transaction.companyName}</td>
        <td className={css.Account}>{transaction.ledgerName}</td>
        <td className={css.Amount}>{transaction.amount}</td>
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