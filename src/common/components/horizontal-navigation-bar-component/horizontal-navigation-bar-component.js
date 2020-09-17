import React from "react";
import {Link} from "react-router-dom";
import {GB_LANGUAGE, US_LANGUAGE} from "../../../config/constants";

function HorizontalNavBarComponent(props) {

    const listItems = props.links.map(({name, route, index}) =>
        <Link key={index} to={route}>
            {name}
        </Link>
    );
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
                <span className="navbar-text">

                </span>
            </div>
        </nav>
    );
}

export default HorizontalNavBarComponent;
