import React, {Component} from 'react';
import SpendingItem from './Item';

class SpendingItemContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.id,
      descr: this.props.descr,
      money: this.props.money
    };
  }

  render() {
    return <SpendingItem {...this.state} />
  }
}

export default SpendingItemContainer;
