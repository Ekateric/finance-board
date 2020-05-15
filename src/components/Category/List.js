import React from 'react';
import CategoryItem from './Item';
import './List.scss';

const CategoryList = (props) => {
  const {categoriesData, spendingsData, updateCategory, deleteCategory} = props;

  const items = categoriesData.map((category) => {
    const {id, title, moneySum, spendings=[]} = category;
    const categorySpendings = spendings.map((spendingId) => {
      return spendingsData.find((spendingItem) => spendingItem.id === spendingId);
    });

    return (
      <CategoryItem 
        key={id.toString()}
        id={id}
        title={title}
        moneySum={moneySum}
        spendings={categorySpendings}
        updateCategory={updateCategory}
        deleteCategory={deleteCategory} />
    )
  });

  return <ul className="categories-list">{items}</ul>
}

export default CategoryList;
