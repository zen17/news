import React, {useEffect, useState} from 'react';
import CardListComponent
    from "../../../common/components/CardListComponent/CardListComponent";
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
                <CardListComponent articles={articles} />
        </div>
    )
}

export default SearchPage
