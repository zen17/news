import React from 'react';
import HorizontalNavBarComponent
    from "../../../common/components/HorizontalNarComponent/HorizontalNavBarComponent";
import {Route, Switch} from 'react-router-dom'
import HomePage from "../HomePage/HomePage";
import SearchPage from "../SearchPage/SearchPage";
import {useSelector} from "react-redux";
import CategoriesPage from "../CategoriesPage/CateogriesPage";

function LayoutPage(props) {
    const links = [{name: "Home", route: "/"},
        {name: "Categories", route: "categories"},
        {name: "Search", route: "search"}];

    const selectedCountry = useSelector(state => state.selectedCountry);
    return (<div>
        <HorizontalNavBarComponent selectedCountry={selectedCountry} links={links}/>
        <div className='container-fluid'>
            <Switch>
                <Route path="/categories" component={CategoriesPage}/>
                <Route path="/search" component={SearchPage}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </div>
    </div>)
}

export default LayoutPage
