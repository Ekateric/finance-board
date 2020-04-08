import React, { Component } from 'react';
import Total from './components/Total/Total';
import CategoryList from './components/Category/List';
import CategoryAdd from './components/Category/Add';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          title: 'Common',
          moneySum: 1200,
        },
        {
          title: 'Child',
          moneySum: 300,
        },
        {
          title: 'My own',
          moneySum: 120,
        },
        {
          title: 'Flat',
          moneySum: 200,
        }
      ],
      isCategoryAdd: false
    };
  }

  updateCategory = (category) => {
    const categories = [...this.state.categories];

    categories[category.index] = {...categories[category.index], ...category};

    this.setState({
      categories: categories
    });
  }

  addCategory = (category) => {
    this.setState({
      categories: [...this.state.categories, category]
    });
  }

  countSum = () => {
    return this.state.categories.reduce((sum, category) => {
      return sum + category.moneySum
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
          updateCategory={this.updateCategory} />
        <CategoryAdd 
          isCategoryAdd={this.state.isCategoryAdd} 
          toggleCategoriesAddForm={this.toggleCategoryAddForm} 
          addCategory={this.addCategory} />
      </div>
    )
  }
}

export default App;
