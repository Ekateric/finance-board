import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpendingItem from './Item';

class SpendingItemContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.id,
      descr: this.props.descr,
      money: this.props.money,
      isCash: this.props.isCash
    };
  }

  render() {
    return <SpendingItem {...this.state} />
  }
}

SpendingItemContainer.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  descr: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
  isCash: PropTypes.bool
};

export default SpendingItemContainer;
