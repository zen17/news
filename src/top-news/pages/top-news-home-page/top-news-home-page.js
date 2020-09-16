import React, {useEffect, useState} from 'react';
import TopNewsCardListComponent
    from "../../../common/components/top-news-card-list-component/top-news-card-list-component";
import {useDispatch, useSelector} from "react-redux";
import {loadedTopNews} from "../../../redux/actions/news-actions";

function TopNewsHomePage(props) {
    const links = [{name: "Top News", route: "/"},
        {name: "Categories", route: "/categories"},
        {name: "Search", route: "/search"}]

    const [loading, setLoading] = useState(false);
    const topNews = useSelector(state => state.topNews);
    const dispatch = useDispatch();
    useEffect(() => {
        setLoading(true)
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ac650ec4d1d34bd3b64420a5667b45a4')
            .then(data => data.json())
            .then(data => {
                console.log('GET', data)
                dispatch(loadedTopNews(data.articles));
                setLoading(false);
            }).catch(e => console.log(e));
    }, []);

    return (
        <div className="container-fluid">
        <TopNewsCardListComponent news={topNews}/>
        </div>
    )
}

export default TopNewsHomePage
