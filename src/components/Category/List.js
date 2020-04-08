import React from 'react';
import CategoryItem from './Item';
import './List.scss';

const CategoryList = (props) => {
  const items = props.categoriesData.map((category, index) => {
    return (
      <CategoryItem 
        key={index}
        index={index}
        title={category.title}
        moneySum={category.moneySum} 
        updateCategory={props.updateCategory} />
    )
  });

  return <ul className="categories-list">{items}</ul>
}

export default CategoryList;
