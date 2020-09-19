import React, {useEffect, useState, Fragment} from 'react';
import CardListComponent
    from "../../../common/components/CardListComponent/CardListComponent";
import {API_KEY} from "../../../config/constants";
import {Route} from "react-router-dom";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {useSelector} from "react-redux";

function SearchPage(props) {

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState('');

    const searchInput = React.useRef(null);
    const selectedCountry = useSelector(state => state.selectedCountry);

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

    useEffect(() => {
        setLoading(true)
        initialSubject();
        if (query !== '')
        fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&q=${query}&apiKey=${API_KEY}`)
            .then(data => data.json())
            .then(data => {
                console.log('SEARCH PAGE LOADED', data)
                setArticles(data.articles)
                setLoading(false);
            }).catch(e => {
            setArticles([selectedCountry])
        })

    }, [query,selectedCountry]);


    const handleChangeInput = (inputValue) => {
        setQuery(inputValue)
    }

    return (
        <Fragment>
            <Route path='/search' exact>
                <form>
                    <label>
                        Search News
                        <input ref={searchInput} type="text" name="search-bar"/>
                    </label>
                </form>
                <CardListComponent articles={articles}/>
            </Route>
            <Route path='/search/article' exact>
                <ArticleDetailComponent/>
            </Route>
        </Fragment>
    )
}

export default SearchPage
