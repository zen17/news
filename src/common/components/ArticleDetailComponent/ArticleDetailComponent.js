import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {selectedArticleAction} from "../../../redux/actions/news-actions";
import {useDispatch} from "react-redux";

const ArticleDetailComponent = (props) => {
    // const dispatch = useDispatch();
    // const history = useHistory()
    // const goBack = () => {
    //     history.goBack()
    // }

    const handleClickOnBackBtn = () => {
        props.onBackBtnClick();
    }

    // useEffect(() => {
    //     if(!props.selectedArticle){
    //         goBack();
    //     }
    //     return () => {
    //         dispatch(selectedArticleAction(null))
    //     }
    // }, []);

    return (
        <div>
            <a className="nav-link" onClick={handleClickOnBackBtn}> Back </a>
            <h2>{props.selectedArticle.title}</h2>
            <img src={props.selectedArticle.urlToImage} className="card-img-top" alt="..."/>
            <p className="card-text">{props.selectedArticle.content}</p>
        </div>
    );
}
export default ArticleDetailComponent;
