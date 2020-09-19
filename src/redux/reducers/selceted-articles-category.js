import {SELECTED_ARTICLES_CATEGORY} from "../actions/news-actions-types";


export default function selectedArticlesCategoryReducer(state = '', action) {
    switch (action.type) {
        case SELECTED_ARTICLES_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}
