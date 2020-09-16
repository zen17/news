import React from 'react';

const TopNewsDetailComponent = (props) => {
    return (
        <div >
            <h2>{props.article.title}</h2>
            <img src={props.article.urlToImage} className="card-img-top" alt="..."/>
            <p className="card-text">{props.article.content}</p>
        </div>
    );
}
export default TopNewsDetailComponent;
