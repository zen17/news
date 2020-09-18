import React from 'react';
import {connect} from "react-redux";
import CategoryCarouselComponent from "../CategoryCarouselComponent/CategoryCarouselComponent";

 function CategoryCarouselListComponent(props) {
    const listOfCategoryLists = props.listOfCategories?.map(category =>
        <div>
            <div className='row m-5'>
                <h3 className='mt-3 mb-2'>{category.name}</h3>
            </div>
            <CategoryCarouselComponent articles={props.categoryArticles[category.value]}/>
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

export default connect(mapStateToProps, null)(CategoryCarouselListComponent);
