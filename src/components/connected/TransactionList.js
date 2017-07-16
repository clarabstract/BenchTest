import {connect} from 'react-redux';

import requestTransactions from 'actions/requestTransactions';

import TransactionList from '../TransactionList';

export default connect(
  ({transactions, availableTransactions, transactionProblem, transactionsAreLoading}) => ({
    transactions,
    availableTransactions,
    problem: transactionProblem,
    isLoading: transactionsAreLoading,
  }),
  {
    onRequestTransactions: requestTransactions,
  }
)(TransactionList);