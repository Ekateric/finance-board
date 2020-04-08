import React, {Component} from 'react';
import CategoryForm from '../Category/Form';

class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index,
      title: this.props.title,
      moneySum: this.props.moneySum,
      isEdit: false
    };
  }

  toggleEditForm = () => {
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  handleSubmit = (newCategory) => {
    this.setState(newCategory);
    this.props.updateCategory({...newCategory, index: this.state.index});
    this.toggleEditForm();
  }

  render() {
    const {title, moneySum} = this.state;

    if (this.state.isEdit) {
      return (
        <li className="categories-item">
          <CategoryForm 
            title={title}
            moneySum={moneySum}
            handleSubmit={this.handleSubmit} />
          <button 
            type="button"
            onClick={this.toggleEditForm}>
            Cancel Edit
          </button>
        </li>
      );
    }

    return (
      <li className="categories-item">
        <h3>{title}</h3>
        <p>{moneySum}</p>
        <button 
          type="button"
          onClick={this.toggleEditForm}>
          Edit
        </button>
      </li>
    );
  }
}

export default CategoryItem;
