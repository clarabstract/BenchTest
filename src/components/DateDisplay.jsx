import {createElement} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const FORMATS = {
  short: 'MMM Do, Y',
};

export default function DateDisplay ({date, format}) {
  return <time dateTime={date.toISOString()} title={date.toString()}>
    {moment(date).format(FORMATS[format])}
  </time>;

}

DateDisplay.defaultProps = {
  format: 'short',
};

DateDisplay.propTypes = {
  date: PropTypes.instanceOf(Date),
  format: PropTypes.oneOf(Object.keys(FORMATS)),
};