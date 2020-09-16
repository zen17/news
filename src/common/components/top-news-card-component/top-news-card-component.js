import React from 'react';
import "./top-news-card-component.scss"
import {Link} from "react-router-dom";

const TopNewsCardComponent = (props) => {
    return (
        <div className="card">
            <img src={props.article.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.article.title}</h5>
                <p className="card-text">{props.article.description}</p>
                    <a className="btn btn-primary" >More</a>
            </div>
        </div>
    );
}
export default TopNewsCardComponent
