import React, {useState} from 'react';
import CardComponent from "../CardComponent/CardComponent";
import "./CardListComponent.scss"
import {useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectedArticleAction} from "../../../redux/actions/news-actions";

const CardListComponent = (props) => {

    const history = useHistory()
    const dispatch = useDispatch();
    const location = useLocation();
    const openArticleDetailView = (article) => {
        dispatch(selectedArticleAction(article));
        if (location.pathname === '/')
            history.push(`${location.pathname}article`)
        else
            history.push(`${location.pathname}/article`)
    }
    return (
            <div className="row justify-content-center">
                {props.articles?.map((article, index) => (
                    <div key={index} className="col-md-4 col-lg-3 mt-4">
                        <CardComponent onMoreBtnClick={openArticleDetailView} showHoverAnimation={true} article={article}/>
                    </div>
                ))}
            </div>
    );
}
export default CardListComponent;
