import React from 'react';
import "./CardComponent.scss"
import {Link, useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectedArticleAction} from "../../../redux/actions/news-actions";

const CardComponent = (props) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const location = useLocation();
    const openArticleDetailView = () => {
        dispatch(selectedArticleAction(props.article));
        if (location.pathname === '/')
            history.push(`${location.pathname}article`)
        else
            history.push(`${location.pathname}/article`)
    }

    const resizeOnHoverClass = props.showHoverAnimation ? 'card card-resize' : 'card';
    return (
        <div className={resizeOnHoverClass}>
            <img src={props.article.urlToImage} className="card-img-top image-size" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.article.title}</h5>
                <p className="card-text overflow-hidden">{props.article.description}</p>
                <a className="btn btn-primary" onClick={openArticleDetailView}>More</a>
            </div>
        </div>
    );
}
export default CardComponent
