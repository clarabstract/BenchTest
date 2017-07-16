import {createElement} from 'react';
import PropTypes from 'prop-types';
function thousandSeparator(amount) {
  if (amount.length > 3) {
    return `${thousandSeparator(amount.slice(0,-3))},${amount.slice(-3)}`;
  } else {
    return amount;
  }
}
// Supports only USD (in pennies) - break out react-intl if needing to support other currencies
export default function CurrencyDisplay ({amount}) {
  let stringAmount = String(Math.abs(amount));
  let currencyString = `$${thousandSeparator(stringAmount.slice(0,-2))}.${stringAmount.slice(-2)}`;
  if (amount < 0) {
    return <span>(<em>{currencyString}</em>)</span>;
  } else {
    return <span>{currencyString}</span>;
  }

}

CurrencyDisplay.propTypes = {
  amount: PropTypes.number, // in pennies
};