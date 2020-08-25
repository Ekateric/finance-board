import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './services/Api';
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
        this.updateAllMoneySums(categories, spendings);
        
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

  updateAllMoneySums = (categories, spendings) => {
    categories.forEach((category) => {
      if (category.spendings && category.spendings.length > 0) {
        category.moneySum = this.countCategoryMoneySum(spendings, category.spendings);
      }
    });
  }

  countCategoryMoneySum = (spendings, categorySpendings) => {
    return categorySpendings.reduce((spendingsSum, spendingId) => {
      const spending = spendings.find((item) => item.id === spendingId);

      return spendingsSum + Number(spending.money);
    }, 0);
  }

  updateCategory = (category) => {
    const categories = [...this.state.categories];
    const categoryIndex = categories.findIndex((item) => item.id === category.id);

    if (category.spendings) {
      const spendings = this.state.spendings;

      category.moneySum = this.countCategoryMoneySum(spendings, category.spendings);
    }

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
    this.setState({
      categories: [...this.state.categories].filter((category) => {
        return category.id !== categoryId;
      })
    });
  }

  updateSpending = (spending, categoryId) => {
    const spendings = [...this.state.spendings];
    const spendingIndex = spendings.findIndex((item) => item.id === spending.id);
  
    spendings[spendingIndex] = {...spendings[spendingIndex], ...spending};

    this.setState({
      spendings: spendings
    }, () =>  {
      const category = this.state.categories.find((item) => item.id === categoryId);
  
      this.updateCategory({
        id: categoryId,
        spendings: [...category.spendings]
      });
    });
  }

  addSpending = (spending, categoryId) => {
    spending.id = this.state.nextSpendingId;

    this.setState({
      spendings: [...this.state.spendings, spending],
      nextSpendingId: this.state.nextSpendingId + 1
    }, () => {
      const category = this.state.categories.find((item) => item.id === categoryId);
      const categorySpendings = category.spendings ? [...category.spendings, spending.id] : [spending.id];
  
      this.updateCategory({
        id: categoryId,
        spendings: categorySpendings
      });
    });
  }

  deleteSpending = (spendingId, categoryId) => {
    const spendings = [...this.state.spendings].filter((spending) => {
      return spending.id !== spendingId;
    });
    const category = this.state.categories.find((item) => item.id === categoryId);
    const categorySpendings = category.spendings.filter((spendingItemId) => {
      return spendingItemId !== spendingId;
    });

    this.setState({
      spendings: spendings
    });

    this.updateCategory({
      id: categoryId,
      spendings: categorySpendings
    });
  }

  countSum = () => {
    return this.state.categories.reduce((sum, category) => {
      return sum + Number(category.moneySum);
    }, 0);
  }

  toggleCategoryAddForm = () => {
    this.setState({
      isCategoryAdd: !this.state.isCategoryAdd
    });
  }

  render() {
    const categoryHandlers = {
      update: this.updateCategory,
      delete: this.deleteCategory
    };

    const spendingHandlers = {
      update: this.updateSpending,
      add: this.addSpending,
      delete: this.deleteSpending
    };

    return (
      <div className="finance-board">
        <Total sum={this.countSum()} />
        <CategoryList 
          categoriesData={this.state.categories}
          spendingsData={this.state.spendings}
          categoryHandlers={categoryHandlers}
          spendingHandlers={spendingHandlers} />
        <CategoryAdd 
          isCategoryAdd={this.state.isCategoryAdd} 
          toggleCategoriesAddForm={this.toggleCategoryAddForm} 
          addCategory={this.addCategory} />
      </div>
    )
  }
}

App.propTypes = {
  api: PropTypes.instanceOf(Api).isRequired
};

export default App;
