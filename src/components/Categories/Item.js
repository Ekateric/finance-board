import React, {Component} from 'react';

class CategoriesItem extends Component {

  render() {
    const {title, moneySum} = this.props;

    return (
      <li className="categories-item">
        <h3>{title}</h3>
        <div>{moneySum}</div>
      </li>
    );
  }
}

export default CategoriesItem;