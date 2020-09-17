import {combineReducers} from "redux";
import articlesReducer from "./articles-reducer";
import selectedArticleReducer from "./selected-article-reducer";
import categoryArticlesReducer from "./category-articles-readucer";
import changedLanguageReducer from "./change-language";

const reducers = combineReducers({
    articles: articlesReducer,
    selectedArticle: selectedArticleReducer,
    categoryArticles: categoryArticlesReducer,
    language: changedLanguageReducer
})
export default reducers;
