import React, {useState} from 'react';
import TopNewsCardComponent from "../top-news-card-component/top-news-card-component";
import "./top-news-card-list-component.scss"

const TopNewsCardListComponent = (props) => {
    console.log('CARD LIST PROPS', props)
    return (
            <div className="row justify-content-center">
                {props.articles?.map((article, index) => (
                    <div key={index} className="col-md-4 col-lg-3 mt-4">
                        <TopNewsCardComponent showHoverAnimation={true} article={article}/>
                    </div>
                ))}
            </div>
    );
}
export default TopNewsCardListComponent;
