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
      spendings: [],
      nextSpendingId: 0,
      isLoading: false,
      isCategoryAdd: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    this.props.api.getAll()
      .then(([categories, spendings]) => {
        this.setState({
          categories: categories,
          nextCategoryId: categories.length,
          spendings: spendings,
          nextSpendingId: spendings.length,
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

  addSpending = (spending, categoryId) => {
    spending.id = this.state.nextSpendingId;

    this.setState({
      categories: [...this.state.spendings, spending],
      nextCategoryId: this.state.nextSpendingId + 1
    });

    const category = this.state.categories.find((item) => item.id === categoryId);
    const categorySpendings = category.spendings ? [...category.spendings, spending.id] : [spending.id];

    this.updateCategory({
      id: categoryId,
      spendings: categorySpendings
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
          spendingsData={this.state.spendings}
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
