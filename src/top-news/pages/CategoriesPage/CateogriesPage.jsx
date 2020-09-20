import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory, useLocation } from 'react-router-dom';
import {
  loadedTopArticlesByCategoryAction,
  selectedArticleAction,
} from '../../../redux/actions/news-actions';
import { GB_COUNTRY } from '../../../config/constants';
import ArticleDetailComponent from '../../../common/components/ArticleDetailComponent/ArticleDetailComponent';
import CategoryCarouselListComponent from '../../components/CategoryCarouselListComponent/CategoryCarouselListComponent';
import CardListComponent from '../../../common/components/CardListComponent/CardListComponent';
import { getTopArticlesByCountryAndCategory } from '../../services/articleService';

function CategoriesPage(props) {
  const categories = [
    { name: 'Entertainment', value: 'entertainment' },
    { name: 'General', value: 'general' },
    { name: 'Health', value: 'health' },
    { name: 'Science', value: 'science' },
    { name: 'Sport', value: 'sport' },
    { name: 'Technology', value: 'technology' },
  ];
  const articles = useSelector((state) => state.articles);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const categoryArticles = useSelector((state) => state.categoryArticles);
  const selectedArticle = useSelector((state) => state.selectedArticle);
  const selectedArticlesCategory = useSelector(
    (state) => state.selectedArticlesCategory
  );
  const dispatch = useDispatch();
  const countryName = selectedCountry === GB_COUNTRY ? 'Great Britain' : 'USA';
  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    history.goBack();
  };

  const closeArticleDetailComponent = () => {
    dispatch(selectedArticleAction(null));
    goBack();
  };

  const openArticleDetailView = (article) => {
    dispatch(selectedArticleAction(article));
    history.push(`${location.pathname}/article`);
  };

  const heading = !selectedArticle ? (
    <h1>
      {' '}
      Top {selectedArticlesCategory} news from {countryName}{' '}
    </h1>
  ) : (
    <h1 />
  );

  useEffect(() => {
    categories.forEach((category) => {
      getTopArticlesByCountryAndCategory(selectedCountry, category.value)
        .then((data) => data.json())
        .then((data) => {
          dispatch(
            loadedTopArticlesByCategoryAction({
              category: category,
              articles: data.articles,
            })
          );
        });
    });
  }, [selectedCountry]);

  return (
    <>
      {heading}
      <Route path="/categories" exact>
        <CategoryCarouselListComponent
          categoryArticles={categoryArticles}
          listOfCategories={categories}
        />
      </Route>
      <Route path="/categories/articles" exact>
        <CardListComponent
          onMoreBtnClick={openArticleDetailView}
          articles={articles}
        />
      </Route>
      <Route path="/categories/article" exact>
        <ArticleDetailComponent
          onBackBtnClick={closeArticleDetailComponent}
          selectedArticle={selectedArticle}
        />
      </Route>
      <Route path="/categories/articles/article" exact>
        <ArticleDetailComponent
          onBackBtnClick={closeArticleDetailComponent}
          selectedArticle={selectedArticle}
        />
      </Route>
    </>
  );
}

export default CategoriesPage;
