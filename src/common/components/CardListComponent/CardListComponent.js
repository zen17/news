import React from 'react';
import CardComponent from "../CardComponent/CardComponent";
import "./CardListComponent.scss"

const CardListComponent = (props) => {


    const handleOnMoreBtnClick = (article) => {
        props.onMoreBtnClick(article);
    }

    const articles = props.articles.map((article, index) => (
        <div key={index} className="col-md-4 col-lg-3 mt-4">
            <CardComponent onMoreBtnClick={handleOnMoreBtnClick} showHoverAnimation={true} article={article}/>
        </div>
    ))
    return (
        <div className="row justify-content-center">
            {articles}
        </div>
    );
}
export default CardListComponent;
