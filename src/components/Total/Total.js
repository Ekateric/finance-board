import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Total.scss';

class Total extends Component {
  render() {
    const {sum} = this.props;
    const subClass = sum < 0 ? 'total__sum_negative' : '';

    return (
      <div className="total">
        <h2 className="total__title">Total:</h2>
        <div className={`total__sum ${subClass}`}>{sum}</div>
      </div>
    );
  }
}

Total.propTypes = {
  sum: PropTypes.number.isRequired
};

export default Total;
