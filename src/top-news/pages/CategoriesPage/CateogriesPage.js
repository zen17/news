import React, {useEffect, useState} from "react";
import {loadedTopArticlesByCategoryAction} from "../../../redux/actions/news-actions";
import {useDispatch, connect, useSelector} from "react-redux";
import {API_KEY} from "../../../config/constants";
import {Route} from "react-router-dom";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";
import CategoryCarouselListComponent from "../../components/CategoryCarouselListComponent/CategoryCarouselListComponent";
import CardListComponent from "../../../common/components/CardListComponent/CardListComponent";

function CategoriesPage(props) {

    const categories = [{name: "Entertainment", value: "entertainment"},
        {name: "General", value: "general"},
        {name: "Health", value: "health"},
        {name: "Science", value: "science"},
        {name: "Sport", value: "sport"},
        {name: "Technology", value: "echtnology"}];

    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        categories.forEach(category => {
            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category.value}&apiKey=${API_KEY}`)
                .then(data => data.json())
                .then(data => {
                    console.log('CATEGORY PAGE LOADED')
                    dispatch(loadedTopArticlesByCategoryAction({category: category, articles: data.articles}));
                });
        });
    }, []);


    return (
        <div className="container-fluid">
            <Route path='/categories' exact>
                <CategoryCarouselListComponent listOfCategories={categories}/>
            </Route>
            <Route path='/categories/articles' exact>
                <CardListComponent articles={articles}/>
            </Route>
            <Route path='/categories/article' exact>
                <ArticleDetailComponent  />
            </Route>
            <Route path='/categories/articles/article' exact>
                <ArticleDetailComponent  />
            </Route>
        </div>
)
}


function mapStateToProps(state, ownProps) {
    const categoryArticles = state.categoryArticles
    return {categoryArticles: categoryArticles}
}

export default connect(mapStateToProps, null)(CategoriesPage);
