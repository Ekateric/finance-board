import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './Item';
import './List.scss';

const CategoryList = (props) => {
  const {categoriesData, spendingsData, categoryHandlers, spendingHandlers} = props;

  const items = categoriesData.map((category) => {
    const {id, title, moneySum, spendings=[]} = category;

    return (
      <CategoryItem 
        key={id.toString()}
        id={id}
        title={title}
        moneySum={moneySum}
        spendings={spendings}
        spendingsData={spendingsData}
        categoryHandlers={categoryHandlers}
        spendingHandlers={spendingHandlers} />
    )
  });

  return <ul className="categories-list">{items}</ul>;
}

CategoryList.propTypes = {
  categoriesData: PropTypes.arrayOf(PropTypes.object).isRequired,
  spendingsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryHandlers: PropTypes.objectOf(PropTypes.func).isRequired,
  spendingHandlers: PropTypes.objectOf(PropTypes.func).isRequired
};

export default CategoryList;
