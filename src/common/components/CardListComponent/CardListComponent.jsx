import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CardComponent from '../CardComponent/CardComponent';
import './CardListComponent.scss';

const CardListComponent = ({
  articles,
  onMoreBtnClick,
  showHoverAnimation,
}) => {
  const handleOnMoreBtnClick = (article) => {
    onMoreBtnClick(article);
  };

  const cardList = articles.map((article, index) => (
    <div key={index} className="col-md-4 col-lg-3 mt-4">
      <CardComponent
        onMoreBtnClick={handleOnMoreBtnClick}
        showHoverAnimation={showHoverAnimation}
        article={article}
      />
    </div>
  ));
  return <div className="row justify-content-center">{cardList}</div>;
};

CardListComponent.propTypes = {
  articles: PropTypes.array,
  onMoreBtnClick: PropTypes.func,
  showHoverAnimation: PropTypes.bool,
};

CardListComponent.defaultProps = {
  article: [],
  onMoreBtnClick: () => {},
  showHoverAnimation: true,
};

export default CardListComponent;
