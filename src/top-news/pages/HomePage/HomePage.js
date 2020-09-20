import React, {Fragment, useEffect, useState} from 'react';
import CardListComponent from "../../../common/components/CardListComponent/CardListComponent";
import {useDispatch, useSelector} from "react-redux";
import {loadedTopArticlesAction, selectedArticleAction} from "../../../redux/actions/news-actions";
import {Route, useHistory} from "react-router-dom";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";
import {API_KEY, GB_COUNTRY} from "../../../config/constants";
import {getTopArticlesByCountry} from "../../services/articleService";

function HomePage(props) {
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

    const openArticleDetailView = (article) => {
        dispatch(selectedArticleAction(article));
        history.push('/article')
    }

    useEffect(() => {
        setLoading(true)
        getTopArticlesByCountry(selectedCountry)
        //fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`)
            .then(data => data.json())
            .then(data => {
                console.log('HOME PAGE LOADED ', data)
                dispatch(loadedTopArticlesAction(data.articles));
                setLoading(false);
            }).catch(e => console.log(e));
    }, [selectedCountry]);

    const heading = !selectedArticle ? <h1> Top news from {selectedCountry === GB_COUNTRY ? 'Great Britain' : 'USA'} </h1> : <h1/>


    return (
        <Fragment>
            <Route path='/' exact>
                {heading}
                <CardListComponent onMoreBtnClick={openArticleDetailView} articles={articles}/>
            </Route>
            <Route path='/article' exact>
                <ArticleDetailComponent selectedArticle={selectedArticle} onBackBtnClick={closeArticleDetailComponent}/>
            </Route>
        </Fragment>
    )
}

export default HomePage
