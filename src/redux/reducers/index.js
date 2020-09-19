import {combineReducers} from "redux";
import articlesReducer from "./articles-reducer";
import selectedArticleReducer from "./selected-article-reducer";
import categoryArticlesReducer from "./category-articles-readucer";
import selectedCountryReducer from "./selected-country";
import selectedArticlesCategoryReducer from "./selceted-articles-category";

const reducers = combineReducers({
    articles: articlesReducer,
    selectedArticle: selectedArticleReducer,
    categoryArticles: categoryArticlesReducer,
    selectedCountry: selectedCountryReducer,
    selectedArticlesCategory: selectedArticlesCategoryReducer
})
export default reducers;
