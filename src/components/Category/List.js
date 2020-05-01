import React from 'react';
import CategoryItem from './Item';
import './List.scss';

const CategoryList = (props) => {
  const items = props.categoriesData.map((category) => {
    return (
      <CategoryItem 
        key={category.id.toString()}
        id={category.id}
        title={category.title}
        moneySum={category.moneySum} 
        updateCategory={props.updateCategory}
        deleteCategory={props.deleteCategory} />
    )
  });

  return <ul className="categories-list">{items}</ul>
}

export default CategoryList;
