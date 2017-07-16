export default function reduceTransactions ({
  transactions,
  availableTransactions,
  lastFetchedPage,
  transactionsAreLoading,
  transactionProblem,
  ...state
}, {type, payload}) {
  switch(type) {
  case 'STORE_TRANSACTIONS': {
    transactionsAreLoading = false;
    transactions = transactions.concat(payload.transactions);
    availableTransactions = payload.availableTransactions;
    lastFetchedPage = payload.page;
  } break;
  case 'SET_TRANSACTION_PROBLEM': {
    transactionsAreLoading = false;
    transactionProblem = payload;
  } break;
  case 'SET_TRANSACTION_LOADING': {
    transactionsAreLoading = true;
  } break;
  }
  return {
    transactions,
    availableTransactions,
    lastFetchedPage,
    transactionsAreLoading,
    transactionProblem,
    ...state
  };
}