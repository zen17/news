import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {selectedArticleAction} from "../../../redux/actions/news-actions";

const ArticleDetailComponent = (props) => {
    const selectedArticle = useSelector(state => state.selectedArticle);
    const dispatch = useDispatch();
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    useEffect(() => {
        return () => {
            dispatch(selectedArticleAction(null))
        }
    }, []);

    return (
        <div>
            <a className="nav-link" onClick={goBack}> Back </a>
            <h2>{selectedArticle?.title}</h2>
            <img src={selectedArticle?.urlToImage} className="card-img-top" alt="..."/>
            <p className="card-text">{selectedArticle?.content}</p>
        </div>
    );
}
export default ArticleDetailComponent;
