import React from 'react';
import HorizontalNavBarComponent
    from "../../../common/components/HorizontalNarComponent/HorizontalNavBarComponent";
import {Route, Switch} from 'react-router-dom'
import HomePage from "../HomePage/HomePage";
import TopNewsCategoriesPage from "../CategoriesPage/CateogriesPage";
import SearchPage from "../SearchPage/SearchPage";
import {useSelector} from "react-redux";

function LayoutPage(props) {
    const links = [{name: "Home", route: "/"},
        {name: "Categories", route: "categories"},
        {name: "Search", route: "search"}];

    const selectedCountry = useSelector(state => state.selectedCountry);
    return (
        <div>
            <HorizontalNavBarComponent selectedCountry={selectedCountry} links={links}/>
            <Switch>
                <Route path="/categories" component={TopNewsCategoriesPage}/>
                <Route path="/search" component={SearchPage}/>
                <Route path="/"  component={HomePage}/>
            </Switch>
        </div>
    )
}

export default LayoutPage
