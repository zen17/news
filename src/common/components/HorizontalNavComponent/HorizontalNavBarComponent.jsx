import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCountryAction } from '../../../redux/actions/news-actions';
import './HorizontalNavBarComponent.scss';
import RadioButtonsComponent from '../RadioButtonsComponent/RadioButtonsComponent';

function HorizontalNavBarComponent({ links, selectedCountry }) {
  const radioButtonsInit = [
    { value: 'GB', option: 'GB' },
    { value: 'US', option: 'US' },
  ];

  const navLinkList = links.map(({ name, route, index }) => (
    <NavLink
      className="nav-link"
      activeClassName="activeLink"
      onlyActiveOnIndex
      key={index}
      to={route}
    >
      {name}
    </NavLink>
  ));

  const dispatch = useDispatch();
  const selectedArticle = useSelector((state) => state.selectedArticle);
  const disabledButtons = selectedArticle
    ? 'countryRadioButtons navbar-text disabled'
    : 'countryRadioButtons navbar-text';
  const onRadioButtonsChange = (value) => {
    dispatch(selectedCountryAction(value));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {navLinkList}
          {/* TODO: fix problem with NavLinks when they are created with for loop */}
          <Link
            className="nav-link"
            activeClassName="activeLink"
            onlyActiveOnIndex
            to="/categories"
          >
            Categories
          </Link>
          <Link
            className="nav-link"
            activeClassName="activeLink"
            onlyActiveOnIndex
            to="/search"
          >
            Search
          </Link>
        </ul>
        <span>
          <RadioButtonsComponent
            customClass={disabledButtons}
            selectedValue={selectedCountry}
            onRadioButtonsChange={onRadioButtonsChange}
            values={radioButtonsInit}
            name="country"
          />
        </span>
      </div>
    </nav>
  );
}

HorizontalNavBarComponent.propTypes = {
  links: PropTypes.array,
  selectedCountry: PropTypes.string,
};

HorizontalNavBarComponent.defaultProps = {
  links: [],
  selectedCountry: '',
};

export default HorizontalNavBarComponent;
