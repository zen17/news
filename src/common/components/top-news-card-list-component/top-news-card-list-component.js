import React from 'react';
import TopNewsCardComponent from "../top-news-card-component/top-news-card-component";
import "./top-news-card-list-component.scss"

const TopNewsCardListComponent = (props) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center m-2">
                {props.news.map((item, index) => (
                    <div className="col-md-4 col-lg-3 mt-2">
                        <TopNewsCardComponent key={index} news={item}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TopNewsCardListComponent;
