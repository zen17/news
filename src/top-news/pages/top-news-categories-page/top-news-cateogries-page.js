import React, {useEffect} from "react";
import {loadedTopArticlesByCategoryAction} from "../../../redux/actions/news-actions";
import {useDispatch, connect} from "react-redux";
import ListOfCategoryListsComponent
    from "../../components/list-of-category-lists-component/list-of-category-lists-component";

function TopNewsCategoriesPage(props) {

    const categories = [{name: "Entertainment", value: "entertainment"},
        {name: "General", value: "general"},
        {name: "Health", value: "health"},
        {name: "Science", value: "science"},
        {name: "Sport", value: "sport"},
        {name: "Technology", value: "echtnology"}];

    const dispatch = useDispatch();

    useEffect(() => {
        categories.forEach(category => {
            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category.value}&apiKey=ac650ec4d1d34bd3b64420a5667b45a4`)
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                    dispatch(loadedTopArticlesByCategoryAction({category: category, articles: data.articles}));
                });
        });
    }, []);


    return (
        <ListOfCategoryListsComponent listOfCategories={categories} />
    )
}


function mapStateToProps(state, ownProps) {
    const categoryArticles = state.categoryArticles
    return {categoryArticles: categoryArticles}
}

export default connect(mapStateToProps, null)(TopNewsCategoriesPage);
