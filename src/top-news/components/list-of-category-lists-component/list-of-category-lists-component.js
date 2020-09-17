import React from 'react';
import {connect} from "react-redux";
import CategoryListsComponent from "../category-list-component/category-list-component";

function ListOfCategoryListsComponent(props) {
    const listOfCategoryLists = props.listOfCategories?.map(category =>
        <div>
            <h5>{category.name}</h5>
        <CategoryListsComponent articles={props.categoryArticles[category.value]}/>
        </div>
    )
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

export default connect(mapStateToProps, null)(ListOfCategoryListsComponent);
