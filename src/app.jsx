import {createElement} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Main from './Main.jsx';

const store = createStore(state => {
  return state;
});

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootEl
);