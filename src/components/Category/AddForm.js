import React, {Component} from 'react';

const AddButton = (props) => {
  return (
    <button 
      type="button" 
      onClick={props.handleClick}>
      Add new category
    </button>
  )
}

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      moneySum: ''
    };
    this.state = this.initialState;
  }

  handleChange = (evt) => {
    let {name, value} = evt.target;

    if (name === 'moneySum') {
      value = Number(value);
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
    const {handleCancelClick} = this.props;
    const {title, moneySum} = this.state;

    return (
      <div>
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
        <button 
          type="button"
          onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    );
  }
}

class CategoryAddForm extends Component {
  handleClick = (evt) => {
    evt.preventDefault();
    this.props.toggleCategoriesAddForm();
  }

  handleSubmit = (newCategory) => {
    this.props.addCategory(newCategory);
    this.props.toggleCategoriesAddForm();
  }

  render() {
    const {isCategoryAdd} = this.props;

    if (isCategoryAdd) {
       return <AddForm 
        handleSubmit={this.handleSubmit}
        handleCancelClick={this.handleClick} />
    }

    return <AddButton handleClick={this.handleClick} />;
  }
}

export default CategoryAddForm;
