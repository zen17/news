import React, {useEffect} from 'react';
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

    const goBack = () => {
      //  history.goBack()
    }


    useEffect(() => {
        if(props.articles.length === 0){
            goBack();
        }
    }, []);

    const articles = props.articles?.map((article, index) => (
        <div key={index} className="col-md-4 col-lg-3 mt-4">
            <CardComponent onMoreBtnClick={openArticleDetailView} showHoverAnimation={true} article={article}/>
        </div>
    ))
    return (
        <div className="row justify-content-center">
            {articles}
        </div>
    );
}
export default CardListComponent;
