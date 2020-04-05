import React, {Component} from 'react';
import './Total.scss';

class Total extends Component {
  render() {
    const {sum} = this.props;

    return (
      <div className="total">
        <h2>Total</h2>
        <div>{sum}</div>
      </div>
    );
  }
}

export default Total;
