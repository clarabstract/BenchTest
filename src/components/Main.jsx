import {createElement} from 'react';
import TransactionList from 'components/TransactionList';
import css from './Main.less';
export default function Main () {
  return <div>
    <header className={css.Header}>
      <h1>Bench Test</h1>
    </header>
    <main>
      <TransactionList transactions={[
        {
          date: new Date(),
          ledgerName: 'Frivolities',
          companyName: 'Fancy Keyboard Store Co',
          amount: 23350,
        },{
          date: new Date(),
          ledgerName: 'Necessities',
          companyName: 'Small Victories',
          amount: 416,
        }]} />
    </main>
  </div>;
}