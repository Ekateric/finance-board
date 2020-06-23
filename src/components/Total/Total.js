import React from 'react';
import PropTypes from 'prop-types';
import './Total.scss';

const subClasses = {
  NEGATIVE: 'total__sum_negative'
};

const Total = (props) => {
  const {sum} = props;
  const subClass = sum < 0 ? subClasses.NEGATIVE : '';

  return (
    <div className="total">
      <h2 className="total__title">Total:</h2>
      <div className={`total__sum ${subClass}`}>{sum}</div>
    </div>
  );
}

Total.propTypes = {
  sum: PropTypes.number.isRequired
};

export default Total;
