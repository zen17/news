import React, {useEffect, useState} from 'react';
import TopNewsCardListComponent
    from "../../../common/components/top-news-card-list-component/top-news-card-list-component";
import {API_KEY} from "../../../config/constants";

function SearchPage(props) {

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`)
            .then(data => data.json())
            .then(data => {
                console.log('SEARCH PAGE LOADED', data)
                // dispatch(loadedTopArticlesAction(data.articles));
                setArticles(data.articles)
                setLoading(false);
            }).catch(e => {
            console.log(e)
            setArticles([])
        })

    }, [query]);


    const handleChangeInput = (e) =>{
        e.preventDefault();
        setQuery(e.target.value)
    }

    return (
        <div className="container-fluid">
            <form>
                <label>
                    Name:
                    <input type="text" name="search-bar" onChange={handleChangeInput}/>
                </label>
            </form>
                <TopNewsCardListComponent articles={articles} />
        </div>
    )
}

export default SearchPage
