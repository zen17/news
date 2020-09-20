import React, {useEffect, useState, Fragment} from "react";
import {loadedTopArticlesByCategoryAction} from "../../../redux/actions/news-actions";
import {useDispatch, connect, useSelector} from "react-redux";
import {API_KEY, GB_COUNTRY} from "../../../config/constants";
import {Route, useHistory} from "react-router-dom";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";
import CategoryCarouselListComponent from "../../components/CategoryCarouselListComponent/CategoryCarouselListComponent";
import CardListComponent from "../../../common/components/CardListComponent/CardListComponent";
import {getTopArticlesByCountryAndCategory} from "../../services/articleService";

function CategoriesPage(props) {

    const categories = [{name: "Entertainment", value: "entertainment"},
        {name: "General", value: "general"},
        {name: "Health", value: "health"},
        {name: "Science", value: "science"},
        {name: "Sport", value: "sport"},
        {name: "Technology", value: "technology"}];
    const articles = useSelector(state => state.articles);
    const selectedCountry = useSelector(state => state.selectedCountry);
    const categoryArticles = useSelector(state => state.categoryArticles);
    const selectedArticle = useSelector(state => state.selectedArticle);
    const selectedArticlesCategory = useSelector(state => state.selectedArticlesCategory);
    const dispatch = useDispatch();
    const countryName = selectedCountry === GB_COUNTRY ? 'Great Britain' : 'USA'
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const closeArticleDetailComponent = () => {
        goBack();
    }

    const heading = !selectedArticle ? <h1> Top news from {selectedCountry === GB_COUNTRY ? 'Great Britain' : 'USA'} </h1> : <h1/>


    useEffect(() => {
        categories.forEach(category => {
           // fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${category.value}&apiKey=${API_KEY}`)
             getTopArticlesByCountryAndCategory(selectedCountry,category.value)
                .then(data => data.json())
                .then(data => {
                    console.log('CATEGORY PAGE LOADED')
                    dispatch(loadedTopArticlesByCategoryAction({category: category, articles: data.articles}));
                });
        });
    }, [selectedCountry]);


    return (
        <Fragment>
            {heading}
            <Route path='/categories' exact>
                <CategoryCarouselListComponent categoryArticles={categoryArticles} listOfCategories={categories}/>
            </Route>
            <Route path='/categories/articles' exact>
                <CardListComponent articles={articles}/>
            </Route>
            <Route path='/categories/article' exact>
                <ArticleDetailComponent onBackBtnClick={closeArticleDetailComponent} selectedArticle={selectedArticle} />
            </Route>
            <Route path='/categories/articles/article' exact>
                <ArticleDetailComponent onBackBtnClick={closeArticleDetailComponent} selectedArticle={selectedArticle}  />
            </Route>
        </Fragment>
)
}


export default CategoriesPage
