import React, {useEffect} from "react";
import {loadedTopArticlesByCategoryAction} from "../../../redux/actions/news-actions";
import {useDispatch, connect} from "react-redux";
import ListOfCategoryListsComponent
    from "../../components/CategoryCarouselListComponent/CategoryCarouselListComponent";
import {API_KEY} from "../../../config/constants";
import {Route} from "react-router-dom";
import CardListComponent
    from "../../../common/components/CardListComponent/CardListComponent";
import ArticleDetailComponent from "../../../common/components/ArticleDetailComponent/ArticleDetailComponent";

function CategoriesPage(props) {

    const categories = [{name: "Entertainment", value: "entertainment"},
        {name: "General", value: "general"},
        {name: "Health", value: "health"},
        {name: "Science", value: "science"},
        {name: "Sport", value: "sport"},
        {name: "Technology", value: "echtnology"}];

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
                <ListOfCategoryListsComponent listOfCategories={categories}/>
            </Route>
            <Route path='/categories/article' exact>
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
