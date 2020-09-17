import React, {useEffect, useState} from "react";
import {loadedTopArticlesByCategoryAction} from "../../../redux/actions/news-actions";
import {useDispatch, useSelector, connect} from "react-redux";
import ItemsCarousel from 'react-items-carousel';
import TopNewsCardComponent from "../../../common/components/top-news-card-component/top-news-card-component";
import ListOfCategoryListsComponent
    from "../../components/list-of-category-lists-component/list-of-category-lists-component";

function TopNewsCategoriesPage(props) {

    console.log('COM PROPS', props)
    const categories = [{name: "Entertainment", value: "entertainment"},
        {name: "General", value: "general"},
        {name: "Health", value: "health"},
        {name: "Science", value: "science"},
        {name: "Sport", value: "sport"},
        {name: "Technology", value: "echtnology"}];

    const dispatch = useDispatch();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;
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
    console.log('MAPP', state)
    const categoryArticles = state.categoryArticles
    return {categoryArticles: categoryArticles}
}

export default connect(mapStateToProps, null)(TopNewsCategoriesPage);
