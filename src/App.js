import React, { Component } from 'react';
import Total from './components/Total/Total';
import CategoriesList from './components/Categories/List';
import CategoriesAddForm from './components/Categories/AddForm';

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

    categories[category.index] = {...categories[category.index], moneySum: category.moneySum};

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

  toggleCategoriesAddForm = () => {
    this.setState({
      isCategoryAdd: !this.state.isCategoryAdd
    });
  }

  render() {

    return (
      <div className="finance-board">
        <Total sum={this.countSum()} />
        <CategoriesList 
          categoriesData={this.state.categories} 
          updateCategory={this.updateCategory} />
        <CategoriesAddForm 
          isCategoryAdd={this.state.isCategoryAdd} 
          toggleCategoriesAddForm={this.toggleCategoriesAddForm} 
          addCategory={this.addCategory} />
      </div>
    )
  }
}

export default App;
