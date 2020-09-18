import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const TopNewsDetailComponent = (props) => {
    const selectedArticle = useSelector(state => state.selectedArticle);
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    return (
        <div >
            <a className="nav-link" onClick={goBack}> Back </a>
            <h2>{selectedArticle.title}</h2>
            <img src={selectedArticle.urlToImage} className="card-img-top" alt="..."/>
            <p className="card-text">{selectedArticle.content}</p>
        </div>
    );
}
export default TopNewsDetailComponent;
