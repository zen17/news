import {combineReducers} from "redux";
import articlesReducer from "./articles-reducer";
import selectedArticleReducer from "./selected-article-reducer";
import categoryArticlesReducer from "./category-articles-readucer";
import selectedCountryReducer from "./selected-country";

const reducers = combineReducers({
    articles: articlesReducer,
    selectedArticle: selectedArticleReducer,
    categoryArticles: categoryArticlesReducer,
    selectedCountry: selectedCountryReducer
})
export default reducers;
