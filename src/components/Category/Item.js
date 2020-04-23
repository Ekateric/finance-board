import React, {Component} from 'react';
import CategoryForm from '../Category/Form';
import './Item.scss';

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
    const {index, title, moneySum} = this.state;
    const {deleteCategory} = this.props;

    if (this.state.isEdit) {
      return (
        <li className="category-item">
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
      <li className="category-item">
        <h3 className="category-item__title">{title}</h3>
        <div className="category-item__body">  
          <p>{moneySum}</p>
          <button 
            type="button"
            onClick={this.toggleEditForm}>
            Edit
          </button>
          <button 
            type="button"
            onClick={() => deleteCategory(index)}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}

export default CategoryItem;
