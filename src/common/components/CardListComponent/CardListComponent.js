import React, {useState} from 'react';
import CardComponent from "../CardComponent/CardComponent";
import "./CardListComponent.scss"

const CardListComponent = (props) => {
    return (
            <div className="row justify-content-center">
                {props.articles?.map((article, index) => (
                    <div key={index} className="col-md-4 col-lg-3 mt-4">
                        <CardComponent showHoverAnimation={true} article={article}/>
                    </div>
                ))}
            </div>
    );
}
export default CardListComponent;
