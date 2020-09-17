import React from 'react';
import "./top-news-card-component.scss"
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectedArticleAction} from "../../../redux/actions/news-actions";

const TopNewsCardComponent = (props) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const openArticleDetailView = () => {
        dispatch(selectedArticleAction(props.article));
        history.push('/article')
    }

    const resizeOnHoverClass = props.showHoverAnimation ? 'card card-resize' : 'card';
    console.log('CLASSA', resizeOnHoverClass)
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
export default TopNewsCardComponent
