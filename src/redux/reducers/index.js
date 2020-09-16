import newsReducer from "./news-reducer";
import {combineReducers} from "redux";
const reducers = combineReducers({
    topNews: newsReducer
})
export default reducers;
