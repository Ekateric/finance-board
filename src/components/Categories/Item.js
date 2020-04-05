import React, {Component} from 'react';

class CategoriesItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index,
      moneySum: this.props.moneySum
    };
  }

  handleChange = (evt) => {
    this.setState({
      moneySum: Number(evt.target.value)
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.updateCategory(this.state);
  }

  render() {
    const {title} = this.props;

    return (
      <li className="categories-item">
        <h3>{title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.moneySum}
            onChange={this.handleChange} />
          <button type="submit">
            Save
          </button>
        </form>
      </li>
    );
  }
}

export default CategoriesItem;