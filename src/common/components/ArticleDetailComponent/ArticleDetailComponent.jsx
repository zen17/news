import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectedArticleAction } from '../../../redux/actions/news-actions';

const ArticleDetailComponent = ({ selectedArticle, onBackBtnClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOnBackBtn = () => {
    history.goBack();
  };

  useEffect(() => {
    if (!selectedArticle) {
      history.push('/');
    }
    return () => {
      dispatch(selectedArticleAction(null));
    };
  }, []);

  const article = selectedArticle || {};

  return (
    <div>
      <button className="nav-link" onClick={handleClickOnBackBtn}>
        Back
      </button>
      <h2>{article.title}</h2>
      <img src={article.urlToImage} className="card-img-top" alt="..." />
      <p className="card-text">{article.content}</p>
    </div>
  );
};

ArticleDetailComponent.propTypes = {
  selectedArticle: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    content: PropTypes.string,
  }),
  onBackBtnClick: PropTypes.func,
};

ArticleDetailComponent.defaultProps = {
  selectedArticle: { title: '', urlToImage: '', content: '' },
  onBackBtnClick: () => {},
};

export default ArticleDetailComponent;
