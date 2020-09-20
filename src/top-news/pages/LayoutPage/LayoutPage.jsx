import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HorizontalNavBarComponent from '../../../common/components/HorizontalNavComponent/HorizontalNavBarComponent';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import CategoriesPage from '../CategoriesPage/CateogriesPage';

function LayoutPage(props) {
  const links = [
    { name: 'Home', route: '/' },
    { name: 'Categories', route: 'categories' },
    // { name: 'Search', route: 'search' },
  ];

  const selectedCountry = useSelector((state) => state.selectedCountry);
  return (
    <>
      <HorizontalNavBarComponent
        selectedCountry={selectedCountry}
        links={links}
      />
      <div className="container-fluid">
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </>
  );
}

export default LayoutPage;
