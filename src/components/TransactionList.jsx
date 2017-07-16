import {createElement, Component} from 'react';
import PropTypes from 'prop-types';

import css from './TransactionList.less';

import CurrencyDisplay from 'components/CurrencyDisplay';
import DateDisplay from 'components/DateDisplay';

function transactionsTotal(transactions) {
  return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
}

export default class TransactionList extends Component {
  constructor (props, ...args) {
    super(props, ...args);
    this.state = {
      showTransactions: props.initialTransactionsShown,
    };
  }
  componentWillMount () {
    this.requestTransactions(this.props, this.state);
  }
  componentWillUpdate (nextProps, nextState) {
    this.requestTransactions(nextProps, nextState);
  }

  requestTransactions (props, state) {
    if (this.props.onRequestTransactions) {
      this.props.onRequestTransactions(state.showTransactions);
    }
  }

  render () {
    let transactions = this.props.transactions.slice(0, this.state.showTransactions);
    return <div className={css.TransactionList}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Account</th>
            <th className={css.AmountHeading}>{transactions.length > 0 ? <CurrencyDisplay amount={transactionsTotal(transactions)} /> : '-'}</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, idx) => <tr key={idx}>
            <td className={css.Date}><DateDisplay date={transaction.date} /></td>
            <td className={css.Company}>{transaction.companyName}</td>
            <td className={css.Account}>{transaction.ledgerName}</td>
            <td className={css.Amount}><CurrencyDisplay amount={transaction.amount} /></td>
          </tr>)}
        </tbody> 
      </table>
      {this.props.isLoading && <div className={css.LoadingIndicator}>Loading</div>}
      {this.props.problem !== null && <div className={css.Problem}>
        There was a problem loading your transactions 
        (<tt>{this.props.problem}</tt>) &mdash;
        Please <a href={window.location} onClick={() => window.location.reload()}>try again</a> or
        <a href="mailto:support@bench.co">contact support</a>.
        </div>}
      {this.props.availableTransactions > this.state.showTransactions && <button 
        className={css.ShowMore}
        onClick={() => this.setState({
          showTransactions: this.state.showTransactions + this.props.showMoreTransactions,
        })}>
        Show more
      </button>}
    </div>;
  }
}
TransactionList.defaultProps = {
  initialTransactionsShown: 10,
  showMoreTransactions: 10,
  isLoading: false,
  problem: null,
  availableTransactions: 0,
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    ledgerName: PropTypes.string,
    amount: PropTypes.number,
    companyName: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
  problem: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.string,
  ]),
  availableTransactions: PropTypes.number,
  initialTransactionsShown: PropTypes.number,
  showMoreTransactions: PropTypes.number,
  onRequestTransactions: PropTypes.func,
};