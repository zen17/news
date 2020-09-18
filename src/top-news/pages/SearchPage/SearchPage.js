import React, {useEffect, useState} from 'react';
import CardListComponent
    from "../../../common/components/CardListComponent/CardListComponent";
import {API_KEY} from "../../../config/constants";
import {Route} from "react-router-dom";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

function SearchPage(props) {

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState([]);

    const searchInput = React.useRef(null);

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
        fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`)
            .then(data => data.json())
            .then(data => {
                console.log('SEARCH PAGE LOADED', data)
                setArticles(data.articles)
                setLoading(false);
            }).catch(e => {
            setArticles([])
        })

    }, [query]);


    const handleChangeInput = (inputValue) => {
        setQuery(inputValue)
    }

    return (
        <div className="container-fluid">
            <Route path='/search' exact>
                <form>
                    <label>
                        Name:
                        <input ref={searchInput} type="text" name="search-bar"/>
                    </label>
                </form>
                <CardListComponent articles={articles}/>
            </Route>
            <Route path='/search/article' exact>
                <ArticleDetailComponent/>
            </Route>
        </div>
    )
}

export default SearchPage
