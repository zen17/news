import React from 'react';
import {connect} from "react-redux";
import CategoryListsComponent from "../category-list-component/category-list-component";

function ListOfCategoryListsComponent(props) {
    console.log('LIST 99999', props)
    const listOfCategoryLists = props.listOfCategories?.map(category => <CategoryListsComponent articles={props.categoryArticles[category.value]}/>)

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
