import React, {useState, useEffect} from 'react';
import ItemsCarousel from "react-items-carousel";
import TopNewsCardComponent from "../../../common/components/top-news-card-component/top-news-card-component";

function CategoryListsComponent(props) {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [numberOfCards, setNumberOfCards] = useState(5);
    const chevronWidth = 80;


    useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 1000) {
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
            }  else {
                setNumberOfCards(5);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


const articles = props.articles?.map(article => <TopNewsCardComponent  article={article}/>);
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


export default CategoryListsComponent;
