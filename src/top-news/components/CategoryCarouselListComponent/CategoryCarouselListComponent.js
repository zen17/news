import React from 'react';
import {connect, useDispatch} from "react-redux";
import CategoryCarouselComponent from "../CategoryCarouselComponent/CategoryCarouselComponent";
import {API_KEY} from "../../../config/constants";
import {loadedTopArticlesAction} from "../../../redux/actions/news-actions";
import {useHistory, useLocation} from "react-router-dom";

function CategoryCarouselListComponent(props) {
    const dispatch = useDispatch();
    const history = useHistory()
    const location = useLocation();


    const handleClickOnCategory = (categoryName) => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categoryName}&apiKey=${API_KEY}`)
            .then(data => data.json())
            .then(data => {
                dispatch(loadedTopArticlesAction(data.articles));
                history.push(`${location.pathname}/articles`)
            });
    }

    const listOfCategoryLists = props.listOfCategories?.map((category, index) => {
        return (<div>
            <div className='row m-4'>
                <h3 className='mt-3 mb-2 clickableHeader'>
                    <a className='clickableHeader'
                       onClick={() => handleClickOnCategory(category.name)}>{category.name}</a></h3>
            </div>
            <CategoryCarouselComponent key={index} articles={props.categoryArticles[category.value]}/>
        </div>)
    })
    return (
        <div>
            {listOfCategoryLists}
        </div>
    )
}

function mapStateToProps(state,) {
    const categoryArticles = state.categoryArticles
    return {categoryArticles: categoryArticles}
}

export default connect(mapStateToProps, null)(CategoryCarouselListComponent);
