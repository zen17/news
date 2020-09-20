import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CardComponent from '../../../common/components/CardComponent/CardComponent';
import { selectedArticleAction } from '../../../redux/actions/news-actions';

function CategoryCarouselComponent({ articles }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(5);
  const chevronWidth = 80;
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const openArticleDetailView = (article) => {
    dispatch(selectedArticleAction(article));
    if (location.pathname === '/') history.push(`${location.pathname}article`);
    else history.push(`${location.pathname}/article`);
  };

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const articlesComponent = articles.map((article, index) => (
    <CardComponent
      onMoreBtnClick={openArticleDetailView}
      key={index}
      article={article}
    />
  ));
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
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
        {articlesComponent}
      </ItemsCarousel>
    </div>
  );
}

CategoryCarouselComponent.propTypes = {
  articles: PropTypes.array,
};
CategoryCarouselComponent.defaultProps = {
  articles: [],
};

export default CategoryCarouselComponent;
