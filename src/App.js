import React, { Component } from 'react';
import Total from './components/Total/Total';
import CategoriesList from './components/Categories/List';

class App extends Component {
  render() {
    const categories = [
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
    ];
    
    return (
      <div className="finance-board">
        <Total />
        <CategoriesList categoriesData={categories} />
      </div>
    )
  }
}

export default App;
