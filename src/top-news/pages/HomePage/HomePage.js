import React, {Fragment, useEffect, useState} from 'react';
import CardListComponent
    from "../../../common/components/CardListComponent/CardListComponent";
import {useDispatch, useSelector} from "react-redux";
import {loadedTopArticlesAction} from "../../../redux/actions/news-actions";
import {Route, useHistory} from "react-router-dom";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";
import {API_KEY, GB_COUNTRY} from "../../../config/constants";

function HomePage(props) {
    console.log('HOMEPAGE PROPS',props)
    const [loading, setLoading] = useState(false);
    const articles = useSelector(state => state.articles);
    const selectedCountry = useSelector(state => state.selectedCountry);
    const selectedArticle = useSelector(state => state.selectedArticle);
    const dispatch = useDispatch();
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    const closeArticleDetailComponent = () => {
        goBack();
    }

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

    const countryName = selectedCountry === GB_COUNTRY ? 'Great Britain' : 'USA'

    return (
        <Fragment>
            <h1> Top news from {countryName} </h1>
            <Route path='/' exact>
                <CardListComponent articles={articles}/>
            </Route>
            <Route path='/article' exact>
                <ArticleDetailComponent selectedArticle={selectedArticle} onBackBtnClick={closeArticleDetailComponent}  />
            </Route>
        </Fragment>
    )
}

export default HomePage
