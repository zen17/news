import React from "react";
import {Link, NavLink} from "react-router-dom";
import RadioButtonsComponent from "../RadioButtonsComponent/RadioButtonsComponent";
import {useDispatch, useSelector} from "react-redux";
import {selectedCountryAction} from "../../../redux/actions/news-actions";
import './HorizontalNavBarComponent.scss'

function HorizontalNavBarComponent(props) {

    const radioButtonsInit = [{value: 'GB', option: 'GB'}, {value: 'US', option: 'US'}]

    const navLinkList = props.links.map(({name, route, index}) =>
        <NavLink  className='nav-link' exact activeClassName="activeLink"  onlyActiveOnIndex  key={index} to={route}>
            {name}
        </NavLink>
    );
    const selectedArticle = useSelector(state => state.selectedArticle);
    const disabledButtons = selectedArticle ? 'countryRadioButtons navbar-text disabled' : 'countryRadioButtons navbar-text';
    const dispatch = useDispatch();
    const onRadioButtonsChange = (value) => {
        dispatch(selectedCountryAction(value))
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className='btn btn-floating' to="/">
                News
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {navLinkList}
                </ul>
                <span >
                         <RadioButtonsComponent
                             className={disabledButtons}
                             selectedValue={props.selectedCountry}
                             onRadioButtonsChange={onRadioButtonsChange}
                             values={radioButtonsInit} name="country"/>
                </span>
            </div>
        </nav>
    );
}

export default HorizontalNavBarComponent;
