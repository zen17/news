import React from 'react';
import "./CardComponent.scss"

const CardComponent = (props) => {

    const handleClickOnMoreBtn = () => {
        props.onMoreBtnClick(props.article);
    }
    const resizeOnHoverClass = props.showHoverAnimation ? 'card card-resize' : 'card';

    return (
        <div className={resizeOnHoverClass}>
            <img src={props.article.urlToImage} className="card-img-top image-size" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.article.title}</h5>
                <p className="card-text overflow-hidden">{props.article.description}</p>
                <a className="btn btn-primary" onClick={handleClickOnMoreBtn}>More</a>
            </div>
        </div>
    );
}
export default CardComponent
