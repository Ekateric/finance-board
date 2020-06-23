import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpendingItem from './Item';

const subClasses = {
  NEGATIVE: 'spending-item_negative'
};

class SpendingItemContainer extends Component {
  constructor(props) {
    super(props);
    
    /*this.state = {
      id: this.props.id,
      descr: this.props.descr,
      money: this.props.money,
      isCash: this.props.isCash
    };*/
  }

  render() {
    const data = {
      ...this.props,
      subClass: this.props.money < 0 ? subClasses.NEGATIVE : ''
    };
    return <SpendingItem {...data} />
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
