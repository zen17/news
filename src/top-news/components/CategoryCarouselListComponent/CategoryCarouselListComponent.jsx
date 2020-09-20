import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import CategoryCarouselComponent from '../CategoryCarouselComponent/CategoryCarouselComponent';
import {
  loadedTopArticlesAction,
  selectedArticlesCategoryAction,
} from '../../../redux/actions/news-actions';
import { getTopArticlesByCountryAndCategory } from '../../services/articleService';

function CategoryCarouselListComponent({ listOfCategories, categoryArticles }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const selectedArticlesCategory = useSelector(
    (state) => state.selectedArticlesCategory
  );
  const selectedCountry = useSelector((state) => state.selectedCountry);

  const handleClickOnCategory = (categoryName) => {
    getTopArticlesByCountryAndCategory(selectedCountry, categoryName)
      .then((data) => data.json())
      .then((data) => {
        dispatch(loadedTopArticlesAction(data.articles));
        dispatch(selectedArticlesCategoryAction(categoryName));
        history.push(`${location.pathname}/articles`);
      });

    return () => {
      history.goBack();
    };
  };

  const categoryCarouselList = listOfCategories.map((category, index) => {
    if (categoryArticles[category.value]) {
      return (
        <div>
          <div className="row m-4">
            <h3 className="mt-3 mb-2 clickableHeader">
              <btn
                className="clickableHeader"
                onClick={() => handleClickOnCategory(category.name)}
              >
                {category.name}
              </btn>
            </h3>
          </div>
          <CategoryCarouselComponent
            key={index}
            articles={categoryArticles[category.value]}
          />
        </div>
      );
    }
    return <></>;
  });
  return <div>{categoryCarouselList}</div>;
}

CategoryCarouselListComponent.propTypes = {
  listOfCategories: PropTypes.array,
  categoryArticles: PropTypes.array,
};

CategoryCarouselListComponent.defaultProps = {
  listOfCategories: [],
  categoryArticles: [],
};

export default CategoryCarouselListComponent;
