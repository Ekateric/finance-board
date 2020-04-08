import React, {Component} from 'react';

class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: this.props.title || '',
      moneySum: this.props.moneySum || ''
    };

    this.state = this.initialState;
  }

  handleChange = (evt) => {
    let {name, value} = evt.target;

    if (name === 'moneySum') {
      value = Number(value);

      if (isNaN(value)) {
         return;
      }
    }

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {title, moneySum} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter title" 
          name="title"
          value={title}
          onChange={this.handleChange} />
        <input 
          type="text" 
          placeholder="Enter money value" 
          name="moneySum"
          value={moneySum}
          onChange={this.handleChange} />
        <button type="submit">
          Save
        </button>
      </form>
    );
  }
}

export default CategoryForm;
