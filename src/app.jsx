import {createElement} from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import Main from 'components/Main';
import reduceTransactions from 'reducers/reduceTransactions';
import TransactionService from 'TransactionService';

let transactionService = new TransactionService('http://resttest.bench.co');

const store = createStore((state, action) => {
  return reduceTransactions(state, action);
}, {
  transactions: [],
  availableTransactions: null,
  lastFetchedPage: 0,
  transactionsAreLoading: false,
  transactionProblem: null,
}, applyMiddleware(thunk.withExtraArgument({
  transactionService,
})));

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootEl
);