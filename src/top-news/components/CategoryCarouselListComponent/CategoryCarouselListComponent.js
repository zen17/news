import React from 'react';
import {connect} from "react-redux";
import CategoryListsComponent from "../CategoryListComponent/CategoryListComponent";

function ListOfCategoryListsComponent(props) {
    const listOfCategoryLists = props.listOfCategories?.map(category =>
        <div>
            <div className='row m-5'>
                <h3 className='mt-3 mb-2'>{category.name}</h3>
            </div>
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
