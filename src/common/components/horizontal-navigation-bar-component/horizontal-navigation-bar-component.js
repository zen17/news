import React from "react";

function HorizontalNavBarComponent(props) {
    const links = props.links;
    let listItems = [];
    if (links) {
        listItems = links.map(({name, route}) =>
            <li key={route}><a className="nav-link">{name}</a></li>
        );
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">News</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {listItems}
                </ul>
                <span className="navbar-text">Navbar text with an inline element</span>
            </div>
        </nav>
    );
}

export default HorizontalNavBarComponent;
