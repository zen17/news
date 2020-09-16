import {SELECTED_ARTICLE} from "../actions/news-actions-types";

export default function selectedArticleReducer(state = {}, action) {
    switch (action.type) {
        case SELECTED_ARTICLE:
            return {...state, selectedArticle: action.payload};
        default:
            return state;
    }
}
