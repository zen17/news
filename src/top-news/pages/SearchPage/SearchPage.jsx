import React, { Fragment, useEffect, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { useDispatch, useSelector } from 'react-redux';
import ArticleDetailComponent from '../../../common/components/ArticleDetailComponent/ArticleDetailComponent';
import CardListComponent from '../../../common/components/CardListComponent/CardListComponent';
import { getTopArticlesByCountryAndQuery } from '../../services/articleService';
import { selectedArticleAction } from '../../../redux/actions/news-actions';
import { API_KEY } from '../../../config/constants';

function SearchPage(props) {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const history = useHistory();
  const searchInput = React.useRef(null);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const selectedArticle = useSelector((state) => state.selectedArticle);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChangeInput = (inputValue) => {
    setQuery(inputValue);
  };

  const goBack = () => {
    history.goBack();
  };

  const openArticleDetailView = (article) => {
    dispatch(selectedArticleAction(article));
    history.push(`${location.pathname}/article`);
  };

  const closeArticleDetailComponent = () => {
    dispatch(selectedArticleAction(null));
    goBack();
  };

  useEffect(() => {
    if (searchInput.current) {
      fromEvent(searchInput.current, 'input')
        .pipe(
          map((event) => event.target.value),
          debounceTime(500),
          distinctUntilChanged()
        )
        .subscribe((inputValue) => handleChangeInput(inputValue));
    }
    if (query !== '') {
      // fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&q=${query}&apiKey=${API_KEY}`)
      getTopArticlesByCountryAndQuery(selectedCountry, query)
        .then((data) => data.json())
        .then((data) => {
          setArticles(data.articles);
        })
        .catch((e) => {
          setArticles([selectedCountry]);
        });
    }

    return () => {
      //  $searchInput.unsubscribe();
    };
  }, [query, selectedCountry]);

  return (
    <>
      <Route path="/search" exact>
        <div className="row justify-content-center m-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              ref={searchInput}
              placeholder="Search news..."
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <CardListComponent
          onMoreBtnClick={openArticleDetailView}
          articles={articles}
        />
      </Route>
      <Route path="/search/article" exact>
        <ArticleDetailComponent
          onBackBtnClick={closeArticleDetailComponent}
          selectedArticle={selectedArticle}
        />
      </Route>
    </>
  );
}

export default SearchPage;
