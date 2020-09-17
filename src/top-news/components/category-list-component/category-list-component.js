import React, {useState} from 'react';
import ItemsCarousel from "react-items-carousel";
import TopNewsCardComponent from "../../../common/components/top-news-card-component/top-news-card-component";

function CategoryListsComponent(props) {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;

    const articles = props.articles?.map(article => <TopNewsCardComponent article={article}/>);
    return (
        <div style={{padding: `0 ${chevronWidth}px`}}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
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


export default CategoryListsComponent;
