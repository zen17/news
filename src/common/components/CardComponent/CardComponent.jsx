import React from 'react';
import './CardComponent.scss';
import PropTypes from 'prop-types';

const CardComponent = ({ article, onMoreBtnClick, showHoverAnimation }) => {
  const handleClickOnMoreBtn = () => {
    onMoreBtnClick(article);
  };
  const resizeOnHoverClass = showHoverAnimation ? 'card card-resize' : 'card';

  return (
    <div className={resizeOnHoverClass}>
      <img
        src={article.urlToImage}
        className="card-img-top image-size"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text overflow-hidden">{article.description}</p>
        <button className="btn btn-primary" onClick={handleClickOnMoreBtn}>
          More
        </button>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
  }),
  onMoreBtnClick: PropTypes.func,
  showHoverAnimation: PropTypes.bool,
};

CardComponent.defaultProps = {
  article: { title: '', urlToImage: '', description: '' },
  onMoreBtnClick: () => {},
  showHoverAnimation: false,
};

export default CardComponent;
