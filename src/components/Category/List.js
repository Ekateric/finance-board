import React from 'react';
import PropTypes from 'prop-types';
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

  return <ul className="categories-list">{items}</ul>;
}

CategoryList.propTypes = {
  categoriesData: PropTypes.arrayOf(PropTypes.object).isRequired,
  spendingsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired
};

export default CategoryList;
