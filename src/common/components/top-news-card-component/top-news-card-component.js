import React from 'react';
import "./top-news-card-component.scss"
import {useHistory} from "react-router-dom";
import {useDispatch } from "react-redux";
import {selectedArticleAction} from "../../../redux/actions/news-actions";

const TopNewsCardComponent = (props) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const openArticleDetailView = () => {
        console.log('CARD11', props.article)
    dispatch(selectedArticleAction(props.article));
        history.push('/article')
    }
    return (
        <div className="card">
            <img src={props.article.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.article.title}</h5>
                <p className="card-text">{props.article.description}</p>
                    <a className="btn btn-primary" onClick={openArticleDetailView} >More</a>
            </div>
        </div>
    );
}
export default TopNewsCardComponent
