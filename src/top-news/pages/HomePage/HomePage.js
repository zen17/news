import React, {useEffect, useState} from 'react';
import CardListComponent
    from "../../../common/components/CardListComponent/CardListComponent";
import {useDispatch, useSelector} from "react-redux";
import {loadedTopArticlesAction} from "../../../redux/actions/news-actions";
import {Route} from "react-router-dom";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";
import {API_KEY} from "../../../config/constants";

function HomePage(props) {
    console.log('HOMEPAGE PROPS',props)
    const [loading, setLoading] = useState(false);
    const articles = useSelector(state => state.articles);
    const selectedCountry = useSelector(state => state.selectedCountry);
    const dispatch = useDispatch();
    useEffect(() => {
        setLoading(true)
        fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`)
            .then(data => data.json())
            .then(data => {
                console.log('HOME PAGE LOADED ', data)
                dispatch(loadedTopArticlesAction(data.articles));
                setLoading(false);
            }).catch(e => console.log(e));
    }, [selectedCountry]);

    return (
        <div className="container-fluid">
            <Route path='/' exact>
                <CardListComponent articles={articles}/>
            </Route>
            <Route path='/article' exact>
                <ArticleDetailComponent  />
            </Route>
        </div>
    )
}

export default HomePage
