import React from "react";
import {Link} from "react-router-dom";
import {GB_LANGUAGE, US_LANGUAGE} from "../../../config/constants";
import RadioButtonsComponent from "../RadioButtonsComponent/RadioButtonsComponent";
import {useDispatch, useSelector} from "react-redux";
import {selectedCountryAction} from "../../../redux/actions/news-actions";

function HorizontalNavBarComponent(props) {

    const radioButtonsInit = [{value: 'GB', option: 'GB'}, {value: 'US', option: 'US'}]
    const listItems = props.links.map(({name, route, index}) =>
        <Link key={index} to={route}>
            {name}
        </Link>
    );
    const selectedArticle = useSelector(state => state.selectedArticle);
    const disabledButtons = selectedArticle ? 'navbar-text disabled' : 'navbar-text';
    const dispatch = useDispatch();
    const onRadioButtonsChange = (value) => {
        dispatch(selectedCountryAction(value))
        console.log(value)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                News
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {listItems}
                </ul>
                <span className={disabledButtons}>
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
