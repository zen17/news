import React, {useEffect, useState} from 'react';
import HorizontalNavBarComponent
    from "../../common/components/horizontal-navigation-bar-component/horizontal-navigation-bar-component";
import TopNewsCardListComponent from "../../common/components/top-news-card-list-component/top-news-card-list-component";

function TopNewsHomePage(props) {
    const links = [{name: "Home", route: "home"},
        {name: "Categories", route: "categories"},
        {name: "Search", route: "search"}]

    const [topNews, setTopNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ac650ec4d1d34bd3b64420a5667b45a4')
            .then(data => data.json())
            .then(data => {
                console.log('GET',data)
                setTopNews(data.articles);
                setLoading(false);
            }).catch(e => console.log(e));
    }, [])

    return (
        <div >
            <HorizontalNavBarComponent links={links}/>
            <h4>Top News From </h4>
            <TopNewsCardListComponent news={topNews}/>
        </div>
    )
}

export default TopNewsHomePage
