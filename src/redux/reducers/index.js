import articlesReducer from "./articles-reducer";
import {combineReducers} from "redux";
import selectedArticleReducer from "./selected-article-reducer";
const reducers = combineReducers({
    articles: articlesReducer,
    selectedArticle: selectedArticleReducer
})
export default reducers;
