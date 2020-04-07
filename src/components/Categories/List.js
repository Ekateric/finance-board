import React from 'react';
import CategoriesItem from './Item';
import './List.scss';

const CategoriesList = (props) => {
  const items = props.categoriesData.map((category, index) => {
    return (
      <CategoriesItem 
        key={index}
        index={index}
        title={category.title}
        moneySum={category.moneySum} 
        updateCategory={props.updateCategory} />
    )
  });

  return <ul className="categories-list">{items}</ul>
}

export default CategoriesList;
