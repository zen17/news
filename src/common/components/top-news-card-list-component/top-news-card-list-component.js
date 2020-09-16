import React, {useState} from 'react';
import TopNewsCardComponent from "../top-news-card-component/top-news-card-component";
import "./top-news-card-list-component.scss"

const TopNewsCardListComponent = (props) => {
    return (
            <div className="row justify-content-center">
                {props.news.map((item, index) => (
                    <div key={index} className="col-md-4 col-lg-3 mt-2">
                        <TopNewsCardComponent  article={item}/>
                    </div>
                ))}
            </div>
    );
}
export default TopNewsCardListComponent;
