import React, {useState, useEffect} from 'react';
import ItemsCarousel from "react-items-carousel";
import CardComponent from "../../../common/components/CardComponent/CardComponent";
import {selectedArticleAction} from "../../../redux/actions/news-actions";
import {useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";

function CategoryCarouselComponent(props) {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [numberOfCards, setNumberOfCards] = useState(5);
    const chevronWidth = 80;
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

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1000) {
                setNumberOfCards(4);
                if (window.innerWidth < 850) {
                    setNumberOfCards(3);
                }
                if (window.innerWidth < 600) {
                    setNumberOfCards(2);
                }
                if (window.innerWidth < 420) {
                    setNumberOfCards(1);
                }
            } else {
                setNumberOfCards(5);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const articles = props.articles?.map((article, index) =>
        <CardComponent onMoreBtnClick={openArticleDetailView} key={index} article={article}/>);
    return (
        <div style={{padding: `0 ${chevronWidth}px`}}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={numberOfCards}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {articles}
            </ItemsCarousel>
        </div>
    )
}


export default CategoryCarouselComponent;
