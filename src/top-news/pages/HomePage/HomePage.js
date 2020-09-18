import React, {useEffect, useState} from 'react';
import TopNewsCardListComponent
    from "../../../common/components/top-news-card-list-component/top-news-card-list-component";
import {useDispatch, useSelector} from "react-redux";
import {loadedTopArticlesAction} from "../../../redux/actions/news-actions";
import {Route} from "react-router-dom";
import TopNewsDetailComponent from "../../../common/components/top-news-detail-component/top-news-detail-component";
import {API_KEY} from "../../../config/constants";

function TopNewsHomePage(props) {
    console.log('HOMEPAGE PROPS',props)
    const [loading, setLoading] = useState(false);
    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();
    useEffect(() => {
        setLoading(true)
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then(data => data.json())
            .then(data => {
                console.log('HOME PAGE LOADED ', data)
                dispatch(loadedTopArticlesAction(data.articles));
                setLoading(false);
            }).catch(e => console.log(e));
    }, []);

    return (
        <div className="container-fluid">
            <Route path='/' exact>
                <TopNewsCardListComponent articles={articles}/>
            </Route>
            <Route path='/article' exact>
                <TopNewsDetailComponent  />
            </Route>
        </div>
    )
}

export default TopNewsHomePage
