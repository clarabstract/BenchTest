import setTransactionsLoading from 'actions/setTransactionsLoading';
import setTransactionsProblem from 'actions/setTransactionsProblem';
import storeTransactions from 'actions/storeTransactions';

export default function requestTransactions (requestedTransactions) {
  return async (dispatch, getState, {transactionService}) => {
    try {
      let {transactions, availableTransactions, lastFetchedPage} = getState();
      if (transactions.length < requestedTransactions 
          && (availableTransactions === null
            || availableTransactions > requestedTransactions)) {
        dispatch(setTransactionsLoading());
        let page = await transactionService.fetchTransactionPage(lastFetchedPage + 1);
        dispatch(storeTransactions({
          transactions: page.transactions.map(transaction => ({
            date: new Date(transaction.Date),
            ledgerName: transaction.Ledger,
            amount: parseInt(transaction.Amount.replace('.','')),
            companyName: transaction.Company,
          })),
          availableTransactions: page.availableTransactions,
          page: page.page,
        }));
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setTransactionsProblem(err);
    }
  };
}

/*

h  i  j
g  h  i
f  g  h
    
e  f  g
d  e  f
c  d  e
    
b  c  d
a  b  c
   a  b
      
      a

*/