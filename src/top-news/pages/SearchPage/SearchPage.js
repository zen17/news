import React, {Fragment, useEffect, useState} from 'react';
import CardListComponent from "../../../common/components/CardListComponent/CardListComponent";
import {Route, useHistory, useLocation} from "react-router-dom";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {useDispatch, useSelector} from "react-redux";
import {getTopArticlesByCountryAndQuery} from "../../services/articleService";
import {selectedArticleAction} from "../../../redux/actions/news-actions";

function SearchPage(props) {

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState('');
    const history = useHistory()
    const searchInput = React.useRef(null);
    const selectedCountry = useSelector(state => state.selectedCountry);
    const selectedArticle = useSelector(state => state.selectedArticle);
    const dispatch = useDispatch();
    const location = useLocation();

    const initialSubject = () => {
        return fromEvent(searchInput.current, 'input')
            .pipe(
                map(event => event.target.value),
                debounceTime(500),
                distinctUntilChanged())
            .subscribe(inputValue =>
                handleChangeInput(inputValue)
            );
    }

    const goBack = () => {
        history.goBack()
    }

    const openArticleDetailView = (article) => {
        dispatch(selectedArticleAction(article));
        history.push(`${location.pathname}/article`)
    }

    const handleChangeInput = (inputValue) => {
        setQuery(inputValue)
    }

    const closeArticleDetailComponent = () => {
        goBack();
    }

    useEffect(() => {
        setLoading(true)
        initialSubject();
        if (query !== '')
            // fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&q=${query}&apiKey=${API_KEY}`)
            getTopArticlesByCountryAndQuery(selectedCountry, query)
                .then(data => data.json())
                .then(data => {
                    console.log('SEARCH PAGE LOADED', data)
                    setArticles(data.articles)
                    setLoading(false);
                }).catch(e => {
                setArticles([selectedCountry])
            })

    }, [query, selectedCountry]);

    return (
        <Fragment>
            <Route path='/search' exact>
                <div className='row justify-content-center m-3'>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" ref={searchInput} placeholder='Search news...'
                               aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <CardListComponent onMoreBtnClick={openArticleDetailView} articles={articles}/>
            </Route>
            <Route path='/search/article' exact>
                <ArticleDetailComponent onBackBtnClick={closeArticleDetailComponent} selectedArticle={selectedArticle}/>
            </Route>
        </Fragment>
    )
}

export default SearchPage
