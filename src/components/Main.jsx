import {createElement} from 'react';

import TransactionList from 'components/connected/TransactionList';

import css from './Main.less';

export default function Main () {
  return <div>
    <header className={css.Header}>
      <h1>Bench Test</h1>
    </header>
    <main>
      <TransactionList showMoreTransactions={5} />
    </main>
  </div>;
}