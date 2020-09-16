import React from 'react';
import HorizontalNavBarComponent
    from "../../../common/components/horizontal-navigation-bar-component/horizontal-navigation-bar-component";
import {Route} from 'react-router-dom'
import TopNewsHomePage from "../top-news-home-page/top-news-home-page";
import TopNewsCategoriesPage from "../top-news-categories-page/top-news-cateogries-page";
import TopNewsDetailComponent from "../../../common/components/top-news-detail-component/top-news-detail-component";
import TopNewsCardListComponent
    from "../../../common/components/top-news-card-list-component/top-news-card-list-component";

function TopNewsWrapperPage(props) {
    const links = [{name: "Home", route: "/"},
        {name: "Categories", route: "categories"},
        {name: "Search", route: "search"}];

    return (
        <div >
            <HorizontalNavBarComponent links={links}/>
            <Route path="/" exact component={TopNewsHomePage}/>
            <Route path="/categories" exact component={TopNewsCategoriesPage}/>
            <Route path="/article" exact component={TopNewsDetailComponent}/>
        </div>
    )
}

export default TopNewsWrapperPage
