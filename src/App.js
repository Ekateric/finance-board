import React, { Component } from 'react';
import Total from './components/Total/Total';
import CategoryList from './components/Category/List';
import CategoryAdd from './components/Category/Add';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      nextCategoryId: 0,
      isLoading: false,
      isCategoryAdd: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    this.props.api.getCategories()
      .then((categories) => {
        this.setState({
          categories: categories,
          nextCategoryId: categories.length,
          isLoading: false
        })
      })
      .catch((err) => {
        throw err;
      });
  }

  updateCategory = (category) => {
    const categories = [...this.state.categories];
    const categoryIndex = categories.findIndex((item) => item.id === category.id);

    categories[categoryIndex] = {...categories[categoryIndex], ...category};

    this.setState({
      categories: categories
    });
  }

  addCategory = (category) => {
    category.id = this.state.nextCategoryId;

    this.setState({
      categories: [...this.state.categories, category],
      nextCategoryId: this.state.nextCategoryId + 1
    });
  }

  deleteCategory = (categoryId) => {
    let categories = [...this.state.categories];

    categories = categories.filter((category) => {
      return category.id !== categoryId;
    });

    this.setState({
      categories: categories
    });
  }

  countSum = () => {
    return this.state.categories.reduce((sum, category) => {
      return sum + Number(category.moneySum)
    }, 0);
  }

  toggleCategoryAddForm = () => {
    this.setState({
      isCategoryAdd: !this.state.isCategoryAdd
    });
  }

  render() {

    return (
      <div className="finance-board">
        <Total sum={this.countSum()} />
        <CategoryList 
          categoriesData={this.state.categories} 
          updateCategory={this.updateCategory}
          deleteCategory={this.deleteCategory} />
        <CategoryAdd 
          isCategoryAdd={this.state.isCategoryAdd} 
          toggleCategoriesAddForm={this.toggleCategoryAddForm} 
          addCategory={this.addCategory} />
      </div>
    )
  }
}

export default App;
