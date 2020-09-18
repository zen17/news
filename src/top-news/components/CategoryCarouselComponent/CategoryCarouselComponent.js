import React, {useState, useEffect} from 'react';
import ItemsCarousel from "react-items-carousel";
import CardComponent from "../../../common/components/CardComponent/CardComponent";

function CategoryCarouselComponent(props) {

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


const articles = props.articles?.map((article,index) => <CardComponent ket={index} article={article}/>);
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
