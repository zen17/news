import React from 'react';
import "./top-news-card-component.scss"
const TopNewsCardComponent = (props) => {
    return (
        <div className="card">
            <img src={props.news.urlToImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.news.title}</h5>
                    <p className="card-text">{props.news.description}</p>
                    <a href="#" className="btn btn-primary">More</a>
                </div>
        </div>
    );
}
export default TopNewsCardComponent
